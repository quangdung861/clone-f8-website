import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 40px 0px 20px;
`;

export const Container = styled.div`
  padding: 8px 44px 0px;
  margin: 0px 0px 60px;

  .container {
    display: flex;
    align-items: start;
    position: relative;
    &__left {
      width: 66.66%;
      .content-list {
        padding: 0 64px 44px 0px;
        .content-item {
          border: 2px solid #e8e8e8;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
          .content-item__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
              display: flex;
              align-items: center;
              color: #292929;
              img {
                border-radius: 50%;
                width: 26px;
                height: 26px;
                margin-right: 8px;
                object-fit: cover;
              }
              &:hover {
                color: #292929;
                cursor: pointer;
              }
            }
            .right {
              > i {
                font-size: 16px;
                color: #757575;
                &:first-child {
                  margin-right: 10px;
                }
                &:hover {
                  color: #292929;
                  cursor: pointer;
                }
              }
            }
          }
          .content-item__center {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
              padding-right: 32px;
              .--btn-default--custome {
                padding: 6px 10px;
                color: #292929;
                background-color: #f2f2f2;
              }
              h2 {
                margin: 12px 0;
                cursor: pointer;
              }
              p {
                line-height: 24px;
                margin-bottom: 12px;
              }
            }
            .right {
              > img {
                border-radius: 20px;
                width: 200px;
                cursor: pointer;
              }
            }
          }
        }
      }
      .pagination-wrapper {
        margin-top: 30px;
        .pagination-pages {
          display: flex;
          .pagination-page__btn {
          }
        }
      }
    }
    &__right {
      width: 33.33%;
      padding: 0 12px;
      position: sticky;
      top: -110px;
      left: 0px;
      > h3 {
        color: #757575;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 14px;
      }
      .content-list {
        flex: 1;
        .content-item {
          .--btn-default {
            background-color: #f2f2f2;
            color: #333;
            margin: 0 8px 8px 0px;
          }
        }
      }
      .box-image {
        padding: 0 50px 0 0;
        margin: 40px 0 40px;
        img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 20px;
          &:hover {
            cursor: pointer;
            opacity: 0.9;
          }
        }
      }
    }
  }
`;
