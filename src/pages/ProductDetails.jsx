import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import ProductDetailsCarousel from "../components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "../components/RelatedProducts";
import { useParams } from "react-router-dom";
import { featchDataFromApi } from "../utils/api";
import { calculateDiscountPercentage } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import logo from "../assets/logo.svg";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cart = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, [slug]);

  const getProduct = async () => {
    setIsLoading(true);
    const { data } = await featchDataFromApi(
      `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );

    setProduct(data[0]);
    setIsLoading(false);
  };

  const addProduct = () => {
    dispatch(
      addToCart({
        ...product,
        selectedSize,
      })
    );
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={product?.attributes.images?.data} />
          </div>
          {/* ................................... */}
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-10">
              {product?.attributes.name}
            </div>
            <div className="text-lg font-semibold mb-5">
              {product?.attributes?.subtitle}
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold">MRP : $ {product?.price}</p>
              {product?.attributes.original_price && (
                <>
                  <div className="text-base font-medium line-through text-black/60">
                    ${product?.attributes.original_price}
                  </div>
                  <div className="text-base text-green-500 ml-auto">
                    {calculateDiscountPercentage(
                      product?.attributes.original_price,
                      product?.attributes.price
                    )}{" "}
                    off
                  </div>
                </>
              )}
            </div>
            <div className="text-lg font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-lg font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* Prodact size range start */}

            <div className="mb-10">
              {/* header size start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-semibold text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* header size end */}

              {/* select size start */}

              <div id="sizeGrid" className="grid grid-cols-3 gap-2">
                {product?.attributes?.size?.data.map((s, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      s.enabled
                        ? "cursor-pointer hover:border-black"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === s.size && "border-black"}`}
                    onClick={() => {
                      if (s.enabled) {
                        setSelectedSize(s.size);
                        setShowError(false);
                      }
                    }}
                  >
                    {s.size}
                  </div>
                ))}
              </div>
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}

              {/* select size end */}
            </div>

            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizeGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  addProduct();
                  toast.success("added to cart.");
                }
              }}
            >
              Add to Cart
            </button>

            <button
              className="w-full py-4 rounded-full border border-black text-lg
                         font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10 hover:opacity-75"
            >
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>

            <div className="text-lg font-bold mb-5">Product Details</div>

            <div className="text-md mb-5">
              {product?.attributes.description.map((text, i) => (
                <p key={i}>{text.children[0].text}</p>
              ))}
            </div>

            {/* Prodact size range end */}
          </div>
        </div>
        <RelatedProducts />
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src={logo} width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
