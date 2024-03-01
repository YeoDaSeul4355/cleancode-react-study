/* 
🖐️ useState대신 useRef

📖 리렌더링 방지가 필요하다면 useRef 사용
- 컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야하는 경우
- useState 대신 useRef를 사용하면 컴포넌트의 생명주기와 동일한 리렌더링되지 않는 상태를 만들 수 있음
*/

import React, { useEffect, useRef, useState } from "react";

const RefInsteadOfState = () => {
  // ❌
  // const [isMount, setIsMount] = useState(false);
  // useEffect(() => {
  //   if (!isMount) {
  //     setIsMount(true);
  //   }
  // }, [isMount]);

  // ⭕
  // 렌더링을 유발하지 않는 가변 컨테이너
  const isMount = useRef(false);
  useEffect(() => {
    isMount.current = true;

    return () => (isMount.current = false);
  }, []);
  return <div>{isMount && "컴포넌트 마운트 완료"}</div>;
};

export default RefInsteadOfState;
