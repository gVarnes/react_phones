export const removeBasketItem = (state, action) => {
  return (state.basket = state.basket.filter(
    (item) => item.id !== action.payload
  ));
};
