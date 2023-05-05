import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 40px 0px 20px;
`;

export const Container = styled.div`
  padding: 8px 44px 0px;
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
      width: 400px;
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
        width: 420px;
      }
    }
  }
`;
