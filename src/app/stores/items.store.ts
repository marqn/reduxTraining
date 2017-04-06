import {SELECT_ITEM, ADD_ITEM, DELETE_ITEM} from "../actions/actions";

export const items = (state:any = [], action) => {
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
