import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// react redux toolkit
// Provider : app.js에 store를 연결할 수 있게 해줌
import { Provider } from 'react-redux'
// slice 집합 저장소
import store from './store'

import "./App.css";

// React BootStrap CSS 적용
import "bootstrap/dist/css/bootstrap.min.css";

// 컴포넌트 파일 경로 설정
import PostMain from "./component/page/PostMain";
import PostList from "./component/page/PostList";
import PostRegister from "./component/page/PostRegister";
import PostEdit from "./component/page/PostEdit";
import BestPost from "./component/page/Best/BestPost";
import BestComment from "./component/page/Best/BestComment"
import NotFound404 from "./component/error/NotFound404";
import HomePage from "./component/page/HomePage";

const App = () => {
  return (
    <Provider store={store}>
      <div className="mx-[20%] mt-[1%] p-[10px]">
        <BrowserRouter>
          <Routes>

            {/* SideBar로 페이지 이동이 안되게 하기 */}
            <Route path="/" element={<PostMain />}></Route>
            <Route path="/BestComment" element={<BestComment/>}> </Route>
            
            {/* SideBar 보여주기 */}
            <Route element={<HomePage />}>  
              <Route path="/PostList" element={<PostList />}></Route>
              <Route path="/PostRegister" element={<PostRegister />}></Route>
              <Route path="/PostEdit" element={<PostEdit />}></Route>
              <Route path="/BestPost" element={<BestPost />}></Route>
            </Route>
            
            <Route path="*" element={<NotFound404 />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
