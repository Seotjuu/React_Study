import React, { useState, useEffect, useReducer } from "react";

import { Button } from "react-bootstrap";

function reducer(state, action) {
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
  const initState = {count: 0};
  const [state, dispatch] = useReducer(reducer, initState);
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
