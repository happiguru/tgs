import { useState } from "react";
import Link from "next/link";

import Button from "../../Control/Button";
import NavigationFull from "../Elements/NavigatorFull";
import { renderContainer } from "../../../common/utils";

export default function MenuFive({ container }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="menu -style-5">
        <div className={renderContainer(container)}>
          <div className="menu__wrapper">
            <Link href="/main/home">
              <a className="menu__wrapper__logo">
                <img src="/assets/images/log.jpg" alt="Logo" />
              </a>
            </Link>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(true);
              }}
              action="#"
              color="dark"
              className="-round"
              height={50 / 16 + "em"}
              width={50 / 16 + "em"}
              content={<i className="fas fa-bars"></i>}
            />
          </div>
        </div>
      </div>
      <NavigationFull showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}
