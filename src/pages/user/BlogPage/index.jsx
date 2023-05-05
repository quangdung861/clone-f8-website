import React, { useEffect } from "react";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { getBlogListAction } from "redux/user/actions";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { blogList } = useSelector((state) => state.blogReducer);
  useEffect(() => {
    dispatch(
      getBlogListAction({
        params: {
          limit: 3,
          page: 1,
        },
      })
    );
  }, []);

  const renderBlogList = () => {
    return blogList.data.map((item) => {
      const convertContent = item.content
        ?.slice(0, 150)
        .split(" ")
        .slice(0, item.content.slice(0, 140).split(" ").length - 1)
        .join(" ");
      return (
        <div className="content-item">
          <div className="content-item__top">
            <div className="left">
              <img
                src={item.user.avatar}
                alt=""
              />
              <span>{item.user.fullName}</span>
            </div>
            <div className="right">
              <i className="fa-regular fa-bookmark"></i>{" "}
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="content-item__center">
            <div className="left">
              <h2>{item.title}</h2>
              <p>{convertContent}...</p>
              <div>
                <button className="--btn-default --btn-default--custome">
                  ReactJS
                </button>
                &nbsp;&nbsp;&nbsp;
                <span>{item.createAt} ngày</span>&nbsp;&nbsp;·&nbsp;&nbsp;
                <span>1 phút đọc</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <div className="header" style={{ marginBottom: "80px" }}>
          <h1 style={{ fontWeight: "900" }}>Bài viết nổi bật</h1>
          <p style={{ maxWidth: "840px" }}>
            Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
            và các kỹ thuật lập trình web.
          </p>
        </div>
        <div className="container">
          <div className="container__left">
            <div className="content-list">{renderBlogList()}</div>
            {/* <div className="pagination-wrapper">
              <div className="pagination-pages">
                <div className="pagiation-page__btn">1</div>
                <div className="pagiation-page__btn">2</div>
                <div className="pagiation-page__btn">3</div>
              </div>
            </div> */}
          </div>

          <div className="container__right">
            <h3>Các chủ đề được đề xuất</h3>
            <div className="content-list">
              <div className="content-item">
                <button className="--btn-default">
                  Front-end / Mobile apps
                </button>
                <button className="--btn-default">Back-end / Devops</button>
                <button className="--btn-default">UI/ UX / Design</button>
                <button className="--btn-default">Others</button>
              </div>
            </div>
            <div className="box-image">
              <img
                src="https://files.fullstack.edu.vn/f8-prod/banners/25/63dc61d4caec2.png"
                alt=""
              />
              <img
                src="https://files.fullstack.edu.vn/f8-prod/banners/32/6421144f7b504.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default BlogPage;
