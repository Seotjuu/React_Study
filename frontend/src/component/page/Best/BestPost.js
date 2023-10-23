import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { Button } from "react-bootstrap";
import axios from "axios";
import { Outlet } from 'react-router-dom';
import {up, down} from "../../../reducers/counterSlice"
const BestPost = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value);
  const [asyncCount, setAsyncCount] = useState(0);

  const getId = async () => {
    const res = await axios.get(`http://localhost:4000/post/postList`);

    console.log(res.data);
    setAsyncCount(res.data.id)
  }

  return (
    <>  
      <Button
        onClick={()=>{
          dispatch(up(1));
        }}
      >
        값 증가
      </Button>
      <Button
        onClick={()=>{
          getId();
        }}
      >
        비동기 값 불러오기
      </Button>

      <p>{count || asyncCount}</p>
      <Outlet/>
    </>
  );
};

export default BestPost;
