/* 
🖐️ 인라인 스타일 주의하기

📖 CSS in JS 방식의 경우
- 태그에 inline 스타일처럼 쭉 쓰는 것 보단 객체로 만들어 쓰는게 편하고 가독성도 좋다.
- 대신 렌더링되는 곳 안에 넣으면 불필요한 렌더링이 이루어지므로 바깥으로 빼내는게 best!
*/

import React from "react";

const MyButtonStyle = {
  warning: { backgroundColor: "yellow", fontSize: "14px" },
  danger: { backgroundColor: "red", fontSize: "14px" },
  safe: { backgroundColor: "green", fontSize: "14px" },
};

const InlineStyle = () => {
  return (
    <>
      {/* ❌ */}
      {/* <button style="background-color: 'red'; font-size: '14px'"></button> */}

      {/* ⭕ */}
      <button style={MyButtonStyle.warning}></button>
      <button style={MyButtonStyle.danger}></button>
      <button style={MyButtonStyle.safe}></button>
    </>
  );
};

export default InlineStyle;
