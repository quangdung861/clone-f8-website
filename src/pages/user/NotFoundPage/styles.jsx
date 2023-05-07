import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  .header {
    padding: 20px;
    .header__left {
      display: flex;
      align-items: center;
      > img {
        width: 38px;
        height: 38px;
        border-radius: 8px;
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
  .content {
    padding: 0 10px 16px 10px;
    margin: 0px auto;
    max-width: 410px;
    text-align: center;
    .content__icon-not-found {
      margin-top: 30px;
      width: 100%;
      object-fit: cover;
      height: 200px;
    }
    > h1 {
      font-size: 45px;
      font-weight: 900;
      margin-bottom: 50px;
    }
    .content__text {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 12px;
    }
    .--btn-default--custome {
      padding: 14px 28px;
      font-size: 16px;
      border-radius: 999px;
      font-weight: 600;
      margin-top: 40px;
      margin-bottom: 30px;
    }

    .content__footer {
      color: #666;
      font-weight: 500;
    }
  }
`;
