import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: multiply; /* Áp dụng chế độ blend */
  background-image: url("https://accounts.fullstack.edu.vn/static/media/f8_bg_auth_1366.cb1a38f30212c78aa891.png");
`;

export const Container = styled.div`
  padding: 0px 12px;
  .login {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-select: none;
    .login-container {
      max-width: 640px;
      width: 100%;
      padding: 48px 16px;
      background-color: white;
      min-height: 600px;
      border-radius: 10px;
      text-align: center;
      justify-content: center;
      position: relative;
      .login-header {
        margin-bottom: 40px;
        > img {
          border-radius: 8px;
          width: 44px;
          height: 44px;
          cursor: pointer;
        }
      }
      .login-content {
        ul.list {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          li.item {
            margin-bottom: 16px;
            width: 50%;
            .btn-custome {
              display: flex;
              align-items: center;
              background-color: transparent;
              border: 2px solid #ccc;
              color: #35414c;
              height: 42px;
              width: 100%;
              :hover {
                background-color: #dce0e3;
              }
              > img {
              }
              > span {
                flex: 1;
              }
            }
            .btn-custome--disbale {
              :hover {
                background-color: transparent;
              }
              cursor: not-allowed;
            }
          }
        }
      }
      .login-footer {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .login-bottom {
      color: white;
      margin-top: 16px;
      letter-spacing: 1px;
    }
  }

  .modal-overlay {
    display: none;
    position: fixed;
    inset: 0 0 0 0;
  }

  .modal-overlay-active {
    display: block;
  }

  @media only screen and (max-width: 768px) {
    .login {
      .login-container {
        .login-content {
          ul.list {
            flex-direction: row;
            flex-wrap: wrap;
            li.item {
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .login {
      .login-container {
        .login-content {
          ul.list {
            flex-direction: column;
            li.item {
              width: 275px;
            }
          }
        }
      }
    }
  }
`;
