import React, { useState } from "react";
import moment from "moment";

const Form = ({form, submit, change}) => {
  return <form onSubmit={submit}>
    <label style={{display: "inline-block", margin: "0 10px 10px 0"}}>
      Дата (ДД.ММ.ГГГГ) <br/>
      <input type="text" name="date" value={form.date} onChange={change}/>
    </label>
    <label style={{display: "inline-block"}}>
      Пройдено км <br/>
      <input type="text" name="distance" value={form.distance} onChange={change}/>
    </label>
    <input style={{marginLeft: "10px"}} type="submit" value="Ok"/>
  </form>
}

const Table = ({data, delHandle, editHandle}) => {
  return <table border="1" cellPadding={10} cellSpacing={0}>
    <thead>
    <tr>
      <td>Дата (ДД.ММ.ГГГГ)</td>
      <td>Пройдено км</td>
      <td>Действия</td>
    </tr>
    </thead>
    <tbody>
    {Object.keys(data).map((date) => {
      return <tr key={date}>
        <td>{date}</td>
        <td>{data[date]}</td>
        <td>
          <button onClick={() => editHandle(date)}>&#128395;</button>
          <button onClick={(e) => delHandle(date,e)}>❌</button>
        </td>
      </tr>
    })}
    </tbody>
  </table>
}


const Steps = () => {
  const defForm = {
    date: "",
    distance: 0,
    mode: "add",
  }
  const fmt = "DD.MM.YYYY"
  const [form, setForm] = useState(defForm)
  const [data, setData] = useState({
    "20.07.2019": 5.7,
    "19.07.2019": 14.2,
    "18.07.2019": 3.4,
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
        if (moment(a, fmt).isBefore(moment(b, fmt), "day")) {
          return 1
        }
        if (moment(a, fmt).isAfter(moment(b, fmt), "day")) {
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
      return prevData;
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
