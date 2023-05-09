import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  .sidebar-mobile {
    display: block;
    visibility: hidden;
    position: fixed;
    inset: 0 25vw 0 0;
    transform: translateX(-100%);
    background-color: white;
    height: 100vh;
    padding: 16px 0px 0px 16px;
    z-index: 3;
    overflow: hidden;
    overflow-y: auto;
    user-select: none;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #797676;
      border-radius: 10px;
    }
    ul.sidebar-mobile-list {
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.079);
      }
      margin-bottom: 12px;
      li.sidebar-mobile-item {
        padding: 16px 0px 16px 16px;
        border-radius: 6px;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover {
          background-color: #f0f0f0;
        }
        .sidebar-mobile-item__content {
          font-size: 16px;
          font-weight: 500;
          display: flex;
          align-items: center;
          .content-icon {
            color: #808990;
            margin-right: 16px;
            min-width: 18px;
          }
          .content-text {
          }
          .content-text--custome {
            display: flex;
            align-items: center;
            > i {
              margin-left: 120px;
            }
          }
        }
      }
      .sidebar-mobile-item:last-child {
        margin-bottom: 12px;
      }

      .sidebar-mobile-item--active {
        background-color: #f0f0f0;
      }

      ul.sidebar-mobile-list-2 {
        display: none;
        padding-left: 50px;
        li.sidebar-mobile-item-2 {
          padding: 16px 0 16px 16px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: #f0f0f0;
          }
          .content-text-2 {
          }
          .sidebar-mobile-item__content-2 {
            .content-text-2 {
              display: flex;
              align-items: center;
              > i {
                margin-left: 120px;
                margin-right: 12px;
              }
            }
          }
        }
        ul.sidebar-mobile-list-3 {
          display: none;
          padding-left: 24px;
          li.sidebar-mobile-item-3 {
            padding: 16px 0px 16px 16px;
            transition: all 0.3s ease;
            border-radius: 6px;
            &:hover {
              background-color: #f0f0f0;
            }
            cursor: pointer;
            .sidebar-mobile-item__content-3 {
              .content-text-3 {
                display: flex;
                align-items: center;
                font-weight: 500;
                > i {
                  margin-right: 12px;
                  font-size: 10px;
                }
                > span {
                  font-size: 16px;
                }
              }
            }
          }
        }
        ul.sidebar-mobile-list-3--active {
          display: block;
        }
      }
      ul.sidebar-mobile-list-2--active {
        display: block;
      }
    }
    .sidebar-mobile-list--header {
      padding-top: 20px;
    }
  }

  .sidebar-mobile--open {
    animation-name: moveToRight, fadeInToRight;
    animation-duration: 0.5s;
    transform: translateX(0vw);
    visibility: visible;
  }

  .sidebar-mobile--close {
    animation-name: moveToLeft, fadeInToLeft;
    animation-duration: 0.5s;
  }

  .modal-overlay-sidebar {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    inset: 0 0 0 0;
    transform: translate(-100%);
  }

  .modal-overlay-sidebar-open {
    animation-name: fadeInToRight;
    animation-duration: 0.5s;
    transform: translate(0vw);
  }

  .modal-overlay-sidebar-close {
    animation-name: fadeInToLeft, moveToLeft2;
    animation-duration: 0.01s;
  }

  @keyframes moveToRight {
    0% {
      transform: translateX(-75vw);
    }
    100% {
      transform: translateX(0vw);
    }
  }

  @keyframes fadeInToRight {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes moveToLeft {
    0% {
      transform: translateX(0vw);
      visibility: visible;
    }
    100% {
      transform: translateX(-75vw);
      visibility: visible;
    }
  }

  @keyframes moveToLeft2 {
    0% {
      transform: translateX(0vw);
    }
    100% {
      transform: translateX(0vw);
    }
  }

  @keyframes fadeInToLeft {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;
