import React, { useEffect, useState } from "react";

import Post from "../Post";
import { NavLink } from "react-router-dom";

const Posts = () => {

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  const getPosts = (setPosts) => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_POSTS_URL}/posts`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
        setLoading(false)
      })
      .catch(() => {})
  }

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  return <>
    <div><b>Posts</b>&nbsp;<NavLink to="posts/new">Создать пост</NavLink></div>
    <div>
      {loading ? "Загрузка..." : posts.map((p, i) => {
        return <Post
          key={p.id}
          post={p}
        />
      })}
    </div>


  </>
}

export default Posts;


