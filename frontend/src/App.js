import React from "react"
import './App.css';

// React BootStrap CSS 적용
import 'bootstrap/dist/css/bootstrap.min.css';


// 컴포넌트 파일 경로 설정
import PostMain from "./component/page/postMain";

const App = () => {
  return (
    <div className="App">
      <PostMain />
    </div>
  );
}

export default App;
