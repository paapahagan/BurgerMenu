import { useState } from "react";
import BurgerIcon from "./icons/BurgerIcon";
import CloseIcon from "./icons/CloseIcon";

const Nav = () => {
  const [active, setActive] = useState();
  return (
    <div className=" relative w-full max-w-[1200px] bg-red-300 p-2 ">
      <div
        className={`${
          active ? "right-0" : "-right-[250px]"
        }  h-screen top-0   absolute w-full bg-slate-300
              max-w-[250px] duration-200`}
      ></div>

      <nav className="flex justify-between items-center">
        <h1 className=" font-bold text-xl">
          Burger <span className=" font-light">Menu</span>
        </h1>
        {/* image */}
        <button
          onClick={() => {
            setActive(!active);
          }}
          className={`${active ? "active" : <CloseIcon />}  `}
        >
          <BurgerIcon />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
