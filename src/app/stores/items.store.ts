import { ADD_ITEM, DELETE_ITEM } from "../actions/actions";
import {Item} from "../models/Item";

export const items = (state:Array<Item> = [], action) => {
  switch (action.type) {

    case ADD_ITEM:
      return [...state,
        Object.assign({},
          {id: action.payload.id, name: action.payload.name, description: action.payload.description })
      ];

    case DELETE_ITEM:
      console.log(state);
      return state
        .filter(items => items.id !== action.payload);

    default:
      return state;
  }
}
