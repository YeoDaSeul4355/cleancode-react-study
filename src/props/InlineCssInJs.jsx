/* 
🖐️ 인라인 스타일 주의하기

📖 CSS in JS 방식의 경우

📖 타입 안정성
- 자동완성으로 생산성 DX
- exports, 내부에서만 사용할 수 도 있을 때?
- export하는 경우 외부의 컴포넌트에서 사용할 수 있다.

📖 장점 
- 외부로 분리했기 때문에 스타일 렌더링 될 때마다 직렬화되지 않는다. => 한번만 된다.
- 동적인 스타일을 실수로 건드는 확률이 적어진다.
- 스타일 관련 코드를 분리해서 로직에 집중하고 JSX를 볼 때 조금 더 간결하게 볼 수 있다.
*/

import React from "react";
const MyButtonStyle = {
  warning: { backgroundColor: "yellow", fontSize: "14px" },
  danger: { backgroundColor: "red", fontSize: "14px" },
  safe: { backgroundColor: "green", fontSize: "14px" },
};

const InlineCssInJs = () => {
  return (
    <>
      <button style={MyButtonStyle.warning}></button>
      <button style={MyButtonStyle.danger}></button>
      <button style={MyButtonStyle.safe}></button>
    </>
  );
};

export default InlineCssInJs;
