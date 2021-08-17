import React, { useState } from "react";
import classNames from "classnames";

import MobileNavSidebar from "./MobileNavSidebar";

export default function MenuFunctionIcons(props) {
  const hide = props.hide || "";
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        {!hide.includes("cart") && (
          <>
            <a
              href="#"
              className="menu-icon -navbar"
              onClick={(e) => {
                e.preventDefault();
                setShowMobileNav(!showMobileNav);
              }}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </a>
          </>
        )}
      </div>
      {/* Mobile navigation sidebar */}
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
