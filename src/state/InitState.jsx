/*

🖐️ 올바른 초기값 설정

📖 초기값이란? 
- 가장 먼저 렌더링될 때 순간적으로 보여질 수 있는 값이기도 함
- 당연히 초기에 렌더링 되는 값

📖 초기값을 제대로 설정하지 않을 경우
- 렌더링 이슈, 무한 루프, 타입 불일치로 의도치 않는 동작 => 런타임 에러🚨
- 넣지 않으면 undefined🚨
- 상태를 CRUD => 상태를 지울 때도 초기값을 잘 기억해놔야 원상태로 돌아감
- 빈값, null 처리를 할 때 불필요한 방어코드도 줄여줌
*/

import React, { useEffect, useState } from "react";

const InitState = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("exampleUrl");
      const result = await response.json();
      setList(result);
    };

    fetchData();
  }, []);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가 버튼</button>
      {list.map((i) => (
        <div>{i}</div>
      ))}
    </>
  );
};

export default InitState;
