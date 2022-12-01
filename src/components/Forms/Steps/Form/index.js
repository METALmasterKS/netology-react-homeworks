import React  from "react";

const Form = ({form, submit, change}) => {
  return <form onSubmit={submit}>
    <label style={{display: "inline-block", margin: "0 10px 10px 0"}}>
      Дата (ДД.ММ.ГГГГ) <br/>
      <input type="date" name="date" value={form.date} onChange={change} required="true"/>
    </label>
    <label style={{display: "inline-block"}}>
      Пройдено км <br/>
      <input type="number" pattern="dd.mm.yyyy" name="distance" value={form.distance} onChange={change}/>
    </label>
    <input style={{marginLeft: "10px"}} type="submit" value="Ok"/>
  </form>
}

export default Form;
