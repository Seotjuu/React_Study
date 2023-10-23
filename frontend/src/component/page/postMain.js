import React, { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import PostList from "./PostList";
const PostMain = () => {
  const navigate = useNavigate();

  const [postlen, setPostLen] = useState(0);

  // 게시물 등록 버튼 클릭시 postLen + 1
  const postHandler = () => {
    setPostLen((prev) => (prev += 1));
  };

  // postLen의 값이 변했을 때 postLen 출력
  useEffect(() => {
    if (postlen) {
      console.log(postlen);
    }
  }, [postlen]);

  return (
    <div className="border border-black">
      <p>현재 수 : {postlen}</p>

      <Button
        size={"sm"}
        variant="primary"
        onClick={postHandler}
      >
        증가
      </Button>
      &emsp;
      <Button
        size={"sm"}
        variant="secondary"
        onClick={()=> {
          setPostLen((prev) => (--prev));
        }}
      >
        감소
      </Button>

      <PostList postlen={postlen} >
        postMain입니다 ㅋㅋ
      </PostList>

      <Button
        onClick={()=>{
          navigate('/PostList')
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default PostMain;
