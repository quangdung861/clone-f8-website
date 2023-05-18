import React, { useState, useEffect } from "react";

import Footer from "layouts/user/components/Footer";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { convertImageToBase64 } from "utils/file";
import { updateUserInfoAction } from "redux/user/actions";

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  console.log("🚀 ~ file: index.jsx:12 ~ ProfilePage ~ userInfo:", userInfo);
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState("");

  useEffect(() => {
    const inputFileElement = document.querySelector("#myFileInput");
    inputFileElement?.addEventListener("change", function (e) {
      const file = e.target?.files[0];
      const imgPreview = convertImageToBase64(file);
      imgPreview.then((res) => {
        setImgPreview({
          userId: userInfo.data.id,
          images: {
            ...userInfo.data.images,
            cover: {
              url: res,
              name: file.name,
              type: file.type,
            },
          },
          callback: {
            resetImagePreview: () => {
              setImgPreview("");
            },
          },
        });
      });
    });
  }, [userInfo, imgPreview]);

  async function uploadImage() {
    if (imgPreview) {
      dispatch(updateUserInfoAction(imgPreview));
    }
  }

  useEffect(() => {
    const inputAvatarElement = document.querySelector("#inputFileAvatar");
    inputAvatarElement?.addEventListener("change", (e) => {
      if (userInfo.data.id) {
        const file = e.target.files[0];
        const imageAvatar = convertImageToBase64(file);
        console.log(userInfo.data.id);
        imageAvatar.then((res) => {
          dispatch(
            updateUserInfoAction({
              userId: userInfo.data.id,
              images: {
                ...userInfo.data.images,
                avatar: {
                  url: res,
                  name: file.name,
                  type: file.type,
                },
              },
              callback: null,
            })
          );
        });
      }
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Container
        cover={
          imgPreview?.images?.cover?.url || userInfo.data.images?.cover?.url
        }
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
                />
              </div>
              <span className="fullname">{userInfo.data.fullName}</span>
            </div>
            <div className="header-right">
              {imgPreview ? (
                <>
                  <button
                    className="--btn-default btn-default--custome"
                    onClick={() => setImgPreview("")}
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
                    Chỉnh sửa ảnh bìa
                  </label>
                  <input
                    type="file"
                    id="myFileInput"
                    className="custom-file-input"
                  />
                </>
              )}
            </div>
          </div>
          <div className="content"></div>
        </div>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default ProfilePage;
