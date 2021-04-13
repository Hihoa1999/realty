import React from 'react';
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
function Info(props) {
    return (
        <>
        <div className="Infomation-Menu row col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <h4 className="text-center">Về chúng tôi</h4>
          <div>
            <ul className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <li>
                <i className="fas fa-home"></i>
                <MenuLink label="Trang chủ" to="/" exact="true" />
              </li>
              <li>
                <i className="fab fa-angellist"></i>
                <MenuLink to="/introduce" label="Giới thiệu" />
              </li>
              <li>
                <i className="fas fa-users"></i>
                <MenuLink to="/recruitment" label="Tuyển dụng" />
              </li>
              <li>
                <i className="fas fa-user-cog"></i>
                <MenuLink to="/work" label="Quy chế hoạt động" />
              </li>
              <li>
                <i class="fas fa-bookmark"></i>
                <MenuLink to="/regulations" label="Quy định sử dụng" />
              </li>
              <li>
                <i class="fas fa-shield-alt"></i>
                <MenuLink to="/security" label="Chính sách bảo mật" />
              </li>
              <li>
                <i className="fas fa-phone-volume"></i>
                <MenuLink to="/phone" label="Liên hệ" />
              </li>
            </ul>
          </div>
        </div>
        <div className="Infomation-Menu  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <h4 className="text-center">Hỗ trợ khách hàng</h4>
          <div className="">
            <ul className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <li>
                
                <MenuLink label="Hướng dẫn đăng tin" to="/suport" exact="false" />
              </li>
              <li>
                
                <MenuLink label="Bảng giá dịch vụ" to="/pricelist" exact="false" />
              </li>
              <li>
                
                <MenuLink label="Quy định đăng tin" to="/regulationsPost" exact="false" />
              </li>
              <li>
                
                <MenuLink label="Chính sách giải quyết khiếu nại" to="/report" exact="false" />
              </li>
            </ul>
          </div>
        </div>
        <div className="Infomation-Fb container-fluid  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <h4 className="text-center">Kết nối với chúng tôi</h4>
        <a id="fb" href="https://www.facebook.com/profile.php?id=100008423231829 "><i className="fab fa-facebook-square"></i></a>
        <a id="wt" href="https://twitter.com/ "><i className="fab fa-twitter-square"></i></a>
        <a id="gg" href="https://www.google.com.vn/?gws_rd=ssl "><i className="fab fa-google"></i></a>
        <a href="https://mail.google.com/mail/u/0/#inbox"><i className="fas fa-envelope"></i></a>
        </div>
        </>
    );
}

export default Info;