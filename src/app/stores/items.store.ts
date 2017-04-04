export const items = (state:any = [], {type, payload}) => {
  switch (type) {

    case 'ADD_ITEM':
      return payload;

    default:
      return state;
  }
}
