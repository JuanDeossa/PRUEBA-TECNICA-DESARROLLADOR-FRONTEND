export const getTotalValue = (array) => {
  const total = array
    ?.map((product) => product?.price * product?.units)
    .reduce((price1, price2) => price1 + price2, 0);
  return total.toFixed(2);
};
