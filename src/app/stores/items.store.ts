import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from "../actions/actions";
import {Item} from "../models/Item";

export const items = (state:Array<Item> = [], action) => {
  switch (action.type) {

    case ADD_ITEM:
      return [
        Object.assign({},
          {id: action.payload.id, name: action.payload.name, description: action.payload.description})
        , ...state
      ];

    case UPDATE_ITEM:
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, action.payload) : item;
      });

    case DELETE_ITEM:
      return state
        .filter(items => items.id !== action.payload);

    default:
      return state;
  }
};
