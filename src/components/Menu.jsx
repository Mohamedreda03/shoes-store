import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                <div className="flex items-center gap-2">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>
                                {showCatMenu && (
                                    <ul className="absolute top-6 left-[-20px] bg-white shadow-lg min-w-[250px] text-black py-1 px-1">
                                        {subMenuData.map((submenu) => {
                                            return (
                                                <Link
                                                    key={submenu.id}
                                                    to={"/"}
                                                    onClick={() =>
                                                        setShowCatMenu(false)
                                                    }
                                                >
                                                    <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                        {submenu.name}
                                                        <span className="opacity-50 text-sm">
                                                            {submenu.doc_count}
                                                        </span>
                                                    </li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li>
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;
