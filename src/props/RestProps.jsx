/* 
🖐️ ...props 주의할 점

📖 ...props 주의할 점
- 코드를 예측하기 어렵다.
- 그럴 때엔 관련 있는 props를 명시해놓고 컴포넌트에 부여해준다.
*/
import React from "react";
import ChildComponent from "./ChildComponent";

const RestProps = (...props) => {
  const { 관련_없는_props, 관련_있는_props, ...나머지_props } = props;
  return <ChildComponent />;
};

export default RestProps;
