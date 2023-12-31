import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import {init, up, down, edit, asyncUpFetch} from '../../reducers/counterSlice'
// backend 연동 axios
import axios from 'axios';

const PostList = (abc) => {

  // // Backend에서 게시물 목록 데이터 요청보내는 코드
  // const PostListHandler = async () => {
  //   await axios.get("http://localhost:4000/post/postList")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e)=>{
  //       console.log(e);
  //     })
  // }

  // 페이지 Load시 backend에 게시물 목록 데이터를 요청하도록
  // useEffect(() => {
  //   PostListHandler();
  // }, [])
  // const [ment, setMent] = useState(`이름이 변경되지 않았습니다.`)

  // useEffect(() => {
  //   name && setMent(`이름이 변경되었습니다.`)
  // }, [name])
  
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter.value)
  const [name, setName] = useState("")

  const changeHandler = (e) => {
    setName(e.target.value)
  }

useEffect(()=>{
  console.log(count);
}, [count])

  return (
    <div className="border border-black">
      {abc.postlen && (abc.postlen )}

      <Button
        onClick={()=>{
          // action creator 자동 생성
          dispatch(up(1));
        }}
      >
      {"증가"}
      </Button>
        {count}
      <div className="w-[200px]">
        이름:
        <Form.Control className="m-[10px] h-10" value={name}
          onChange={changeHandler}/>
      </div>
      {name}
      {abc.children}
    </div>
  );
};

export default PostList;
