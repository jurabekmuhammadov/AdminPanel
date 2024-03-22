import { Link, NavLink } from "react-router-dom";
import "../sass/components/_sidebar.scss";
import logo from "../assets/icons/logo.svg";
import settings from "../assets/icons/settings.svg";
import market from "../assets/icons/market.svg";
const SideBar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar__container">
        <Link className="logo" to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <NavLink to={"/"}>
              <img src={settings} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add"}>
              <img src={market} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
