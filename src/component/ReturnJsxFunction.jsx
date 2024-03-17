/* 
🖐️ JSX 컴포넌트 함수로 반환
- JSX는 함수를 호출하기 위해 {}로 감싸는 것이 아니라, 해당 함수를 그대로 JSX 요소로 사용
*/

import React from "react";

const ReturnJsxFunction = () => {
  // ❌
  const TopRender = () => {
    return (
      <main>
        <p>Clean Code React</p>
      </main>
    );
  };
  return <div>{TopRender()}</div>;
};

export default ReturnJsxFunction;
