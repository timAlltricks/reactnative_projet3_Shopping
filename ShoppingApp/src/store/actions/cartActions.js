export const addItem = item => (
  {
    type: 'ADD_ITEM',
    payload: item,
  }
);

export const deleteItem = item => (
  {
    type: 'DEL_ITEM',
    payload: item,
  }
);