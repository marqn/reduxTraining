import {SELECT_ITEM} from "../actions/actions";
export const selectedItem = (state:any = null, action) => {
  switch (action.type) {

    case SELECT_ITEM:
      return action.payload;
    
    default:
      return state;
  }
};
