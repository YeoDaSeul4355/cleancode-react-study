/* 
🖐️ 업데이트가 되지 않는 일반적인 객체

📖 업데이트가 되지 않는 일반적인 객체는 어떻게 처리할까?
- 리액트 상태로 바꾼다던가 혹은 아예 외부로 내보낸다.
*/

import React from "react";
import { useState } from "react";

// ⭕
const INFO = {
  name: "여다슬",
  age: 24,
};

const NoUpdateValue = () => {
  // ❌
  //   const INFO = {
  //     name: "여다슬",
  //     age: 24,
  //   };
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{INFO.name}</p>
      <p>{INFO.age}</p>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>증가 버튼</button>
    </div>
  );
};

export default NoUpdateValue;
