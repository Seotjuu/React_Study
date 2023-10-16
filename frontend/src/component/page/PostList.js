import React, { useState, useEffect } from "react";

import { Form } from "react-bootstrap";

// backend 연동 axios
import axios from 'axios';

const PostList = () => {

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

  const [name, setName] = useState("")
  const [ment, setMent] = useState(`이름이 변경되지 않았습니다.`)

  useEffect(() => {
    name && setMent(`이름이 변경되었습니다.`)
  }, [name])
 
  return (
    <div className="border border-black">
      <div className="w-[200px]">
        이름:
        <Form.Control className="m-[10px] h-10" value={name}
          onChange={(e)=>{
              setName(e.target.value)
            }}/>
      </div>
      {ment + name}
    </div>
  );
};

export default PostList;
