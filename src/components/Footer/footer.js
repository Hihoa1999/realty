import React from 'react';

function footer(props) {
    return (
        <>
        <div className="Footer-Pay row col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <i className="far fa-credit-card col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></i>
        <ul className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <li>Hỗ trợ thanh toán nộp tiền</li>
          <a>100.1225</a>
        </ul>
      </div>
      <div className="Footer-Pay row col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <i className="fas fa-phone col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></i>
        <ul className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <li>Trợ giúp đăng tin</li>
          <a>1900.444.111</a>
        </ul>
      </div>
      <div className="Footer-Pay row col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <i className="fas fa-phone col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></i>
        <ul className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
          <li>Trợ giúp đăng tin</li>
          <a>1900.000.555</a>
        </ul>
      </div>
      </>
    );
}

export default footer;