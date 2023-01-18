import React, { useState,useEffect } from "react";
import Form from "../Form";
import { useNavigate } from "react-router";
import { NavLink, useParams } from "react-router-dom";

const Update = () => {
  const {id} = useParams();
  const defForm = {
    id: 0,
    content: "",
  }
  const [form, setForm] = useState(defForm)
  const navigate = useNavigate();

  const getPost = (setPost, id) => {
    fetch(`${process.env.REACT_APP_POSTS_URL}/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        setPost(post)
      })
      .catch(() => {})
  }

  const addPost = (e, post) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_POSTS_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(post),
    })
      .then(() => {})
  }

  const handleChange = (evt) => {
    setForm((prevForm) => ({
      ...prevForm,
      [evt.target.name]: evt.target.value,
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addPost(evt, form);
    setForm(defForm);
    navigate("/router/crud/")
  }

  useEffect(() => {
      getPost(setForm, id)
  }, [])

  return <>
    Изменение поста
    <Form form={form} change={handleChange} submit={handleSubmit}/>
    <NavLink to={"/router/crud/posts/"+id}>Назад</NavLink>
  </>
}

export default Update;
