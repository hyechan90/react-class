import React from "react";
import logo from "./google_app_icon.png";
import profile from "./profile.png";
import google from "./google.png";
import glass from "./magnifying_glass.png";
import mic from "./mic.png";
import plus from "./plus.png";
import "./App.css";

function App() {
  return (
    <div className="root">
      <header>
        <div className="gmail">Gmail</div>
        <div className="image">이미지</div>
        <div className="icon">
          <img src={logo} title={"Google apps"} />
        </div>
        <div className="profile">
          <img
            src={profile}
            title={"Google Account: 홍길동\n(honggiddong@gmail.com"}
          />
        </div>
      </header>

      <section>
        <div>
          <img src={google} />
        </div>
        <div className="serachBar">
          <div>
            <img src={glass} />
          </div>
          <div>
            <input
              type="text"
              align="center"
              placeholder="Google 검색 또는 URL 입력"
            />
          </div>
          <div>
            <img src={mic} />
          </div>
        </div>
        <div className="plus">
          <img src={plus} />
          <div>바로가기 추가</div>
        </div>
      </section>

      <footer>
        <div className="customSetting">
          <div>맞춤설정</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
