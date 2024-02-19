import React from "react";
import productImg from "../assets/product-1.webp";
import { BsChevronDown } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProduct, updateCart } from "../../store/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  const cart = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const cartUpdate = (key, value) => {
    let payload = {
      id: product.id,
      key,
      value: key === "quantity" ? parseInt(value) : value,
    };
    dispatch(updateCart(payload));
    toast.success("update item");
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
          src={product?.attributes?.thumbnail?.data?.attributes.url}
          alt="prodact img"
        />
      </div>
      <div className="w-full flex flex-col py-1">
        <div className="flex justify-between items-center mb-1">
          <Link
            to={`/product/${product?.attributes?.slug}`}
            className="text-[20px] font-semibold"
          >
            {product.attributes.name}
          </Link>
          <div className="font-semibold text-sm opacity-50">
            MRP : {product.totalProductQuantityPrice}$
          </div>
        </div>
        <div className="opacity-50">{product.attributes.subtitle}</div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5]">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                onChange={(e) => cartUpdate("selectedSize", e.target.value)}
                value={product.selectedSize}
                className="hover:text-black"
              >
                {product.attributes.size.data.map((item, i) => (
                  <option
                    key={i}
                    value={item.size}
                    disabled={item.enabled ? false : true}
                  >
                    {item.size}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                onChange={(e) => cartUpdate("quantity", e.target.value)}
                value={product.quantity}
                className="hover:text-black"
              >
                {Array.from({ length: 11 }, (_, index) => index + 1).map(
                  (q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(deleteCartProduct({ id: product.id }))}
            className="text-black/[0.5] cursor-pointer hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
