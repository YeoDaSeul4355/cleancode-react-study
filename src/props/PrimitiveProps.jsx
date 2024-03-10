/* 
🖐️ 객체보다는 단순한 props

📖 단순하게 prop만 전달해서 내려주기
- 객체를 전달해주기 보단 구조를 할당해서 전달하는 방식을 쓰자.
*/

import React from "react";

const PrimitiveProps = ({ avatarImgUrl, userName, email }) => {
  return (
    <div>
      <img src={avatarImgUrl} alt="" />
      <h3>{userName}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default PrimitiveProps;
