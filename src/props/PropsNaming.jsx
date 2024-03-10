/* 
🖐️ 알아두면 좋은 Props 네이밍

📖 props 네이밍은 어떤 게 일반적일까?
- 1. 스네이크 케이스나 케밥 케이스는 피해서 네이밍하자. (clean_code, clean-code 같은 것..)
- 2. 컴포넌트를 내려 받을 경우엔 네이밍을 똑같이 하는게 좋다.
*/

import React from "react";
import ChildComponent from "./ChildComponent";

const PropsNaming = () => {
  return (
    <>
      <ChildComponent className="" clean="code" cleanCode="react" />
    </>
  );
};

export default PropsNaming;
