/* 
🖐️ 연관된 상태 단순화하기

📖 연관된 상태 단순화하기
- 리액트의 상태를 만들 때 연관된 것들끼리 묶어서 처리하면 에러를 방지하고 코드가 간결해짐
*/
import React, { useState } from "react";

const PROMISE_STATE = {
  INIT: "init",
  LOADING: "loading",
  FINISH: "finish",
  ERROR: "error",
};

const FlatState = () => {
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

  // ⭕ (단 하나의 상태로 불변 상태 변경)
  const [promiseState, setPromiseState] = useState(PROMISE_STATE.INIT);

  const fetchData = () => {
    // fetchData 시도
    setPromiseState(PROMISE_STATE.LOADING);

    fetch(url)
      .then(() => {
        // fetchData 성공
        setPromiseState(PROMISE_STATE.FINISH);
      })
      .catch(() => {
        // fetchData 실패
        setPromiseState(PROMISE_STATE.ERROR);
      });

    if (promiseState === PROMISE_STATE.LOADING) return <p>로딩중</p>;
    if (promiseState === PROMISE_STATE.FINISH) return <p>에러!</p>;
    if (promiseState === PROMISE_STATE.ERROR) return <p>성공</p>;
  };
  return (
    <div>
      <button onClick={() => fetchData()}>버튼</button>
    </div>
  );
};

export default FlatState;
