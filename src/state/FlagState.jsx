/*
🖐️ 플래그 상태

📖 플래그 값
- 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 불리언으로 나타내는 값
- useState 대신 플래그로 상태를 정의할 수 있음(표현식으로 나타냄)
*/

import React from "react";

const [hasToken, hasCookie, isValidCookie, isNewUser, isValidToken] = true;

const FlagState = () => {
  // ❌
  //   const [isLogin, setIsLogin] = useState(false);
  //   useEffect(() => {
  //     if (hasToken) {
  //       setIsLogin(true);
  //     }
  //     if (hasCookie) {
  //       setIsLogin(true);
  //     }
  //     if (isValidCookie) {
  //       setIsLogin(true);
  //     }
  //     if (isNewUser) {
  //       setIsLogin(true);
  //     }
  //     if (isValidToken) {
  //       setIsLogin(true);
  //     }
  //   }, [hasToken, hasCookie, isValidCookie, isNewUser, isValidToken]);

  // ⭕
  const isLogin =
    hasToken &&
    hasCookie &&
    isValidCookie &&
    isNewUser === false &&
    isValidToken;
  return <div>{isLogin && "안녕하세요! 반갑습니다."}</div>;
};

export default FlagState;
