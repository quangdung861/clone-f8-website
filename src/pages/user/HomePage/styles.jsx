import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 0px 40px 20px 20px;
  max-width: 100vw;
  .image-slider {
    margin-top: 20px;
    display: grid;
    .image {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-radius: 16px;
      flex-shrink: 0;
      .box-text {
        max-width: 100%;
        width: 640px;
        flex-shrink: 0;
        padding-right: 32px;
        .box-title {
          font-size: 32px;
          font-weight: bold;
          margin: 20px 0px 8px 0px;
          color: #fff;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* số dòng hiển thị */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .text-description {
          display: block;
          margin-bottom: 20px;
          color: #fff;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* số dòng hiển thị */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .box-btn-action {
          color: #fff;
          font-weight: bold;
          padding: 6px 12px 8px 12px;
          display: inline-block;
          border-radius: 16px;
          border: 2px solid #fff;
          text-align: center;
          &:hover {
            background-color: #fff;
            color: #7612ff;
          }
        }
      }
      img {
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }
    }

    .slick-dots {
      position: absolute;
      left: 44px;
      bottom: -38px;
      list-style: none;
      text-align: left;
      display: block;
    }

    .slick-dots > li {
      width: 32px;
    }

    .slick-dots li button:before {
      opacity: 1;
      width: 32px;
      height: 8px;
      border-radius: 4px;
      content: "";
      text-align: center;
      background-color: #e0e4e4;
      transition: width 0.2s ease;
    }

    .slick-dots li.slick-active {
      width: 50px;
    }

    .slick-dots li.slick-active button:before {
      opacity: 1;
      background-color: #bcbebe;
      width: 50px;
      transition: width 0.2s ease;
    }

    .next-arrow-slide {
      z-index: 1;
      position: absolute;
      inset: 120px -16px auto auto;
      width: 32px;
      height: 32px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      i {
        font-size: 12px;
      }
    }

    .prev-arrow-slide {
      z-index: 1;
      position: absolute;
      inset: 120px auto auto -16px;
      width: 32px;
      height: 32px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      i {
        font-size: 12px;
      }
    }

    .next-arrow-slide,
    .prev-arrow-slide {
      &:hover {
        i {
          color: #000;
          transition: all 0.1s ease;
          transform: scale(1.1);
        }
      }
    }
  }

  .wrapper-content {
    margin-top: 70px;
    padding: 0px 44px 74px;
    .box-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .box-header__right {
        color: #f05123;
        font-weight: 500;
        font-size: 15px;
        display: flex;
        align-items: center;
        > span {
          margin-right: 4px;
        }
        > i {
          transition: transform 0.3s ease;
        }
        &:hover {
          > span {
            text-decoration: underline;
          }
          > i {
            transform: translateX(4px);
          }
        }
      }
      .title {
        font-size: 24px;
        font-weight: 900;
        margin: 10px 0px;
      }
      .logo {
        font-size: 12px;
        font-weight: 500;
        padding: 3px 6px;
        color: #fff;
        background-color: #1473e6;
        border-radius: 4px;
        margin-left: 8px;
        text-transform: uppercase;
      }
    }

    .box-content {
      display: flex;
      flex-wrap: wrap;
      margin-left: -12px;
      .content-item {
        width: 25%;
        padding: 12px;
        .box-image {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          width: 100%;
          padding-top: 56.25%; // set padding để ảnh có thể được co giản theo tỉ lệ màn hình
          background-size: cover; // cách 1 truyền trực tiếp URL vào box
          cursor: pointer;
          .hover-action {
            display: none;
            justify-content: center;
            align-items: center;
            position: absolute;
            inset: 0 0 0 0;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 16px;
            animation-name: fadeIn;
            animation-duration: 0.4s;
            .btn-action {
              background-color: #fff;
              padding: 9px 16px;
              text-align: center;
              border-radius: 20px;
              font-weight: 500;
              animation-name: trans;
              animation-duration: 0.4s;
            }
          }
          &:hover {
            .hover-action {
              display: flex;
            }
          }
          .image {
            border-radius: 16px;
            position: absolute; // cách 2 style thẻ img
            width: 100%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            object-fit: cover;
          }
          .box-logo {
            padding: 3px 6px;
            border-radius: 6px;
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 12px;
            left: 12px;
            z-index: 1;
            img {
              width: 18px;
            }
          }
        }
        .name {
          font-weight: 600;
          margin: 8px 0px;
          display: -webkit-box;
          -webkit-line-clamp: 1; /* số dòng hiển thị */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .sub-name {
          margin: 12px 0px;
          display: flex;
          align-items: end;
          .price-cancel {
            text-decoration: line-through;
            margin-right: 8px;
          }
          .discount-price {
            font-weight: 500;
            color: #f05123;
            font-size: 16px;
          }
          .price {
            font-weight: 500;
            font-size: 16px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    padding: 0px 20px 60px 40px;
    .wrapper-content {
      padding: 0px 0px 74px 16px;
      .box-content {
        .content-item {
          width: 33.33%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0px 16px 60px 16px;
    .image-slider {
      .next-arrow-slide,
      .prev-arrow-slide {
        display: none;
      }
    }
    .wrapper-content {
      .box-header {
        .box-header__right {
          display: none;
        }
      }
      .box-content {
        flex-wrap: nowrap;
        overflow: hidden;
        overflow-x: auto;
        &::-webkit-scrollbar {
          -webkit-appearance: none;
        }
        &::-webkit-scrollbar:horizontal {
          height: 12px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 10px;
        }
        .content-item {
          min-width: 35vw;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .wrapper-content {
      padding: 0px 0px 74px 0px;
      .box-content {
        .content-item {
          min-width: 62vw;
        }
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes trans {
    from {
      transform: translate(0px, 42px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }
`;
