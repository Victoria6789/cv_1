import React from "react";
import profilePic from "../assets/profile.jpg";
import './AuthorInfo.css'; 

const AuthorInfo = () => {
  return (
    <div className="author-container">
      <img
        src={profilePic}
        alt="Синчикова Виктория"
        className="profile-picture"
      />
      <div className="author-info">
        <h2>Синчикова Виктория</h2>
        <p>Разработчик программного обеспечения с опытом в IT более 12 лет.</p>
        <p>Образование: Высшее, БГУ</p>
        
        <h3>Опыт работы</h3>
        <p>Фриланс, само занятость, обучение в БГУ</p>
        <div className="additional-info">
          <p>Уровень английского:  B2</p>
          <p>
            Email: <a href="mailto:sinchikovavik.com">sinchikovavik.com</a>
          </p>
          <p>
            Социальные сети: <a href="https://t.me/sefirka_02">Telegram</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;