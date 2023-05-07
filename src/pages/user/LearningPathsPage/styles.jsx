import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 8px 88px 20px;
  margin-bottom: 60px;

  .section-item {
    display: grid;
    grid-template-columns: 2;
    .section-left {
      padding: 24px;
      grid-column: 1/2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 16px;
      border: 2px solid #e8e8e8;
      .content {
        display: flex;
        align-items: center;
        .content-left {
        }
        .content-left {
          img {
          }
        }
      }
    }
    .section-right {
      padding: 24px;
      grid-column: 2/3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 16px;
      border: 2px solid #e8e8e8;
      margin-left: 24px;
      .content {
        display: flex;
        align-items: center;
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

  @media only screen and (max-width: 992px) {
    padding: 8px 30px 20px;
    .section-item {
      .section-left {
        grid-column: 1/3;
        margin-bottom: 20px;
      }
      .section-right {
        grid-column: 1/3;
        margin-left: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 16px;
    .section-item {
      .section-left,
      .section-right {
        .content {
          .content-left {
          }
          .content-right {
            display: none;
          }
        }
        .content-bottom {
          .--btn-default--custome {
            width: 100%;
          }
        }
      }
    }
    .section-suggest {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 50px;
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

  @media only screen and (max-width: 576px) {
    padding: 12px;
  }
`;
