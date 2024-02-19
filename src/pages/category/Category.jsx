import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import { featchDataFromApi } from "../../utils/api";

import logo from "../../assets/logo.svg";

const Category = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState(null);
  const [meta, setMeta] = useState(null);
  const [category, setCategory] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 9;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getCategory();
  }, [slug]);
  useEffect(() => {
    getCategory();
    getProducts();
  }, [slug, pageIndex]);

  const getCategory = async () => {
    const { data } = await featchDataFromApi(
      `/api/categories?filters[slug][$eq]=${slug}`
    );

    setCategory(data[0].attributes);
  };

  const getProducts = async () => {
    setIsLoading(true);
    const data = await featchDataFromApi(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`
    );
    setProducts(data.data);
    setMeta(data.meta);
    setIsLoading(false);
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* heading and paragraph start  */}
        <div className="text-center max-w-[800px] mt-8 md:mt-0 mx-auto">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.name}
          </div>
        </div>
        {/* heading and paragraph end  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* PAGINATION BUTTONS START */}
        {meta?.pagination?.total > pageSize && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              meta && meta?.pagination?.pageCount
            }`}</span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (meta && meta?.pagination?.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
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

export default Category;
