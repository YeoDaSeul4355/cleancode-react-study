/* 
🖐️ 연관된 상태 객체로 묶기

📖 연관된 상태 객체로 묶기
- 리액트의 상태를 만들 때 객체로 연관된 것들끼리 묶어서 처리할 수 있음
*/
import React, { useState } from "react";

const ObjectState = () => {
  const url = "https://cleancode-react.com/example";

  // ❌ (나머지 상태들끼리 연관되어있음)
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isFinish, setIsFinish] = useState(false);
  //   const [isError, setIsError] = useState(false);

  //   const fetchData = () => {
  //     // fetchData 시도
  //     setIsLoading(true);

  //     fetch(url)
  //       .then(() => {
  //         // fetchData 성공
  //         setIsLoading(false);
  //         setIsFinish(true);
  //       })
  //       .catch(() => {
  //         // fetchData 실패
  //         setIsError(true);
  //       });
  //   };

  //   if (isLoading) return <p>로딩중</p>;
  //   if (isError) return <p>에러!</p>;
  //   if (isFinish) return <p>성공</p>;

  // ⭕ (스프레드 연산자로 이전의 상태를 참조)
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isFinish: false,
    isError: false,
  });

  const fetchData = () => {
    // fetchData 시도
    setFetchState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    fetch(url)
      .then(() => {
        // fetchData 성공
        setFetchState((prevState) => ({
          ...prevState,
          isFinish: true,
        }));
      })
      .catch(() => {
        // fetchData 실패
        setFetchState((prevState) => ({
          ...prevState,
          isError: true,
        }));
      });
  };

  if (fetchState.isLoading) return <p>로딩중</p>;
  if (fetchState.isError) return <p>에러!</p>;
  if (fetchState.isFinish) return <p>성공</p>;

  return (
    <div>
      <button onClick={() => fetchData()}>버튼</button>
    </div>
  );
};

export default ObjectState;
