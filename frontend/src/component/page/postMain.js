import React, {useState, useEffect} from "react"

import { Button } from 'react-bootstrap';

const PostMain = () => {
    const [postlen, setPostLen] = useState(0);

    const postHandler = () => {
        setPostLen(
            (prev)=>
            prev += 1
        )
    }


    // 게시물 등록 버튼 클릭시 현재 클릭 갯수 출력
    useEffect(()=>{
        if(postlen){
            console.log(postlen);
        }
    }, [postlen])

    return(
        <div className="border border-black mx-[20%]">
            <p>현재 게시물 수 : {postlen}</p>


            <Button size={"sm"} variant="primary"
                onClick={()=>{  postHandler()}}
            >
                게시물 등록
            </Button>
        </div>
    )
}

export default PostMain;