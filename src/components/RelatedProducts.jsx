import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { featchDataFromApi } from "../utils/api";

import logo from "../assets/logo.svg";

const RelatedProducts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 10;

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    const { data } = await featchDataFromApi(
      `/api/products?populate=*&pagination[limit]=${limit}`
    );
    setProducts(data);
    setIsLoading(false);
  };

  return (
    <>
      <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
        <div className="text-2xl font-bold mb-5">You Might Also Like</div>
        <Carousel
          responsive={responsive}
          containerClass="-mx-[10px]"
          itemClass="px-[10px]"
        >
          {products &&
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default RelatedProducts;
