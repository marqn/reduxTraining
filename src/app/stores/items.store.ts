export const SELECT_ITEM = 'SELECT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';

export const items = (state:any = null, {type, payload}) => {
  switch (type) {

    case SELECT_ITEM:
      return payload;

    case CREATE_ITEM:
      return [...state, payload];

    case DELETE_ITEM:
      return payload;

    default:
      return state;
  }
}
