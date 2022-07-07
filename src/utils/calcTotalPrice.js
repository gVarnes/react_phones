export const calcTotalPrice = (state) => {
  return (state.totalPrice = state.basket.reduce(
    (sum, obj) => obj.price * obj.count + sum,
    0
  ));
};
