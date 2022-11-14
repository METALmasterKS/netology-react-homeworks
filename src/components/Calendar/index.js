import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import "./main.css"

const Index = ({date}) => {

  moment.locale('ru')
  const m = moment(new Date(date))
  const prev = moment(new Date(date)).startOf('month').day(1)
  const next = moment(new Date(date)).endOf('month').day(7)

  let i = 0;
  let weeks = []
  let days = []
  for (let a = prev.clone(); a.isBefore(next); a.add(1, 'days')) {
    days.push(a.clone())
    i++
    if (i % 7 === 0) {
      weeks.push(days)
      days = []
    }
  }


  return (<div id="calendar">
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{m.format('D')}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{m.format('D')}</div>
            <div className="ui-datepicker-material-month">{m.format("MMMM")}</div>
            <div className="ui-datepicker-material-year">{m.year()}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{m.format("MMMM")}</span> <span
            className="ui-datepicker-year">{m.format("YYYY")}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
          </thead>
          <tbody>
          {weeks.map((w, i) => {
            return <tr key={'week-' + i}>
              {w.map((e) => {
                return <td key={e.format("DM")}
                           className={(m.format("D") === e.format("D")) ? 'ui-datepicker-today' : '' + (m.format("M") === e.format("M") ? '' : ' ui-datepicker-other-month')}
                >{e.format("D")}</td>
              })}
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Index.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}

export default Index
