import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  .profile-container {
    min-height: 100vh;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    .header {
      background-image: ${(props) => `url(${props?.cover})`};
      padding-top: 28%;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      .header-left {
        position: absolute;
        bottom: -90px;
        left: 50px;
        display: flex;
        align-items: end;
        .box-avatar {
          position: relative;
          .custom-file-input {
            display: none;
          }
          img {
            width: 160px;
            height: 160px;
            border: 6px solid #fff;
            border-radius: 50%;
            margin-right: 20px;
            object-fit: cover;
          }
          .box-avatar__icon {
            position: absolute;
            right: 38px;
            bottom: 12px;
            border: 6px solid #fff;
            border-radius: 50%;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
            cursor: pointer;
            :hover {
              filter: brightness(95%);
            }
            > i {
              font-size: 20px;
              background-color: #fff;
            }
          }
        }
        .fullname {
          margin-bottom: 40px;
          font-weight: 700;
          font-size: 24px;
          white-space: nowrap;
        }
      }
      .header-right {
        position: absolute;
        bottom: 12px;
        right: 12px;
        .custom-file-input {
          display: none;
        }
        .custom-file-label {
          display: inline-block;
          background-color: white;
          border-radius: 6px;
          padding: 10px;
          max-height: 40px;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          i {
            margin-right: 8px;
          }
          :hover {
            background-color: #f5f4f4;
          }
        }
        .btn-default--custome {
          background-color: #fff;
          color: #333;
          border-radius: 6px;
          &:last-child {
            margin-left: 12px;
          }
        }
        .dropdown-cover-image {
          background-color: #fff;
        }
      }
    }
  }
`;
