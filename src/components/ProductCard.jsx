import React from "react";
import { Link } from "react-router-dom";
import productImg from "../assets/product-1.webp";

const ProductCard = () => {
    return (
        <Link
            to={"/productdetails"}
            className="transform hover:scale-105 duration-200 overflow-hidden bg-white"
        >
            <img src={productImg} alt="" className="w-full" />
            <div className=" p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Product Name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <div className="mr-2 text-lg font-semibold">$20.00</div>
                    <div className="text-base font-medium line-through">
                        $25.00
                    </div>
                    <div className="text-base text-green-500 ml-auto">
                        20% off
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
