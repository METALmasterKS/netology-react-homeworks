import React, { useEffect, useState } from "react";

import Form from "./Form";
import Note from "./Note";

const Crud = () => {

  const defForm = {
    id: 0,
    content: "",
  }
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(defForm)
  const [notes, setNotes] = useState([])

  const getNotes = (setNotes) => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes`)
      .then(res => res.json())
      .then(notes => {
        setNotes(notes)
        setLoading(false)
      })
  }

  const addNote = (e, note) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(note),
    })
      .then(() => getNotes(setNotes))
  }

  const delNote = id => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes/${id}`, {
      method: 'DELETE',
    })
      .then(res => getNotes(setNotes))
  }


  useEffect(() => {
    getNotes(setNotes)
  }, [])


  const handleChange = (evt) => {
    setForm((prevForm) => ({
      ...prevForm,
      [evt.target.name]: evt.target.value,
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addNote(evt, form);
    setForm(defForm);
  }

  function handleDelete(id, e) {
    e.preventDefault()
    delNote(id)
  }

  const handleRefresh = (e) => {
    e.preventDefault();
    getNotes(setNotes);
  };

  return <>
    <div><b>Notes</b>&nbsp;<span onClick={handleRefresh}>🔄</span></div>
    <div>
      {loading ? "Загрузка..." : notes.map((n, i) => {
        return <Note
          key={n.id}
          id={n.id}
          content={n.content}
          delHandle={handleDelete}
        />
      })}
    </div>
    <Form form={form} change={handleChange} submit={handleSubmit}/>
  </>
}

export default Crud;


