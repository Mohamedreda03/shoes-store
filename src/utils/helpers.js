export function calculateDiscountPercentage(originalPrice, discountedPrice) {
  const priceDifference = originalPrice - discountedPrice;

  const discountPercentage = (priceDifference / originalPrice) * 100;

  const formattedPercentage = discountPercentage.toFixed(2) + "%";

  return formattedPercentage;
}
