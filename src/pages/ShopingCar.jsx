import React from "react";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";
import imgEmpty from "../assets/empty-cart.jpg";
import { Link } from "react-router-dom";

const ShopingCar = () => {
  return (
    <div className="w-full md:p-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Item</div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium">
                  $ 19 695.00
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                quae quidem mollitia eius. Debitis a voluptatibus omnis corrupti
                repellendus. Saepe atque totam eaque veritatis deleniti
                voluptates maxime iure ut excepturi, eveniet at expedita aliquam
                reiciendis illum sed iste? Dolorum, qui!
              </div>
            </div>
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
          </div>
        </div>
        {/* this is empty car */}
        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:0mt-14">
                    <img
                        src={imgEmpty}
                        alt="img"
                        width={300}
                        height={300}
                        className="w-[300px] md:w-[400px]"
                    />
                    <span className="text-xl font-bold">
                        Your cart is empty
                    </span>
                    <span className="text-center mt-4">
                        Looks like you have not added anything in your cart.
                        <br />
                        Go ahead and explore top categories
                    </span>
                    <Link to={"/"}>
                        <button className="w-full py-4 px-8 mt-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Continue Shopping
                        </button>
                    </Link>
                </div> */}
      </Wrapper>
    </div>
  );
};

export default ShopingCar;
