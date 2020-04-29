import React from "react";
import { Route, Switch } from "react-router-dom"; //switch allows us to declare that only one route to match
import HomePage from "../../containers/homepage/Homepage";
import AboutPage from "../../containers/about/About";
import CoursesPage from "../../containers/courses/CoursesPage";
import ManageCoursePage from "../../containers/courses/ManageCoursePage";

import Header from "../common/Header";
import PageNotFound from "../page_not_found/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
