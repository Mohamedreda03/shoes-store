import React from "react";
import productImg from "../assets/product-1.webp";
import { BsChevronDown } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <img src={productImg} alt="prodact img" />
            </div>
            <div className="w-full flex flex-col py-1">
                <div className="flex justify-between items-center mb-1">
                    <div className="text-[20px] font-semibold">
                        Jordan Retro 6 G
                    </div>
                    <div className="font-semibold text-sm opacity-50">
                        MRP : $19 695.00
                    </div>
                </div>
                <div className="opacity-50">Men's Golf Shoes</div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5]">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select className="hover:text-black">
                                <option value="1">UK 6</option>
                                <option value="2">UK 6.5</option>
                                <option value="3">UK 7</option>
                                <option value="4">UK 7.5</option>
                                <option value="5">UK 8</option>
                                <option value="6">UK 8.5</option>
                                <option value="7">UK 9</option>
                                <option value="8">UK 9.5</option>
                                <option value="8">UK 10</option>
                                <option value="8">UK 10.5</option>
                                <option value="8">UK 11</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select className="hover:text-black">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                                <option value="1">9</option>
                                <option value="1">10</option>
                                <option value="1">11</option>
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line className="text-black/[0.5] cursor-pointer hover:text-black text-[16px] md:text-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
