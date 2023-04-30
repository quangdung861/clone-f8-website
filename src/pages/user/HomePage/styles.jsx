import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 0px 40px 0px 20px;
  .image-slider {
    margin-top: 20px;
    display: grid;
    .image {
      img {
        width: 100%;
        height: 270px;
        object-fit: cover;
        border-radius: 12px;
      }
    }

    .next-arrow-slide {
      z-index: 1;
      position: absolute;
      inset: 120px -16px auto auto;
      width: 32px;
      height: 32px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      i {
        font-size: 12px;
      }
    }

    .prev-arrow-slide {
      z-index: 1;
      position: absolute;
      inset: 120px auto auto -16px;
      width: 32px;
      height: 32px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      i {
        font-size: 12px;
      }
    }

    .next-arrow-slide,
    .prev-arrow-slide {
      &:hover {
        i {
          color: #000;
          transition: all 0.1s ease;
          transform: scale(1.1);
        }
      }
    }
  }
`;
