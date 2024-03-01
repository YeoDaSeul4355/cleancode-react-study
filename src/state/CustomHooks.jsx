/* 
🖐️ 상태 로직 Custom Hooks로 뽑아내기

📖 Custom Hooks
- Custom Hooks를 사용하면 코드를 확장성 있고 재사용 가능하게 작성할 수 있음
*/
import React, { useEffect, useReducer } from "react";

// 초기상태
const INIT_STATE = {
  isLoading: false,
  isSuccess: false,
  isFail: false,
};

// 액션상태
const ACTION_TYPE = {
  FETCH_LOADING: "FETCH_LOADING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAIL: "FETCH_FAIL",
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

// custom hook를 만들 때 use-접두사를 활용해줌
const useFetchData = (url) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    const fetchData = async () => {
      // fetchData 시도
      dispatch({ type: ACTION_TYPE.FETCH_LOADING });

      await fetch(url)
        .then(() => {
          // fetchData 성공
          dispatch({ type: ACTION_TYPE.FETCH_SUCCESS });
        })
        .catch(() => {
          // fetchData 실패
          dispatch({ type: ACTION_TYPE.FETCH_FAIL });
        });
    };

    fetchData();
  }, [url]);

  return state;
};

const CustomHooks = () => {
  const { isLoading, isFail, isSuccess } = useFetchData("url");
  if (isLoading) return <p>로딩중</p>;
  if (isFail) return <p>에러!</p>;
  if (isSuccess) return <p>성공</p>;
};

export default CustomHooks;
