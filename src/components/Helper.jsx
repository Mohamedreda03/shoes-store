export const getDiscount = (originalPrice, discountPrice) => {
  return (((originalPrice - discountPrice) / originalPrice) * 100).toFixed(2);
};
