import React, { useState } from "react";
import Form from "../Form";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Create = () => {

  const defForm = {
    id: 0,
    content: "",
  }
  const [form, setForm] = useState(defForm)
  const navigate = useNavigate();

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

  return <>
    Новый пост
    <Form form={form} change={handleChange} submit={handleSubmit}/>
    <NavLink to={"/router/crud"}>Назад</NavLink>
  </>
}

export default Create;
