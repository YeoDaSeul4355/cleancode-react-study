/* 
🖐️ 구조화된 상태를 원한다면 useReducer()

📖 useReducer()
- 여러 상태가 연관됐을 때 useState 대신 useReducer를 사용하면 상태를 구조화할 수 있음
- reducer는 js문법이기 때문에 hook이나 React에 의존적인 코드가 아님
*/
import React, { useReducer } from "react";

// 초기상태
const INIT_STATE = {
  isLoading: false,
  isSuccess: false,
  isFail: false,
};

// 조작할 수 있는 reducer
const reducer = (state, action) => {
  // switch문이나 if문 사용
  switch (action.type) {
    case "FETCH_LOADING":
      // 스프레드 연산자를 쓰거나 하나하나의 상태를 직접 지정해준다.
      return { ...state, isLoading: true };
    case "FETCH_SUCCESS":
      return { isSuccess: true, isLoading: false, isFail: false };
    case "FETCH_FAIL":
      return { ...state, isFail: true };

    // default값 무시하지말고 꼭 정해주기
    default:
      return INIT_STATE;
  }
};
const UseReducer = () => {
  const url = "https://cleancode-react.com/example";

  // ❌
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

  // ⭕(useReducer()사용)
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const fetchData = () => {
    // fetchData 시도
    dispatch({ type: "FETCH_LOADING" });

    fetch(url)
      .then(() => {
        // fetchData 성공
        dispatch({ type: "FETCH_SUCCESS" });
      })
      .catch(() => {
        // fetchData 실패
        dispatch({ type: "FETCH_FAIL" });
      });
  };

  if (state.isLoading) return <p>로딩중</p>;
  if (state.isFail) return <p>에러!</p>;
  if (state.isSuccess) return <p>성공</p>;

  return (
    <div>
      <button onClick={() => fetchData()}>버튼</button>
    </div>
  );
};

export default UseReducer;
