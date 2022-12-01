import React  from "react";
import moment from "moment";

const Table = ({data, delHandle, editHandle}) => {
  const fmt = "DD.MM.YYYY"
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
        <td>{moment(date).format(fmt)}</td>
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

export default Table;
