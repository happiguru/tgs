import React from "react";
import { CSSTransition } from "react-transition-group";

import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import NavigatorMobile from "./NavigatorMobile";
import SocialIcons from "../../Other/SocialIcons";


export default function MobileNavSidebar({ showMobileNav, setShowMobileNav }) {

  return (
    <>
      <ClientOnlyPortal selector="#nav-sidebar">
        <CSSTransition
          in={showMobileNav}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="navigation-sidebar">
            
            <NavigatorMobile />
            <div className="navigation-sidebar__footer">
              <a className="navigation-sidebar__footer__auth">Book An Appointment</a>
              <SocialIcons />
            </div>
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showMobileNav && (
        <ClientOnlyPortal selector="#overlay">
          <div
            className="overlay"
            onClick={() => setShowMobileNav(false)}
          ></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}
