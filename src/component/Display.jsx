/* 
🖐️ display name

📖 displayName?
- displayName은 컴포넌트의 이름을 지정하는 데 사용되는 속성
- 이 속성을 설정하면 디버깅 시에 더 의미 있는 정보를 제공할 수 있음
*/

import React from "react";

const Display = () => {
  return <div>Display</div>;
};

Display.displayName = "MyComponent";

export default Display;
