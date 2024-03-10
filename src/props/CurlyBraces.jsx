/* 
🖐️ 중괄호 (Curly Braces)

📖 중괄호 (Curly Braces)는 언제 사용할까?
- 문자열의 경우에는 무조건 중괄호 없이 싱글 쿼터, 더블 쿼터를 사용해서 작성한다.
- 논리적인 변수나 숫자, boolean, 객체에 해당되는 배열, 함수, 표현식 등등은 중괄호를 사용한다.
*/

import React from "react";

const styles = {
  backgroundColor: "blue",
  width: 100,
};

const CurlyBraces = () => {
  return (
    <div
      className="clean-div"
      id="clean-code"
      style={styles}
      value={1}
      title="Clean Code React"
      onClick={() => {}}
    >
      클린코드 리액트~
    </div>
  );
};

export default CurlyBraces;
