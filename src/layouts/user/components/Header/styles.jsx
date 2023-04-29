import styled from "styled-components";

export const Wrapper = styled.div`
  .navbar {
    height: var(--header-height);
    padding: 0px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8ebed;
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
    }
    .navbar-center {
      flex: 1;
      .box-search {
        width: 420px;
        border-radius: 20px;
        height: 34px;
        padding: 0px 16px 0px 8px;
        border: 2px solid #e8e8e8;
        transition: all 0.2s ease-in-out;
        display: flex;
        align-items: center;
        &:focus-within {
          border-color: #444;
        }
        .icon-search {
          font-size: 16px;
          padding: 0px 8px;
          color: #929191;
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

  @media only screen and (max-width: 992px) {
    .navbar {
      .navbar-left {
        flex: 0;
        h4 {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar {
      .navbar-center {
        .box-search {
          display: none;
        }
      }
      .navbar-right {
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-search-mobile {
          display: block;
        }
      }
    }
  }
`;
