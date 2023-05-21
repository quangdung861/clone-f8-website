import React, { useState } from "react";

import Footer from "layouts/user/components/Footer";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { convertImageToBase64 } from "utils/file";
import {
  updateCoverImageAction,
  updateAvatarImageAction,
} from "redux/user/actions";

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [imgPreviewCover, setImgPreviewCover] = useState(null);

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCoverImagePreview = (file) => {
    const imgPreviewCoverConvert = convertImageToBase64(file);
    imgPreviewCoverConvert.then((res) => {
      setImgPreviewCover({
        url: res,
        name: file.name,
        type: file.type,
      });
    });
  };

  function uploadImage() {
    if (imgPreviewCover) {
      dispatch(
        updateCoverImageAction({
          imgPreviewCover: imgPreviewCover,
          userId: userInfo.data.id,
          callback: {
            resetImagePreview: () => {
              setImgPreviewCover("");
            },
          },
        })
      );
    }
  }

  const handleAvatarImage = (file) => {
    if (file) {
      let imageAvatar = convertImageToBase64(file);
      imageAvatar.then((res) => {
        dispatch(
          updateAvatarImageAction({
            userId: userInfo.data.id,
            avatarData: {
              url: res,
              name: file.name,
              type: file.type,
            },
          })
        );
      });
    }
  };

  return (
    <S.Wrapper>
      <S.Container
        cover={imgPreviewCover?.url || userInfo.data.images?.cover?.url}
      >
        <div className="profile-container">
          <div className="header">
            <div className="header-left">
              <div className="box-avatar">
                <img src={userInfo.data.images?.avatar?.url} alt="" />
                <label htmlFor="inputFileAvatar" className="box-avatar__icon">
                  <i className="fa-solid fa-camera"></i>
                </label>
                <input
                  type="file"
                  id="inputFileAvatar"
                  className="custom-file-input"
                  onChange={(e) => handleAvatarImage(e.target.files[0])}
                />
              </div>
              <span className="fullname">{userInfo.data.fullName}</span>
            </div>
            <div className="header-right">
              {imgPreviewCover ? (
                <>
                  <button
                    className="--btn-default btn-default--custome"
                    onClick={() => setImgPreviewCover("")}
                  >
                    Hủy
                  </button>
                  <button
                    className="--btn-default btn-default--custome"
                    onClick={() => uploadImage()}
                  >
                    Lưu
                  </button>
                </>
              ) : (
                <>
                  <label htmlFor="myFileInput" className="custom-file-label">
                    <i className="fa-solid fa-camera"></i>
                    <span>Chỉnh sửa ảnh bìa</span>
                  </label>
                  <input
                    type="file"
                    id="myFileInput"
                    className="custom-file-input"
                    onChange={(e) => handleCoverImagePreview(e.target.files[0])}
                  />
                </>
              )}
            </div>
          </div>
          <div className="content"></div>
          <div
            className="subscribe"
            // ref={hoverRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={userInfo.data.images?.avatar.url} alt="" />
            <div
              className={
                isHovered
                  ? "container-subscribe container-subscribe--open"
                  : isHovered !== null
                  ? "container-subscribe container-subscribe--close"
                  : "container-subscribe"
              }
            >
              <div className="box-subscribe">
                <div className="box-subscribe__name">
                  Challenge Me - Hãy Thách Thức Tôi
                </div>
                <span className="btn-subscribe">Đăng ký</span>
              </div>
            </div>
          </div>
        </div>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default ProfilePage;
