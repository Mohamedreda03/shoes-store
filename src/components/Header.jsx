import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import MobileMenu from "./MobileMenu";
import { featchDataFromApi } from "../utils/api";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(4);
  const [categories, setCategories] = useState(null);
  const cart = useSelector((store) => store.cart.cartItems);

  let totalQuantity =
    cart.length > 0 &&
    cart.map((item) => item.quantity).reduce((acc, crr) => acc + crr, 0);

  // ..............................................................................

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    getCategorys();
  }, []);
  const getCategorys = async () => {
    const { data } = await featchDataFromApi("/api/categories?populate=*");

    setCategories(data);
  };

  // ..............................................................................

  return (
    <header
      className={`w-full h-[70px] border-b md:h-[80px] bg-white flex items-center justify-between
       z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="flex justify-between items-center h-[60px]">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {/* ............................ */}
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        {/* ............................ */}
        <div className="flex items-center gap-2 text-black">
          {/* icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            {/* <div className="absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] rounded-full bg-red-600 h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] flex justify-center items-center text-white px-[2px] md:px-[5px]">
              0
            </div> */}
          </div>
          {/* icon end */}
          <Link to={"/productcar"}>
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cart.length > 0 && (
                <div className="absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] rounded-full bg-red-600 h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] flex justify-center items-center text-white px-[2px] md:px-[5px]">
                  {totalQuantity}
                </div>
              )}
            </div>
          </Link>
          {/* icon end */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[19px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[24px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
