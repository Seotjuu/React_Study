import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap'

// Reducer 사용할 페이지에서 그에 맞는 reducer Import
import {init, up, down, edit, asyncUpFetch} from '../../reducers/counterSlice'
import {useDispatch, useSelector} from 'react-redux'

const PostRegister = () => {
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter.value)
  const status = useSelector((state)=> state.counter.status)
  return (
    <>
      <p>React-Redux-toolkit.</p>
      <Button
        variant="secondary"
        onClick={()=>{
          // action creator 자동 생성
          dispatch(init());
        }}
      >
      {"초기화"}
      </Button>

      <Button
        onClick={()=>{
          // action creator 자동 생성
          dispatch(up(1));
        }}
      >
      {"증가"}
      </Button>

      <Button
        onClick={()=>{
          // action creator 자동 생성
          dispatch(down(1));
        }}
      >
      {"감소"}
      </Button>
      <p>변경할 값을 입력하세요.</p>

      <Form.Control 
        type={"number"}
        value={count}
        onChange={(e)=>{
          dispatch(edit(e.target.value))
        }}
      />

      <Button
        variant="success"
        onClick={()=>{
          dispatch(asyncUpFetch());
        }}
      >
       {"값 불러오기"}
      </Button>
      <p>{status}</p>
      <p>{`값 : ${count || 0}`}</p>
      
    </>
  );
};

export default PostRegister;
