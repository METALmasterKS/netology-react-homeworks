import React from "react";

import { Route, Routes } from "react-router-dom";

import Create from "./Create";
import Posts from "./Posts";
import Post from "./Post";
import Update from "./Update";

const Crud = () => {
  return <>
    <Routes>
      <Route path="/" element={<Posts/>}/>
      <Route path="posts/new" element={<Create/>}/>
      <Route path="posts/:id/upd" element={<Update/>}/>
      <Route path="posts/:id" element={<Post/>}/>
    </Routes>
  </>
}

export default Crud;


