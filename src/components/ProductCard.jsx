import React from "react";
import { Link } from "react-router-dom";
import { calculateDiscountPercentage } from "../utils/helpers";

const ProductCard = ({ product }) => {
  const p = product?.attributes;

  return (
    <Link
      to={`/product/${p?.slug}`}
      className="transform hover:scale-105 duration-200 overflow-hidden bg-white"
    >
      <img
        src={p?.thumbnail?.data?.attributes?.url}
        alt=""
        className="w-full"
      />
      <div className=" p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <div className="mr-2 text-lg font-semibold">${p?.price}</div>
          {p?.original_price && (
            <>
              <div className="text-base font-medium line-through">
                ${p?.original_price}
              </div>
              <div className="text-base text-green-500 ml-auto">
                {calculateDiscountPercentage(p?.original_price, p?.price)} off
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
