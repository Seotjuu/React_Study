import React from "react";
import {useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap"

const BestComment = () => {
  const navigate = useNavigate();

  return (
    <>  
      <Button
        onClick={()=>{
          navigate('/')
        }}
      >
        메인으로
      </Button>
    </>
  );
};

export default BestComment;
