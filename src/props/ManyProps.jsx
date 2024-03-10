/* 
🖐️ 너무 많은 props

📖 너무 많은 props를 넘기는 경우
- 결과보다는 일단 실행 => 분리의 대상?
- TanStack Query, From Library, 상태 관리자, Context API, Composition 등등을 쓸 수 있다.

📖 방법
- One Depth 분리를 한다.
- 확장성을 위한 분리를 위해 도메인 로직을 다른 곳을 모아넣는다.
*/

import React from "react";
import ChildComponent from "./ChildComponent";

const ManyProps = () => {
  return (
    <>
      <ChildComponent
        user={1}
        auth={1}
        location={1}
        handleSubmit={1}
        favorit={1}
      />
      ;
    </>
  );
};

export default ManyProps;
