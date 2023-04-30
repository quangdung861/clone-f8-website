import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 0px 40px 20px 20px;
  .image-slider {
    margin-top: 20px;
    display: grid;
    .image {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-radius: 16px;
      flex-shrink: 0;
      .box-text {
        max-width: 640px;
        width: 100%;
        flex-shrink: 0;
        padding-right: 32px;
        .box-title {
          font-size: 32px;
          font-weight: bold;
          margin: 20px 0px 8px 0px;
          color: #fff;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* số dòng hiển thị */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .text-description {
          display: block;
          margin-bottom: 20px;
          color: #fff;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* số dòng hiển thị */
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .box-btn-action {
          color: #fff;
          font-weight: bold;
          padding: 6px 12px 8px 12px;
          display: inline-block;
          border-radius: 16px;
          border: 2px solid #fff;
          text-align: center;
          &:hover {
            background-color: #fff;
            color: #7612ff;
          }
        }
      }
      img {
        width: 100%;
        height: 270px;
        object-fit: cover;
        border-radius: 12px;
      }
    }

    .slick-dots {
      position: absolute;
      left: 0px;
      bottom: -38px;
      list-style: none;
      text-align: left;
      display: block;
    }

    .slick-dots > li {
      width: 32px;
    }

    .slick-dots li button:before {
      opacity: 1;
      width: 32px;
      height: 8px;
      border-radius: 4px;
      content: "";
      text-align: center;
      background-color: #e0e4e4;
      transition: width 0.2s ease;
    }

    .slick-dots li.slick-active {
      width: 50px;
    }

    .slick-dots li.slick-active button:before {
      opacity: 1;
      background-color: #bcbebe;
      width: 50px;
      transition: width 0.2s ease;
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

  @media only screen and (max-width: 768px) {
    .image-slider {
      .next-arrow-slide,
      .prev-arrow-slide {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    & {
      padding: 20px 20px 40px 40px;
    }
  }
`;
