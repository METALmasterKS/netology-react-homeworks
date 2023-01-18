import React  from "react";

const Form = ({form, submit, change}) => {
  return <form onSubmit={submit}>
    <label>
      <textarea name="content" value={form.content} onChange={change}/>
    </label>
    <input style={{marginLeft: "10px"}} type="submit" value="Сохранить"/>
  </form>
}

export default Form;
