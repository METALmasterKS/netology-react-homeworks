import React, { useEffect, useState } from "react";
import moment from "moment/moment";

import Clocks from "./Clocks";
import Form from "./Form";

const Watches = () => {
  const defForm = {
    name: "",
    loc: "",
  }
  const timeFmt = 'HH:mm:ss'
  const [form, setForm] = useState(defForm)
  const [time, setTime] = useState(moment(new Date()).format(timeFmt))
  const [watches, setWatches] = useState([{
    name: "Moscow",
    loc: 3
  }, {
    name: "London",
    loc: 0,
  }])

  let interval
  useEffect(() => {
    interval = setInterval(() => {
      setTime(moment(new Date()).format(timeFmt))
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  })

  const handleChange = (evt) => {
    setForm((prevForm) => ({
      ...prevForm,
      [evt.target.name]: evt.target.value,
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    watches.push({name: form.name, loc: parseInt(form.loc)})
    setWatches(watches);
    setForm(defForm);
  }

  function handleDelete(key, e) {
    e.preventDefault()
    watches.splice(key, 1);
    setWatches(watches);
  }


  return <center className="steps">
    <Form form={form} change={handleChange} submit={handleSubmit}/>
    <div>
      {watches.map((w, i) => {
        return <Clocks
          key={i}
          id={i}
          name={w.name}
          time={moment(time, timeFmt).utcOffset(w.loc).format(timeFmt)}
          delHandle={handleDelete}
        />
      })}
    </div>
  </center>
}

export default Watches;
