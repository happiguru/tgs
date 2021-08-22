import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import menuData from "../../../data/header/navigation.json";

export default function Navigator() {
  const [dropdownItem, setDropdownItem] = useState();
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Home") {
        return (
          <li className="relative" key={index}>
            <Link href="/main/home">
              <a
                onClick={() => {
                  if (dropdownItem === "home") {
                    setDropdownItem("");
                    return;
                  }
                  setDropdownItem("home");
                }}
              >
                {item.title}
              </a>
            </Link>
            <CSSTransition
              in={dropdownItem === "home"}
              unmountOnExit
              timeout={200}
              classNames="dropdown-menu-mobile"
            >
              <ul className="dropdown-menu">
                {item.subMenu.map((i, index) => (
                  <li key={index}>
                    <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
                      <a>{i.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </CSSTransition>
          </li>
        );
      }

      return (
        <li key={index}>
          <Link href={item.to}>
            <a>{item.title}</a>
          </Link>
        </li>
      );
    });
  }
  return (
    <div className="navigator-mobile">
      <ul>{renderMenu()}</ul>
    </div>
  );
}
