import styled from "styled-components";

export const Wrapper = styled.div`
  .btn-back {
    position: absolute;
    top: 20px;
    left: 40px;
  }
  .register-container {
    #register-form-email {
      max-width: 100%;
      width: 380px;
      margin: 20px auto;
      text-align: left;
      position: relative;
      .box-fullName {
        height: 44px;
        width: 100%;
        background-color: #f1f1f2;
        border-radius: 24px;
        border: 1px solid rgba(22, 24, 35, 0.06);
        overflow: hidden;
        input.fullName {
          height: 44px;
          width: 100%;
          padding: 9px 24px;
          background-color: transparent;
          border: none;
        }
      }
      .error-fullname {
        font-size: 13px;
        color: #f33a58;
        margin: 8px 0px 0px 8px;
      }
      .error-fullname--custome {
        margin: 8px 0px 12px 8px;
      }

      .box-confirm {
        height: 44px;
        width: 100%;
        background-color: #f1f1f2;
        border-radius: 24px;
        display: flex;
        align-items: center;
        margin-top: 10px;
        border: 1px solid rgba(22, 24, 35, 0.06);

        overflow: hidden;
        > div.btn-sendCode {
          min-width: 140px;
          background-color: #cccccc;
          height: 100%;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          opacity: 0.7;
          cursor: not-allowed;
        }
        > input.confirm {
          height: 44px;
          width: 100%;
          padding: 9px 24px;
          background-color: transparent;
          border: none;
        }
      }

      /*  */

      .box-email {
        height: 44px;
        width: 100%;
        background-color: #f1f1f2;
        border-radius: 24px;
        border: 1px solid rgba(22, 24, 35, 0.06);
        margin-bottom: 10px;
        overflow: hidden;
        input.email {
          height: 44px;
          width: 100%;
          padding: 9px 24px;
          background-color: transparent;
          border: none;
        }
      }
      .box-password {
        height: 44px;
        width: 100%;
        background-color: #f1f1f2;
        border-radius: 24px;
        border: 1px solid rgba(22, 24, 35, 0.06);
        overflow: hidden;
        input.password {
          height: 44px;
          width: 100%;
          padding: 9px 24px;
          background-color: transparent;
          border: none;
        }
      }

      .btn-submit {
        height: 44px;
        width: 100%;
        padding: 9px 24px;
        background-color: #2cccff;
        border: none;
        border-radius: 24px;
        margin-top: 20px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        /* opacity: 0.5; */
        /* cursor: not-allowed; */
        border: 1px solid rgba(22, 24, 35, 0.06);
        cursor: not-allowed;
      }
      .btn-submit--active {
        background-color: #1dbfaf;
        cursor: pointer;
        &:hover {
          background-color: #1b9c85;
        }
      }
    }
    .register-success {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      > i {
        font-size: 200px;
        color: #1b9c85;
        margin-bottom: 30px;
      }
      .register-success-title {
        span {
          color: #f05123;
          font-weight: 500;
        }
      }
    }
  }
`;
