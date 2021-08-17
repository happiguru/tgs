import Link from "next/link";
import classNames from "classnames";

import menuData from "../../../data/header/navigation.json";

export default function Navigator({ disableSubmenu, className }) {
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Home") {
        return (
          <li className="relative" key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <a>
                {item.title}
              </a>
            </Link>
            <ul className="">
              {item.subMenu.map((i, index) => (
                <li key={index}>
                  <Link href={i.to}>
                    <a>{i.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      
      return (
        <li key={index}>
          <Link href={process.env.PUBLIC_URL + item.to}>
            <a>{item.title}</a>
          </Link>
        </li>
      );
    });
  }
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}
