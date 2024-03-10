/* 
🖐️ 불필요한 Props 복사 및 연산

📖 props 복사 및 연산
- 값 비싸고 무거운 연산이 필요한 값은 애초에 컴포넌트 들어오기 전에 처리해서 값을 넘겨주는게 좋다.
- 하지만 컴포넌트에서 처리해야하는 이유가 있다면 굳이 useState보다 useMemo를 사용하면 된다.
- 가장 best는 굳이 props를 복사하지 않는 것! (데이터의 흐름을 끊기 때문)
*/

import React, { useMemo, useState } from "react";

const CopyProps = ({ value }) => {
  // ❌ (이렇게 변수로 저장하면 렌더링이 될 때마다 연산이 이루어지므로 굉장히... )
  // const copyValue = 값_비싸고_무거운_연산(value);
  // return <div>{copyValue}</div>;

  // ⭕(useMemo 사용)
  const copyValue = useMemo(() => "값_비싸고_무거운_연산"(value), [value]);
  return <div>{copyValue}</div>;
};

export default CopyProps;
