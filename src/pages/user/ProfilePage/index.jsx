import React, { useState, useContext } from "react";

import Footer from "layouts/user/components/Footer";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { convertImageToBase64 } from "utils/file";
import {
  updateCoverImageAction,
  updateAvatarImageAction,
} from "redux/user/actions";
import { AuthContext } from "Context/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from "firebaseConfig";
import { AppContext } from "Context/AppProvider";

const ProfilePage = () => {
  // const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [imgPreviewCover, setImgPreviewCover] = useState(null);

  const [isHovered, setIsHovered] = useState(null);

  const { userInfo } = useContext(AppContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCoverImagePreview = (file) => {
    if (file.size >= 1048576) {
      setIsShowMessageError(true);
      setTimeout(function () {
        setIsShowMessageError(false);
      }, 3000);
      return;
    }
    const imgPreviewCoverConvert = convertImageToBase64(file);
    imgPreviewCoverConvert.then((res) => {
      setImgPreviewCover(
        res
        //   {
        //   url: res,
        //   name: file.name,
        //   type: file.type,
        // }
      );
    });
  };

  async function uploadImage() {
    if (imgPreviewCover) {
      const userInfoRef = doc(db, "users", userInfo.id);
      await setDoc(
        userInfoRef,
        {
          photoCover: imgPreviewCover,
        },
        {
          merge: true,
        }
      );
      setImgPreviewCover("");

      // dispatch(
      //   updateCoverImageAction({
      //     imgPreviewCover: imgPreviewCover,
      //     userId: userInfo.data.id,
      //     callback: {
      //       resetImagePreview: () => {
      //         setImgPreviewCover("");
      //       },
      //     },
      //   })
      // );
    }
  }
  const [isShowMessageError, setIsShowMessageError] = useState(false);

  const handleAvatarImage = (file) => {
    if (file) {
      if (file.size >= 1048576) {
        setIsShowMessageError(true);
        setTimeout(function () {
          setIsShowMessageError(false);
        }, 3000);
        return;
      }
      let imageAvatar = convertImageToBase64(file);
      imageAvatar.then((res) => {
        const userInfoRef = doc(db, "users", userInfo.id);
        setDoc(
          userInfoRef,
          {
            avatar: res,
          },
          {
            merge: true,
          }
        );

        // dispatch(
        //   updateAvatarImageAction({
        //     userId: userInfo.data.id,
        //     avatarData: {
        //       url: res,
        //       name: file.name,
        //       type: file.type,
        //     },
        //   })
        // );
      });
    }
  };

  return userInfo?.uid ? (
    <S.Wrapper>
      <S.Container cover={imgPreviewCover || userInfo.photoCover}>
        <div className="profile-container">
          <div className="header">
            <div className="header-left">
              <div className="box-avatar">
                <img src={userInfo.avatar} alt="" />
                <label htmlFor="inputFileAvatar" className="box-avatar__icon">
                  <i className="fa-solid fa-camera"></i>
                </label>
                <input
                  type="file"
                  id="inputFileAvatar"
                  className="custom-file-input"
                  onClick={(e) => (e.target.value = null)}
                  onChange={(e) => handleAvatarImage(e.target.files[0])}
                />
              </div>
              <span className="fullname">{userInfo.fullName}</span>
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
                <div>
                  <label htmlFor="myFileInput" className="custom-file-label">
                    <i className="fa-solid fa-camera"></i>
                    <span>Chỉnh sửa ảnh bìa</span>
                  </label>
                  <input
                    type="file"
                    id="myFileInput"
                    className="custom-file-input"
                    onClick={(e) => (e.target.value = null)}
                    onChange={(e) => handleCoverImagePreview(e.target.files[0])}
                  />
                </div>
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
            <img src={userInfo?.avatar} alt="" />
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
        {isShowMessageError && (
          <div
            className="message-error"
            style={{
              position: "absolute",
              top: "80px",
              left: "0px",
              right: "0px",
              margin: "0 auto",
              backgroundColor: "#fff",
              width: "300px",
              height: "40px",
              padding: "12px",
              borderRadius: "4px",
              boxShadow: "var(--box-shadow-default)",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Hình ảnh phải có kích thước nhỏ hơn 1MB
          </div>
        )}
      </S.Container>
      <Footer />
    </S.Wrapper>
  ) : (
    <></>
  );
};

export default ProfilePage;
