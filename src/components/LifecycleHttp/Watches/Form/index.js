import React  from "react";

const Form = ({form, submit, change}) => {
  return <form onSubmit={submit}>
    <label style={{display: "inline-block", margin: "0 10px 10px 0"}}>
      Название <br/>
      <input type="text" name="name" value={form.name} onChange={change} required="true"/>
    </label>
    <label style={{display: "inline-block"}}>
      Временная зона <br/>
      <input type="number" name="loc" value={form.loc} min="-12" max="12" onChange={change} required="true"/>
    </label>
    <input style={{marginLeft: "10px"}} type="submit" value="Добавить"/>
  </form>
}

export default Form;
