import React from "react";
import "./css.scss";
import { BrowserRouter as Switch, Route, NavLink } from "react-router-dom";
const MenuLink = ({ label, to, activeOnlyExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <NavLink
            className={active}
            style={{ marginLeft: "20px", textDecoration: "none" }}
            activeStyle={{
              color: "black",
              textDecoration: "none",
            }}
            activeClassName=""
            exact
            to={to}
          >
            {label}
          </NavLink>
        );
      }}
    />
  );
};
function Navbar(props) {
  return (
    <div className="Index-Navbar row col-12	col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <a><b>CÔNG TY NHÀ ĐẤT</b><i className="fas fa-igloo"></i></a>
      <ul className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <li>
          <i className="fas fa-home"></i>
          <MenuLink label="Trang chủ" to="/" exact="true" />
        </li>
        <li>
        <i className="fas fa-house-damage"></i>
          <MenuLink to="/homesell" label="Nhà đất bán" />
        </li>
        <li>
          <i className="fas fa-house-user"></i>
          <MenuLink to="/homerent" label="Nhà đất cho thuê" />
        </li>
        <li>
          <i className="fab fa-servicestack"></i>
          <MenuLink to="/pricelist" label="Bảng giá dịch vụ" />
        </li>
        <li>
        <i class="fas fa-registered"></i>
          <MenuLink to="/registered" label="Đăng kí" />
        </li>
        <li>
          <i class="fas fa-sign-in-alt"></i>
          <MenuLink to="/login" label="Đăng nhập" />
        </li>
        <li>
           <i className="fas fa-clipboard"></i>
          <MenuLink to="/post" label="Đăng tin miễn phí" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
