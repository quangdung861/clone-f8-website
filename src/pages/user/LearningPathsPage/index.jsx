import React from "react";

import * as S from "./styles";

const LearningPathsPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div style={{ marginBottom: "80px" }}>
          <h1 style={{ fontWeight: "900" }}>Lộ trình học</h1>
          <p style={{ maxWidth: "840px" }}>
            Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình
            học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end bạn nên
            tập trung vào lộ trình "Front-end".
          </p>
        </div>
        <div className="section-item">
          <div className="section-left">
            <div className="content">
              <div className="content-left">
                <h2>Lộ trình học Front-end</h2>
                <p>
                  Lập trình viên Front-end là người xây dựng ra giao diện
                  websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở
                  thành lập trình viên Front-end nhé.
                </p>
              </div>
              <div className="content-right">
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                  alt=""
                />
              </div>
            </div>
            <div className="content-bottom">
              <div className="--btn-default --btn-default--custome">
                Xem chi tiết
              </div>
            </div>
          </div>
          <div className="section-right">
            <div className="content">
              <div className="content-left">
                <h2>Lộ trình học Back-end</h2>
                <p>
                  Trái với Front-end thì lập trình viên Back-end là người làm
                  việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng
                  ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                </p>
              </div>
              <div className="content-right">
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png"
                  alt=""
                />
              </div>
            </div>
            <div className="content-bottom">
              <div className="--btn-default --btn-default--custome">
                Xem chi tiết
              </div>
            </div>
          </div>
        </div>
        <div className="section-suggest">
          <div className="section-suggest__left">
            <h2>Tham gia cộng đồng học viên F8 trên Facebook</h2>
            <p>
              Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham
              gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
            </p>
            <div>
              <button className="--btn-default --btn-default--custome">
                Tham gia nhóm
              </button>
            </div>
          </div>
          <div className="section-suggest__right">
            <img
              src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
              alt=""
            />
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default LearningPathsPage;
