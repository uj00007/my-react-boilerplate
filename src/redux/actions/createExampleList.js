import * as types from "./actionTypes";

export function createExampleList(item) {
  return { type: types.CREATE_ITEM, payload: { item } };
}
