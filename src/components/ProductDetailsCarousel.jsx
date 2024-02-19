import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import img1 from "../assets/p1.png";
// import img2 from "../assets/p2.png";
// import img3 from "../assets/p3.png";
// import img4 from "../assets/p4.png";
// import img5 from "../assets/p5.png";
// import img6 from "../assets/p6.png";
// import img7 from "../assets/p7.png";
import logo from "../assets/logo.svg";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="max-w-[1360px] text-white text-[20px] w-full mx-auto sticky top-[90px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images &&
          images?.map((image) => (
            <img
              key={image.id}
              src={image?.attributes?.url}
              alt={image?.attributes?.name}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
