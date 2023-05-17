import styled from "styled-components";

export const Wrapper = styled.div`
  #register-form-phone-number {
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
    .box-phoneNumber {
      height: 44px;
      width: 100%;
      background-color: #f1f1f2;
      border-radius: 24px;
      display: flex;
      align-items: center;
      border: 1px solid rgba(22, 24, 35, 0.06);
      > input.phoneNumber {
        height: 44px;
        width: 100%;
        padding: 9px 24px;
        background-color: transparent;
        border: none;
        overflow: hidden;
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
      > div.first-number {
        flex-shrink: 0;
        padding: 9px 0px 9px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        color: #35414c;
        overflow: hidden;
        > i {
          margin-left: 8px;
          font-size: 16px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
    .countries-dropdown {
      position: absolute;
      z-index: 2;
      top: 165px;
      .countries-search {
        width: 390px;
        background-color: #fff;
        height: 40px;
        display: flex;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.03),
          0 2px 4px 0 rgba(0, 0, 0, 0.03);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        > input {
          flex: 1;
          height: 100%;
          border: none;
        }
        > i {
          width: 40px;
          text-align: center;
        }
      }
      .countries-list {
        padding: 8px 16px;
        margin: 0;
        max-height: 220px;
        width: 390px;
        overflow: hidden;
        background-color: white;

        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.03),
          0 2px 4px 0 rgba(0, 0, 0, 0.03);

        overflow: auto;
        &::-webkit-scrollbar {
          -webkit-appearance: none;
        }
        &::-webkit-scrollbar:vertical {
          height: 12px;
        }
        &::-webkit-scrollbar:horizontal {
          height: 12px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 3px;
        }
        &::-webkit-scrollbar-track {
          background-color: #f1f1f1;
        }
        .content-item {
          min-width: 35vw;
        }
        li.countries-item {
          height: 40px;
          font-weight: 400;
          color: #35414c;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
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
      opacity: 0.5;
      cursor: not-allowed;
      border: 1px solid rgba(22, 24, 35, 0.06);
    }

    .error-fullname {
      font-size: 13px;
      color: #f33a58;
      margin: 8px 0px 0px 8px;
    }

    /*  */

  }
`;
