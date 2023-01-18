import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import moment from "moment";

const Post = ({post}) => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true)
  const [p, setP] = useState(post)
  const navigate = useNavigate();


  const getPost = (setPost, id) => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_POSTS_URL}/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        setPost(post)
        setLoading(false)
      })
      .catch(() => {})
  }

  useEffect(() => {
    if (!post) {
      getPost(setP, id)
    } else {
      setLoading(false)
    }
  }, [post])

  const delPost = (id) => {
    fetch(`${process.env.REACT_APP_POSTS_URL}/posts/${id}`, {
      method: 'DELETE',
    })
    // .then(res => {})
  }

  function handleDelete(id, e) {
    e.preventDefault()
    delPost(id)
    navigate("/router/crud/")
  }


  return <div style={{display: "inline-block", margin: "10px", position: "relative"}}>
    {
      loading ? "Загрузка..." : <>
        <div>#{p.id}</div>
        <div>{p.content}</div>
        <div>Дата: {moment(p.created).format()}</div>
        {id && <NavLink to={"/router/crud"}>Назад</NavLink>}
        {id ?
          <NavLink to={"upd"}>Изменение</NavLink> :
          <NavLink to={"posts/" + p.id}>Просмотр</NavLink>
        }

        {id && <span style={{position: "absolute", right: "-5px", top: "-5px"}}
                     onClick={(e) => handleDelete(p.id, e)}>❌</span>}
      </>
    }
  </div>
}

export default Post;
