/* 
🖐️ 이전 상태 활욯하기

📖 이전 상태
- updater function을 사용해 prev state를 고려하면 예상치 못한 결과를 예방할  수 있음
*/
import React, { useState } from "react";

const PrevState = () => {
  const [age, setAge] = useState(20);

  // ❌ (이전 상태를 참고하는게 아니라 갱신되기 전 상태가 들어갈 수 있음)
  const updateAge = () => {
    setAge(age + 1); // setAge(20 + 1);
    setAge(age + 1); // setAge(20 + 1);
    setAge(age + 1); // setAge(20 + 1);
  };

  // ⭕
  const prevUpdateAge = () => {
    setAge((prevAge) => prevAge + 1); // setAge(20 => 21);
    setAge((prevAge) => prevAge + 1); // setAge(21 => 22);
    setAge((prevAge) => prevAge + 1); // setAge(22 => 23);
  };
  return <div>PrevState</div>;
};

export default PrevState;
