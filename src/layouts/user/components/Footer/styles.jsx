import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 68px 0px 40px;
  background-color: #181821;
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0px 12px;
    .container-item-start {
      width: 25%;
      .logo-dmca {
        margin-top: 20px;
      }
      .title-first {
        display: flex;
        align-items: center;
        color: #fff;
        img {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          margin-right: 8px;
        }
      }
      .content {
        color: #a9b3bb;
      }
    }

    .container-item-end {
      width: 25%;
      .title-first {
        display: flex;
        align-items: center;
        color: #fff;
        img {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          margin-right: 8px;
        }
      }
      .title {
        color: #fff;
      }
      .content {
        color: #a9b3bb;
        .list-content {
          > li {
            margin-bottom: 8px;
          }
        }
      }
    }

    .container-item {
      width: 16.66%;
      .title {
        color: #fff;
      }
      .content {
        color: #a9b3bb;
        .list-content {
          li {
            margin-bottom: 8px;
            cursor: pointer;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }

    .footer-bottom {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-top: 48px;
      .foo-bottom-left {
        color: #a9b3bb;
        margin: 12px 0px;
      }
      .foo-bottom-right {
        margin: 12px 0px;
        > * {
          cursor: pointer;
          &:hover {
            opacity: 0.9;
          }
        }
        .icon-youtube {
          font-size: 30px;
          color: #eb2c3b;
        }
        .icon-facebook {
          font-size: 30px;
          color: #4867aa;
          margin-left: 8px;
        }
        .icon-tiktok {
          font-size: 30px;
          color: #cccccc;
          margin-left: 8px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .footer-container {
      .container-item-start {
        width: 100%;
      }
      .container-item {
        width: 33.33%;
      }
      .container-item-end {
        width: 50%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .footer-container {
      .container-item-start {
        width: 100%;
      }
      .container-item {
        width: 100%;
      }
      .container-item-end {
        width: 100%;
      }
    }
    
    .footer-bottom {
      .foo-bottom-left {
        width: 100%;
      }
      .foo-bottom-right {
        width: 50%;
      }
    }
  }

`;
