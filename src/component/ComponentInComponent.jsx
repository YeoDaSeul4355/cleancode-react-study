/* 
🖐️ 컴포넌트 내부에 컴포넌트 선언

📖 문제점
- 결합도가 증가함.(구조적으로 스코프적으로 종속된 개발이 되므로 나중에 확장성이 생겨 분리가 힘들다.)
- 성능 저하(상위 컴포넌트 리렌더 => 하위 컴포넌트도 재생성)
*/

import React from "react";

const ComponentInComponent = () => {
  // ❌
  const InnerComponet = () => {
    return <>Inner Component</>;
  };
  return (
    <div>
      <InnerComponet />
    </div>
  );
};

export default ComponentInComponent;
