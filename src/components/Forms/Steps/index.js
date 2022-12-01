import React, { useState } from "react";
import moment from "moment";

import Form from "./Form";
import Table from "./Table";

const Steps = () => {
  const defForm = {
    date: "",
    distance: 0,
    mode: "add",
  }

  const [form, setForm] = useState(defForm)
  const [data, setData] = useState({
    "2019-07-20": 5.7,
    "2019-07-19": 14.2,
    "2019-07-18": 3.4,
  })

  const handleChange = (evt) => {
    setForm((prevForm) => ({
      ...prevForm,
      [evt.target.name]: evt.target.value,
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    let prevData = data
    if (form.mode === "edit") {
      prevData[form.date] = parseFloat(form.distance);
    } else {
      prevData[form.date] = (prevData[form.date] || 0) + parseFloat(form.distance);
    }
    let ordered = Object.keys(prevData)
      .sort((a, b) => {
        if (moment(a).isBefore(moment(b), "day")) {
          return 1
        }
        if (moment(a).isAfter(moment(b), "day")) {
          return -1
        }
        return 0
      })
      .reduce((obj, key) => {
        obj[key] = prevData[key];
        return obj;
      }, {});

    setData(() => (ordered));
    setForm(defForm);
  }

  function handleDelete(date, e) {
    e.preventDefault()
    setData((prevData) => {
      delete prevData[date];
      return {
        ...prevData
      };
    });
  }

  function handleEdit(date) {
    setForm((prevForm) => ({
      ...prevForm,
      date: date,
      distance: data[date],
      mode: 'edit',
    }))
  }

  return <center className="steps">
    <Form form={form} change={handleChange} submit={handleSubmit} />
    <Table data={data} delHandle={handleDelete} editHandle={handleEdit}/>
  </center>
}

export default Steps;
