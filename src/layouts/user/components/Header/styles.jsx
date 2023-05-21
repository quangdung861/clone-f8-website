import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  right: 0px;
  left: 0px;
  top: 0px;
  background-color: #fff;
  /* background-color: ${(props) =>
    props.cssHeader ? props.cssHeader.backgroundColor : "#fff"}; */
  z-index: 2;
  border-bottom: 1px solid #e8ebed;
  .navbar {
    height: var(--header-height);
    padding: 0px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-left {
      flex: 1;
      display: flex;
      align-items: center;
      .img-logo {
        width: 38px;
        height: 38px;
        border-radius: 8px;
        margin-right: 16px;
        cursor: pointer;
      }
      .icon-menu-mobile {
        display: none;
        font-size: 24px;
        color: #808990;
        cursor: pointer;
        padding: 4px;
      }
      .btn-back {
        min-width: 90px;
        padding: 8px 8px;
        font-size: 12px;
        font-weight: 500;
        color: #808990;
        margin-left: 4px;
        cursor: pointer;
        &:hover {
          .btn-back__icon {
            transform: translate(-4px, 0);
          }
        }
        .btn-back__icon {
          margin-right: 4px;
          transition: transform 0.2s ease;
        }
        .btn-back__text {
        }
      }
    }
    .navbar-center {
      flex: 1;
      z-index: 3;
      .box-search {
        width: 420px;
        border-radius: 20px;
        height: 42px;
        padding: 0px 16px 0px 8px;
        border: 2px solid #e8e8e8;
        transition: border-color 0.2s ease-in-out;
        display: flex;
        align-items: center;
        position: relative;
        .container-search-result {
          display: none;
          position: absolute;
          left: 0;
          top: 50px;
          width: 100%;
          max-height: calc(90vh - 66px);
          overflow: hidden;
          overflow-y: auto;
          &::-webkit-scrollbar {
            -webkit-appearance: none;
          }
          &::-webkit-scrollbar:vertical {
            width: 10px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 10px;
          }
          &::-webkit-scrollbar-track {
            background: transparent;
          }
          padding: 12px 24px;
          box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background-color: #fff;
          .top {
            display: flex;
            align-items: center;
            overflow: hidden;
            overflow-x: auto;
            &::-webkit-scrollbar {
              -webkit-appearance: none;
            }
            &::-webkit-scrollbar:horizontal {
              height: 10px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 10px;
            }
            &::-webkit-scrollbar-track {
              background: transparent;
            }
            > i {
              color: #585757;
              padding: 0 8px 0 0;
            }
            > span {
              color: #0000008a;
            }
            .icon-spin--active {
              margin-right: 8px;
              animation: mymove 1s linear infinite;
              animation-duration: 1s;
              padding: 0px;
            }
          }
          .center {
            .content-list {
              .content-item {
                .result-header {
                  padding: 24px 0 12px;
                  margin-bottom: 6px;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  &__left {
                    font-weight: 500;
                    text-transform: uppercase;
                    margin: 0;
                  }
                  &__right {
                    color: #0000008a;
                    cursor: pointer;
                    &:hover {
                      color: #f05123;
                    }
                  }
                }
                .result-list {
                  .result-item {
                    display: flex;
                    align-items: center;
                    margin: 12px 0px;
                    cursor: pointer;
                    > img {
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      object-fit: cover;
                      margin-right: 12px;
                    }
                    > span {
                      line-height: 1.6;
                    }
                  }
                }
              }
            }
          }
        }
        .container-search-result--active {
          display: block;
        }
        &:focus-within {
          border-color: #444;
        }
        .icon-search {
          font-size: 16px;
          padding: 0px 8px;
          color: #929191;
        }
        .icon-close {
          color: #929191;
          cursor: pointer;
        }
        .input-search {
          height: 100%;
          width: 100%;
          border: none;
          padding: 0px;
        }
      }
    }
    .navbar-right {
      flex: 1;
      display: flex;
      justify-content: end;
      position: relative;
      align-items: center;
      .notification {
        position: relative;
        > i {
          cursor: pointer;
          padding: 5px;
          margin-right: 18px;
          color: #727070;
          font-size: 20px;
        }
        .dropdownNotification {
          position: absolute;
          background-color: #fff;
          padding-top: 20px;
          width: 35vw;
          z-index: 5;
          right: 12px;
          top: 40px;
          box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          user-select: none;
          animation-name: fadeIn, moveToBottom;
          animation-duration: 0.3s;
          .notification-header {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 20px;
            > *:first-child {
              font-size: 16px;
              font-weight: 500;
            }
            > *:last-child {
              color: #f05123;
              display: inline-block;
              padding: 6px;
              border-radius: 3px;
              user-select: none;
              cursor: pointer;
              :hover {
                background-color: #f1f1f1;
              }
            }
          }
          .notification-list {
            max-height: 450px;
            overflow: hidden;
            overflow-y: auto;
            &::-webkit-scrollbar {
              -webkit-appearance: none;
            }
            &::-webkit-scrollbar:vertical {
              width: 8px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 10px;
            }
            .notification-item {
              display: flex;
              align-items: center;
              margin: 0px 8px 8px;
              padding: 8px 36px 8px 12px;
              background-color: rgba(240, 81, 35, 0.1);
              border-radius: 10px;
              transition: all 0.1s ease;
              cursor: pointer;
              > img {
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 12px;
              }
              .notification-item__box {
                word-break: break-word;
                .notification-item-message {
                  > span {
                    font-weight: 500;
                  }
                }
                .notification-item-date {
                  color: #f05123;
                  font-weight: 500;
                  margin-top: 6px;
                }
              }
            }
            .notification-item-watched {
              background-color: #fff;
              :hover {
                background-color: #f1f1f1;
              }
            }
            .see-more {
              text-align: center;
              > span {
                color: #747272;
                padding: 6px 10px;
                cursor: pointer;
                :hover {
                  color: #333;
                }
              }
            }
          }
        }
      }

      .account {
        position: relative;
        user-select: none;
        > img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          object-fit: cover;
          cursor: pointer;
          :hover {
            opacity: 0.9;
          }
        }
      }
      .dropdown-acount-action {
        position: absolute;
        top: 43px;
        right: 0;
        min-width: 250px;
        overflow: hidden;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px 20px 0px 20px;
        max-width: 250px;
        width: 100%;
        user-select: none;
        box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.2);
        animation-name: fadeIn, moveToBottom;
        animation-duration: 0.3s;
        z-index: 1;
        .dividing-line {
          border-bottom: 1px solid rgba(121, 119, 119, 0.1);
          margin: 12px 0px;
        }
        .dropdown-acount-action__header {
          display: flex;
          align-items: center;
          font-weight: 500;
          font-size: 16px;
          > img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin-right: 12px;
            object-fit: cover;
          }
        }
        .action-list {
          .action-item {
            height: 40px;
            overflow: hidden;
            display: flex;
            align-items: center;
            color: #7a7777;
            cursor: pointer;
            transition: color 0.2s ease;
            :hover {
              color: black;
            }
          }
        }
      }
      .btn-login {
        flex-shrink: 0;
        border-radius: 20px;
        padding: 7px 20px 9px 20px;
        color: white;
        font-weight: 600;
        background-color: #f05123;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
      .btn-search-mobile {
        display: none;
        margin-right: 20px;
        font-size: 18px;
        color: #707070;
        &:hover {
          color: #000;
        }
      }
    }
  }

  .modal-overlay {
    position: fixed;
    inset: 0 0 0 0;
  }

  @media only screen and (max-width: 992px) {
    .navbar {
      .navbar-left {
        flex: 0;
        h4 {
          display: none;
        }
      }
      .navbar-right {
        .notification {
          .dropdownNotification {
            width: 50vw;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar {
      .navbar-left {
        .img-logo {
          display: none;
        }
        .icon-menu-mobile {
          display: block;
        }
      }
      .navbar-center {
        .box-search {
          display: none;
        }
      }
      .navbar-right {
        display: flex;
        justify-content: end;
        align-items: center;
        .btn-search-mobile {
          display: block;
        }
        .notification {
          .dropdownNotification {
            width: 80vw;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .navbar {
      padding: 0px 16px;
      .navbar-right {
        .notification {
          > i {
            margin-right: 0px;
          }
        }
        .notification {
          .dropdownNotification {
            width: 95vw;
            right: -12px;
          }
        }
      }
    }
    .account {
      display: none;
    }
  }

  @keyframes mymove {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes moveToBottom {
    0% {
      transform: translateY(-16px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
