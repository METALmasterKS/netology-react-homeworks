import React, { useState } from "react";

import "./index.css"

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


const Hex2rgb = () => {
  const [form, setForm] = useState({
    value: "#9921ff",
    hex: "#9921ff",
    red: 153,
    green: 33,
    blue: 255,
    error: undefined
  })

  const handleChange = (evt) => {
    setForm((prevForm) => ({
      ...prevForm,
      value: evt.target.value,
    }));

    if (evt.target.value.length < 7) {
      return;
    }
    const rgb = hexToRgb(evt.target.value)
    if (rgb === null) {
      setForm((prevForm) => ({
        ...prevForm,
        error: "Ошибка!",
      }));
      return
    }
    setForm((prevForm) => ({
      ...prevForm,
      hex: evt.target.value,
      red: rgb.r,
      green: rgb.g,
      blue: rgb.b,
      error: undefined,
    }));


  }

  return (<div className="hex2rgb" style={{backgroundColor: form.error ? "red" : form.hex}}>
      <form>
        <div>
          <input type="text" name="hex" value={form.value} onChange={handleChange}/>
        </div>
        <div>
          <span>{form.error ? form.error : "rgb(" + form.red + "," + form.green + "," + form.blue + ")"}</span>
        </div>
      </form>
    </div>
  )
}

export default Hex2rgb;
