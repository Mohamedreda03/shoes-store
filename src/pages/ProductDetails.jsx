import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import ProductDetailsCarousel from "../components/ProductDetailsCarousel";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("done");
    }, []);
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>
                    {/* ................................... */}
                    <div className="flex-[1] py-3">
                        <div className="text-[34px] font-semibold mb-2">
                            Jordan Retro 6 G
                        </div>
                        <div className="text-lg font-semibold mb-5">
                            Men{"'"}s Golf shoes
                        </div>
                        <div className="text-lg font-semibold">
                            MRP : $ 19 695.00
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
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-semibold text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* header size end */}

                            {/* select size start */}

                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 6.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 7
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 7.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 8
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 8.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 9
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                                    UK 9.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed border-black/[0.1] opacity-50">
                                    UK 10
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed border-black/[0.1] opacity-50">
                                    UK 10.5
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed border-black/[0.1] opacity-50">
                                    UK 11
                                </div>
                            </div>
                            <div className="text-red-600 mt-1">
                                Size selection is required
                            </div>

                            {/* select size end */}
                        </div>

                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg
                         font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
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

                        <div className="text-lg font-bold mb-5">
                            Product Details
                        </div>

                        <div className="text-md mb-5">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" The Extremes of Good and
                            Evil by Cicero, written in 45 BC. This book is a
                            treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in section 1.10.32. The standard chunk of Lorem
                            Ipsum used since the 1500s is reproduced below for
                            those interested. Sections 1.10.32 and 1.10.33 from
                            "de Finibus Bonorum et Malorum" by Cicero are also
                            reproduced in their exact original form, accompanied
                            by English versions from the 1914 translation by H.
                            Rackham.
                        </div>

                        {/* Prodact size range end */}
                    </div>
                </div>
                <RelatedProducts />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;
