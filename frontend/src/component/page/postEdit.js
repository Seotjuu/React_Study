import React, { useState, useEffect, useReducer } from "react";

import { Button } from "react-bootstrap";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    default:
      throw new Error("unsupported action type: ", action.type);
  }
}

const PostEdit = () => {
  // state = 컴포넌트에서 사용할 상태

  // dispatch = 첫번째 인자인 reducer 함수 실행
  //            컴포넌트 내에서 state의 업데이트를 일으키기 위한 함수

  // reducer = 컴포넌트 외부에서 state를 업데이트 하는 함수
  //           현재 state, action 객체를 인자로 받아 기존의 state를 대체하여 새로운 state를 반환하는 함수

  // initState = 초기 state
  
  // init = 초기 함수
  const initState = {count: 0};
  const [state, dispatch] = useReducer(reducer, initState);
  
  console.log(state);
  return (
    <>
      {state.count}
      <Button 
        variant={"primary"}
        onClick={()=>{
          dispatch({
            type: "INCREMENT",
            payload: 1
          })
        }}
      >
        증가
      </Button>

      <Button
        variant={"secondary"}
        onClick={()=>{
          dispatch({
            type: "DECREMENT",
            payload: 1
          })
        }}
      >
        감소
      </Button>
    </>
  );
};

export default PostEdit;
