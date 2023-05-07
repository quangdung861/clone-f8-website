import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getBlogListAction } from "redux/user/actions";
import { PAGINATE } from "constants/paginate";

import * as S from "./styles";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { blogList } = useSelector((state) => state.blogReducer);

  const [currentPage, setCurrentPage] = useState(1);

  const { total } = blogList.meta;
  const paginations = Math.ceil(total / blogList.meta.limit);

  const handleGetPage = (page) => {
    setCurrentPage(page);
  };

  const renderpaginations = () => {
    let paginationhandle = [];
    if (paginations) {
      if (currentPage < 5) {
        for (let i = 1; i <= 5; i++) {
          paginationhandle.push(
            <li key={i} className="pagination-item">
              <button
                className={
                  currentPage === i
                    ? "pagination-item__button pagination-item__button--active"
                    : "pagination-item__button"
                }
                onClick={(e) => handleGetPage(parseInt(e.target.innerHTML))}
              >
                {i}
              </button>
            </li>
          );
        }
        return (
          <ul className="pagination-list">
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </li>
            {paginationhandle}
            <li className="pagination-item">
              <button className="pagination-item__button pagination-item__button--custome">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </li>
            <li className="pagination-item">
              <button
                className={
                  currentPage === paginations
                    ? "pagination-item__button pagination-item__button--active"
                    : "pagination-item__button"
                }
                onClick={() => setCurrentPage(paginations)}
              >
                {paginations}
              </button>
            </li>
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() =>
                  currentPage < paginations && setCurrentPage(currentPage + 1)
                }
              >
                <i className="fa-solid fa-chevron-left fa-rotate-180"></i>
              </button>
            </li>
          </ul>
        );
      }

      if (currentPage >= 5 && currentPage < paginations - 4) {
        for (let i = currentPage; i <= currentPage + 2; i++) {
          if (i < paginations) {
            paginationhandle.push(
              <li key={i - 1} className="pagination-item">
                <button
                  className={
                    currentPage === i - 1
                      ? "pagination-item__button pagination-item__button--active"
                      : "pagination-item__button"
                  }
                  onClick={(e) => handleGetPage(parseInt(e.target.innerHTML))}
                >
                  {i - 1}
                </button>
              </li>
            );
          }
        }
        return (
          <ul className="pagination-list">
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </li>
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
            </li>
            <li className="pagination-item">
              <button className="pagination-item__button pagination-item__button--custome">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </li>
            {paginationhandle}
            <li className="pagination-item">
              <button className="pagination-item__button pagination-item__button--custome">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </li>
            <li className="pagination-item">
              <button
                className={
                  currentPage === paginations
                    ? "pagination-item__button pagination-item__button--active"
                    : "pagination-item__button"
                }
                onClick={() => setCurrentPage(paginations)}
              >
                {paginations}
              </button>
            </li>
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() =>
                  currentPage < paginations && setCurrentPage(currentPage + 1)
                }
              >
                <i className="fa-solid fa-chevron-left fa-rotate-180"></i>
              </button>
            </li>
          </ul>
        );
      }

      if (currentPage >= paginations - 4) {
        for (let i = paginations - 4; i <= paginations; i++) {
          paginationhandle.push(
            <li key={i} className="pagination-item">
              <button
                className={
                  currentPage === i
                    ? "pagination-item__button pagination-item__button--active"
                    : "pagination-item__button"
                }
                onClick={(e) => handleGetPage(parseInt(e.target.innerHTML))}
              >
                {i}
              </button>
            </li>
          );
        }
        return (
          <ul className="pagination-list">
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </li>
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
            </li>
            <li className="pagination-item">
              <button className="pagination-item__button pagination-item__button--custome">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </li>
            {paginationhandle}
            <li className="pagination-item">
              <button
                className="pagination-item__button"
                onClick={() =>
                  currentPage < paginations && setCurrentPage(currentPage + 1)
                }
              >
                <i className="fa-solid fa-chevron-left fa-rotate-180"></i>
              </button>
            </li>
          </ul>
        );
      }
    }
  };

  useEffect(() => {
    dispatch(
      getBlogListAction({
        params: {
          limit: PAGINATE.BLOG,
          page: currentPage,
        },
      })
    );

    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(
      getBlogListAction({
        params: {
          limit: PAGINATE.BLOG,
          page: 1,
        },
      })
    );
  }, []);

  const renderBlogList = () => {
    return blogList.data.map((item, index) => {
      const convertContent = item.content
        ?.slice(0, 150)
        .split(" ")
        .slice(0, item.content.slice(0, 140).split(" ").length - 1)
        .join(" ");
      return (
        <div className="content-item" key={index}>
          <div className="content-item__top">
            <div className="left">
              <img src={item.user.avatar} alt="" />
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
        <div className="header">
          <h1 style={{ fontWeight: "900" }}>Bài viết nổi bật</h1>
          <p style={{ maxWidth: "840px" }}>
            Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
            và các kỹ thuật lập trình web.
          </p>
        </div>
        <div className="container">
          <div className="container__left">
            <div className="content-list">{renderBlogList()}</div>
            <div className="pagination">
              <ul className="pagination-list">{renderpaginations()}</ul>
            </div>
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
