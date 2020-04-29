import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk) //adding paranthesis here as immutable state variant is a funtion we need to execute ; this will warn us is we accidently mutate redux store
  );
}
