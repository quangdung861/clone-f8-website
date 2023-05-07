import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 0px 40px 20px 20px;
  max-width: 100vw;

  .wrapper-content {
    margin-top: 70px;
    padding: 0px 44px 74px;
    .box-header {
      display: flex;
      align-items: center;
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
        }
      }
    }
    .section-suggest {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 50px;
      &__left {
        grid-column: 1/2;
        align-self: center;
        max-width: 400px;
        width: 100%;
        .--btn-default--custome {
          border: 2px solid #292929;
          color: #292929;
          background-color: transparent;
          padding: 11px 18px;
          &:hover {
            background-color: #292929;
            color: white;
          }
        }
      }
      &__right {
        grid-column: 2/3;
        align-self: center;
        justify-self: right;
        > img {
          max-width: 420px;
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    padding: 0px 20px 60px 40px;
    .wrapper-content {
      .box-content {
        .content-item {
          width: 33.33%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .wrapper-content {
      padding: 0px 16px 60px;
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
      .section-suggest {
        &__left {
          grid-column: 1/3;
          max-width: 100%;
          .--btn-default--custome {
            width: 100%;
          }
        }
        &__right {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .wrapper-content {
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
