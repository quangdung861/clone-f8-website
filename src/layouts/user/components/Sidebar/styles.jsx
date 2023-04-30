import styled from "styled-components";

export const Wrapper = styled.div`
  width: var(--sidebar-app-width);
  flex-shrink: 0;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: sticky;
  left: 0px;
  top: 80px;
  z-index: 1;

  .sidebar-wrapper {
    padding: 0px 8px;
    margin: 16px 0px 12px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn-action {
      background-color: #1473e6;
      border-radius: 100%;
      width: 44px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      cursor: pointer;
      .icon-plus {
        font-size: 16px;
        transition: transform 0.3s ease;
      }
      .icon-plus-active {
        transition: transform 0.3s ease;
        transform: rotate(45deg) scale(1.4);
      }
      &:hover {
        .icon-plus {
          transform: scale(1.4);
        }
      }
      .wrapper-modal-action {
        position: absolute;
        inset: 0px auto auto 0px;
        transform: translate(26px, 42px);
        animation-name: fadeIn;
        animation-duration: 0.2s;
        user-select: none;
        .modal-action-list {
          padding: 8px 0px;
          width: 200px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.2);
          .action-item {
            padding: 12px 20px;
            color: #000;
            display: flex;
            align-items: center;
            > span {
              margin-left: 16px;
            }
            &:hover {
              background-color: #f0f0f0;
            }
          }
        }
      }
    }
    .sidebar-list {
      .sidebar-item {
        .sidebar-item-content {
          width: 72px;
          height: 72px;
          margin-top: 4px;
          /* background-color: #e8ebed; */
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          > i {
            font-size: 18px;
          }
          > span {
            font-size: 11px;
            margin-top: 4px;
            font-weight: 500;
          }
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }

      from {
        transform: translate(26px, 36px);
      }
      to {
        transform: translate(26px, 42px);
      }
    }
  }
`;
