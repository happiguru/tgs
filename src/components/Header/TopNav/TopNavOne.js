import React, { useState } from "react";
import { Container } from "reactstrap";
import Link from "next/link";

import SocialIcons from "../../Other/SocialIcons";
import { renderContainer } from "../../../common/utils";

export default function TopNavOne({ container }) {

  return (
    <div className="top-nav .-style-1">
      <div className={renderContainer(container)}>
        <div className="top-nav__wrapper">
          <SocialIcons className="-white" />
          <p className="top-nav__wrapper__promo">
              <a className="top-nav__auth"> <i className="far fa-envelope"></i><span className="pl-2">booking@typicalgentssalon.ae</span></a>
          </p>
          <div className="top-nav__wrapper__selectors">
            <Link href={process.env.PUBLIC_URL + ""}>
              <a className="top-nav__auth" href="#cta-section">Book an Appointment</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
