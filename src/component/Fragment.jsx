/* 
🖐️ Fragment

📖 Fragment (React v16.2 출시)

- React 애플리케이션에서 여러 요소를 하나의 그룹으로 묶는 데 사용되는 특별한 컴포넌트 
- 일반적으로 React 컴포넌트는 단일 부모 요소로 감싸져 있어야 하지만 때로는 여러 요소를 렌더링해야 할 때가 있음.
*/

import React from "react";

const Fragment = () => {
  // ❌ (기존 div요소로 감싸고 렌더링했을 경우 문제점)
  // <div> 요소가 DOM에 추가되어 CSS 스타일링이나 DOM 구조에 영향을 미칠 수 있음
  // 요소의 구조가 불필요하게 복잡해질 수 있음
  //   return (
  //     <div>
  //       <h1>Hello</h1>
  //       <p>React fragment example</p>
  //     </div>
  //   );

  // ⭕ (React.Fragment 또는 빈 태그로 사용할 수 있음.)
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>React fragment example</p>
    </React.Fragment>
  );
};

export default Fragment;
