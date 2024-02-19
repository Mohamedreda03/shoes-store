import React, { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/ProductCard";
import { featchDataFromApi } from "../utils/api";

import logo from "../assets/logo.svg";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    const limit = 9;
    const { data } = await featchDataFromApi(
      `/api/products?populate=*&pagination[limit]=${limit}`
    );
    setData(data);
    setIsLoading(false);
  };
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragraph start  */}
        <div className="text-center max-w-[800px] my-[50px] md:my-[80px] mx-auto">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended strended
            stretches of running.
          </div>
        </div>
        {/* heading and paragraph end  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 relative min-h-[400px]">
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {isLoading && (
            <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
              <img src={logo} width={150} />
              <span className="text-2xl font-medium">Loading...</span>
            </div>
          )}
        </div>
      </Wrapper>
    </main>
  );
};

export default Home;
