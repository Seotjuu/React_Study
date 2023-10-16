import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

// React BootStrap CSS 적용
import "bootstrap/dist/css/bootstrap.min.css";

// 컴포넌트 파일 경로 설정
import NavBars from "./component/page/NavBar";
import PostMain from "./component/page/PostMain";
import PostList from "./component/page/PostList";
import PostRegister from "./component/page/PostRegister";
import PostEdit from "./component/page/PostEdit";
import NotFound404 from "./component/error/NotFound404";

const App = () => {
  return (
    <div className="mx-[20%] mt-[1%] p-[10px]">
      <BrowserRouter>
        <NavBars />
        <Routes>
          <Route path="/" element={<PostMain />}></Route>
          <Route path="/PostList" element={<PostList />}></Route>
          <Route path="/PostRegister" element={<PostRegister />}></Route>
          <Route path="/PostEdit" element={<PostEdit />}></Route>
          <Route path="*" element={<NotFound404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
