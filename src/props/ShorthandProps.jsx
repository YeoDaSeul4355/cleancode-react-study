/* 
🖐️ shorthand props

📖 shorthandprops
- props를 축약할 수 있다.
- 펼침연산자를 통해 props를 불러올 수 있다.
- 펼침연산자로 값을 넘겨받으면 굳이 true로 명시할 필요 없이 props 명만 써도 된다.
- 하지만 무조건 좋은 건 아니므로 때에 따라 잘 쓰도록 하자.
*/
import React from "react";
import ChildComponent from "./ChildComponent";

const ShorthandProps = ({ isDarkMode, isLogin, ...props }) => {
  return (
    <>
      <header
        name="clean-header"
        title="Clean Code React"
        isDarkMode={true}
        isLogin={true}
        isAdmin
      >
        {/* ❌ */}
        {/* <ChildCoponent name={props.name} title={props.title} /> */}

        {/* ⭕ */}
        <ChildComponent {...props} />
      </header>
    </>
  );
};

export default ShorthandProps;
