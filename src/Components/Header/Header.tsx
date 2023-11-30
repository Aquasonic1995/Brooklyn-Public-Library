import React, { useRef, useState } from "react";
import s from "./Header.module.scss";
import sub from "../../img/icon_profile.svg";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import cn from "clsx";
import Navigation from "../Navigation/Navigation";
import { useOnClickOutside } from "usehooks-ts";
function Header() {
  const ref = useRef(null);
  const handleClickOutside = () => {
    // Your custom logic here
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  const [open, setOpen] = useState(false);
  return (
    <header>
      <h1 className={s.h1}>Brooklyn Public Library</h1>
      <div className={s.nav_wrapper}>
        <Navigation />
      </div>
      <div className={s.menu_wrapper}>
        <div className={s.menu_icons}>
          <div className={s.header_icon}>
            <img src={sub} alt="icon" />
          </div>
          {open ? (
            <RxCross1
              className={s.cross}
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <RxHamburgerMenu
              className={s.hamburger}
              onClick={() => {
                setOpen(true);
              }}
            />
          )}
        </div>{" "}
      </div>{" "}
      <div
        ref={ref}
        className={cn(s.menu, { [s.opened]: open }, { [s.closed]: !open })}
      >
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
