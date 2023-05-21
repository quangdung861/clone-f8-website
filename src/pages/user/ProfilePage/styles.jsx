import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  .profile-container {
    min-height: 100vh;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    .header {
      background-image: ${(props) => `url(${props?.cover})`};
      padding-top: 28%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      .header-left {
        position: absolute;
        bottom: -90px;
        left: 50px;
        display: flex;
        align-items: end;
        .box-avatar {
          position: relative;
          .custom-file-input {
            display: none;
          }
          img {
            width: 160px;
            height: 160px;
            border: 6px solid #fff;
            border-radius: 50%;
            margin-right: 20px;
            object-fit: cover;
          }
          .box-avatar__icon {
            position: absolute;
            right: 38px;
            bottom: 12px;
            border: 6px solid #fff;
            border-radius: 50%;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
            display: flex;
            flex-shrink: 0;
            cursor: pointer;
            :hover {
              filter: brightness(95%);
            }
            > i {
              font-size: 20px;
              background-color: #fff;
            }
          }
        }
        .fullname {
          margin-bottom: 40px;
          font-weight: 700;
          font-size: 24px;
          white-space: nowrap;
        }
      }
      .header-right {
        position: absolute;
        bottom: 12px;
        right: 12px;
        .custom-file-input {
          display: none;
        }
        .custom-file-label {
          display: inline-block;
          background-color: white;
          border-radius: 6px;
          padding: 10px;
          max-height: 40px;
          cursor: pointer;
          user-select: none;
          i {
            margin-right: 8px;
          }
          span {
            font-weight: 500;
          }
          :hover {
            background-color: #f5f4f4;
          }
        }
        .btn-default--custome {
          background-color: #fff;
          color: #333;
          border-radius: 6px;
          &:last-child {
            margin-left: 12px;
          }
        }
        .dropdown-cover-image {
          background-color: #fff;
        }
      }
    }
    .subscribe {
      position: fixed;
      top: 530px;
      left: 30px;
      display: flex;
      align-items: end;
      > img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        z-index: 2;
        :hover {
          opacity: 0.9;
          cursor: pointer;
        }
      }
      .container-subscribe {
        position: absolute;
        bottom: 0px;
        left: 20px;
        opacity: 0.2;
        padding-left: 30px;
        padding-bottom: 50px;
        transform: translateX(-200%);
        visibility: hidden;
        .box-subscribe {
          max-width: 200px;
          min-width: 200px;
          width: 100%;
          padding: 8px;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.2);
          .box-subscribe__name {
            margin-bottom: 8px;
            font-size: 12px;
            color: white;
          }
          .btn-subscribe {
            padding: 8px 20px;
            border-radius: 20px;
            background-color: white;
            color: #333;
            display: inline-block;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
      .container-subscribe--open {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.5s;
        visibility: visible;
      }
      .container-subscribe--close {
        transition-delay: 0.5s;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .profile-container {
      .header {
        .header-left {
          bottom: -130px;
          flex-direction: column;
          align-items: start;
          .box-avatar {
            > img {
              width: 120px;
              height: 120px;
            }
            .box-avatar__icon {
              > i {
                font-size: 14px;
              }
            }
          }
        }
      }
      .subscribe {
        left: 20px;
        top: 550px;
        > img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .profile-container {
      .header {
        .header-left {
          bottom: -130px;
          left: 10px;
          flex-direction: column;
          align-items: start;
          .box-avatar {
            > img {
              width: 120px;
              height: 120px;
            }
            .box-avatar__icon {
              > i {
                font-size: 14px;
              }
            }
          }
          .fullname {
            font-size: 20px;
          }
        }
        .header-right {
          .custom-file-label {
            padding: 6px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              display: none;
            }
            i {
              margin-right: 0;
            }
          }
        }
      }
      .subscribe {
        display: none;
      }
    }
  }
`;
