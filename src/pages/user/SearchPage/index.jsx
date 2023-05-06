import React, { useState, useContext, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "App";
import { useLocation } from "react-router-dom";

import * as S from "./styles";
import { getSearchListAction } from "redux/user/actions";
const SearchPage = () => {
  const dispatch = useDispatch();
  const [selectCategory, setSelectCategory] = useState("courses");
  const [keyword, setKeyword] = useState("");
  const { setIsBoxSearch } = useContext(MyContext);
  const { searchList } = useSelector((state) => state.searchReducer);
  const location = useLocation();

  useEffect(() => {
    setIsBoxSearch(false);
    return () => {
      setIsBoxSearch(true);
    };
  }, []);

  useEffect(() => {
    const category = location.state?.category;
    const keyword = location.state?.keyword;
    if (category && keyword) {
      setSelectCategory(category);
      setKeyword(keyword);
    }
  }, []);

  useEffect(() => {
    if (keyword.length > 1) {
      dispatch(
        getSearchListAction({
          params: {
            q: keyword,
          },
        })
      );
    } else {
      dispatch(
        getSearchListAction({
          params: {
            q: "",
          },
        })
      );
    }
  }, [keyword]);

  const renderCourses = () => {
    if (searchList.data.courses[0]) {
      return searchList.data.courses.map((item, index) => {
        return (
          <div className="result-search-item" key={index}>
            <div className="result-search-item__left">
              <img src={item.image} alt="" />
            </div>
            <div className="result-search-item__right">
              <h2 className="name">{item.name}</h2>
              <p className="description">{item.description} </p>
            </div>
          </div>
        );
      });
    }
    return (
      <div style={{ marginTop: "40px", color: "rgba(0, 0, 0, 0.54)" }}>
        Chưa có kết quả nào phù hợp.
      </div>
    );
  };

  const renderPosts = () => {
    if (searchList.data.posts[0]) {
      return searchList.data.posts.map((item, index) => {
        return (
          <div className="result-search-item" key={index}>
            <div className="result-search-item__left">
              <img src={item.image} alt="" />
            </div>
            <div className="result-search-item__right">
              <h2 className="name">{item.name}</h2>
              <p className="description">{item.description} </p>
            </div>
          </div>
        );
      });
    }
    return (
      <div style={{ marginTop: "40px", color: "rgba(0, 0, 0, 0.54)" }}>
        Chưa có kết quả nào phù hợp.
      </div>
    );
  };

  const renderVideos = () => {
    if (searchList.data.videos[0]) {
      return searchList.data.videos.map((item, index) => {
        return (
          <div className="result-search-item" key={index}>
            <div className="result-search-item__left">
              <img src={item.image} alt="" />
            </div>
            <div className="result-search-item__right">
              <h2 className="name">{item.name}</h2>
              <p className="description">{item.description} </p>
            </div>
          </div>
        );
      });
    }
    return (
      <div style={{ marginTop: "40px", color: "rgba(0, 0, 0, 0.54)" }}>
        Chưa có kết quả nào phù hợp.
      </div>
    );
  };

  return (
    <S.Wrapper>
      <S.Container>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          style={keyword.length > 1 ? { fontSize: "32px" } : {}}
          value={keyword}
          placeholder="Tìm kiếm..."
        />
        <div className="container-result-search">
          <div className="nav-search">
            <div
              className={
                selectCategory === "courses"
                  ? "nav-search__courses nav-search__courses--active"
                  : "nav-search__courses"
              }
              onClick={() => setSelectCategory("courses")}
            >
              Khóa học
            </div>
            <div
              className={
                selectCategory === "posts"
                  ? "nav-search__posts nav-search__posts--active"
                  : "nav-search__posts"
              }
              onClick={() => setSelectCategory("posts")}
            >
              Bài viết
            </div>
            <div
              className={
                selectCategory === "videos"
                  ? "nav-search__videos nav-search__videos--active"
                  : "nav-search__videos"
              }
              onClick={() => setSelectCategory("videos")}
            >
              Video
            </div>
          </div>

          {searchList.loading ? (
            <div style={{ marginTop: "40px", color: "rgba(0, 0, 0, 0.54)" }}>
              Đang tìm kiếm...
            </div>
          ) : (
            <div className="result-search-list">
              {selectCategory === "courses" && renderCourses()}
              {selectCategory === "posts" && renderPosts()}
              {selectCategory === "videos" && renderVideos()}
            </div>
          )}
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default SearchPage;
