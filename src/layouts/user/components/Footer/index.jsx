import React from "react";

import * as S from "./styles";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.Wrapper>
      <div className="footer-container">
        <div className="container-item-start">
          <div className="title title-first">
            <img
              src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              alt=""
            />
            <h3>học Lập Trình Để Đi Làm</h3>
          </div>
          <div className="content">
            <p>
              Điện thoại: <span>0246.329.1102</span> <br />
              Email: <span>contact@fullstack.edu.vn</span> <br />
              Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP.
              Hà Nội
            </p>
          </div>
          <img
            className="logo-dmca"
            src="https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
            alt=""
          />
        </div>
        <div className="container-item">
          <div className="title">
            <h3>VỀ F8</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>
                <Link>Giới thiệu</Link>
              </li>
              <li>
                <Link>Liên hệ</Link>
              </li>
              <li>
                <Link>Điều khoản</Link>
              </li>
              <li>
                <Link>Bảo mật</Link>
              </li>
              <li>
                <Link>Cơ hội việc làm</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-item">
          <div className="title">
            <h3>SẢN PHẨM</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>
                <Link>Game Nester</Link>
              </li>
              <li>
                <Link>Game CSS Diner</Link>
              </li>
              <li>
                <Link>Game CSS Selectors</Link>
              </li>
              <li>
                <Link>Game Froggy</Link>
              </li>
              <li>
                <Link>Game Froggy Pro</Link>
              </li>
              <li>
                <Link>Game Scoops</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-item">
          <div className="title">
            <h3>CÔNG CỤ</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>
                <Link>Tạo CV xin việc</Link>
              </li>
              <li>
                <Link>Rút gọn liên kết</Link>
              </li>
              <li>
                <Link>Clip-path maker</Link>
              </li>
              <li>
                <Link>Snippet generator</Link>
              </li>
              <li>
                <Link>Cảnh báo sờ tay lên mặt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-item-end">
          <div className="title">
            <h3>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h3>
          </div>
          <div className="content">
            <ul className="list-content">
              <li>Mã số thuế: 0109922901</li>
              <li>Ngày thành lập: 04/03/2022</li>
              <li>
                Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát
                triển những sản phẩm mang lại giá trị cho cộng đồng.
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="foo-bottom-left">
            © 2018 - 2023 F8. Nền tảng học lập trình hàng đầu Việt Nam
          </div>
          <div className="foo-bottom-right">
            <i className="fa-brands fa-youtube icon-youtube"></i>
            <i className="fa-brands fa-facebook icon-facebook"></i>
            <i className="fa-brands fa-tiktok icon-tiktok"></i>
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default Footer;
