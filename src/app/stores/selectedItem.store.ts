import {SELECT_ITEM} from "../actions/actions";
export const selectedItem = (state:any = null, {type, payload}) => {
  switch (type) {
    case SELECT_ITEM:
      return state;
    default:
      return state;
  }
};
