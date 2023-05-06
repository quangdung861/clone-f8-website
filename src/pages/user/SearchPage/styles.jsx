import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  padding: 0px 44px 44px;
  .search-input {
    width: 100%;
    height: 50px;
    font-size: 40px;
    font-weight: 500;
    margin: 50px 0px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    transition: font-size 0.3s ease;
    transition-delay: 0.5s;
  }
  .container-result-search {
    .nav-search {
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      &__courses {
        margin-right: 20px;
        padding: 4px 4px 14px 4px;
        font-size: 16px;
        color: #0000008a;
        transition: all 0.1s ease;
        cursor: pointer;
      }
      &__posts {
        margin-right: 20px;
        padding: 4px 0px 14px 0px;
        font-size: 16px;
        color: #0000008a;
        transition: all 0.1s ease;
        cursor: pointer;
      }
      &__videos {
        margin-right: 20px;
        padding: 4px 4px 14px 4px;
        font-size: 16px;
        color: #0000008a;
        transition: all 0.1s ease;
        cursor: pointer;
      }

      .nav-search__courses--active {
        color: black;
        font-weight: 700;
        border-bottom: 2px solid black;
      }
      .nav-search__posts--active {
        color: black;
        font-weight: 700;
        border-bottom: 2px solid black;
      }
      .nav-search__videos--active {
        color: black;
        font-weight: 700;
        border-bottom: 2px solid black;
      }
    }
    .result-search-list {
      padding: 20px 0px;
      .result-search-item {
        display: flex;
        padding: 16px 0px 20px 0px;
        &__left {
          img {
            width: 280px;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
          }
        }
        &__right {
          padding-left: 20px;
          max-width: 50%;
          h2 {
            margin: 20px 0 0 0;
            font-weight: 500;
            cursor: pointer;
          }
          p {
            margin-top: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* số dòng hiển thị */
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .container-result-search {
      .result-search-list {
        .result-search-item {
          flex-direction: column;
          &__left {
            img {
              width: 100%;
            }
          }
          &__right {
            padding-left: 0;
            max-width: 70%;
          }
        
        }
      }
    }
  }
`;
