/* 
🖐️ 불필요한 상태

📖 불필요한 상태를 만든다면?
- 결국에는 리액트에 의해 관리되는 값이 늘어남. 그러다보면 렌더링에 영향을 주는 값이 늘어나 관리포인트가 늘어남.
- props를 useState에 넣지 않고 바로 return문에 사용하기
- 컴포넌트 내부 변수는 렌더링마다 고유한 값을 가짐
*/

import React from "react";

const MOCK_DATA = [
  {
    id: 1,
    title: "개발 공부",
    completed: false,
  },
  {
    id: 2,
    title: "토이 프로젝트",
    completed: true,
  },
  {
    id: 3,
    title: "알고리즘 공부",
    completed: true,
  },
];

const UnnecessaryState = () => {
  // ❌
  // const [userList, setUserList] = useState(MOCK_DATA);
  //   const [complUseList, setComplUseList] = useState(MOCK_DATA);

  //   useEffect(() => {
  //     const newList = complUserList.filter((user) => user.completed === true);
  //     setUserList(newList);
  //   }, [userList]);

  // ⭕
  const userList = MOCK_DATA;
  const complUserList = userList.filter((user) => user.completed === true);

  return (
    <div>
      <ul>
        {complUserList.map((user) => (
          <li>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnnecessaryState;
