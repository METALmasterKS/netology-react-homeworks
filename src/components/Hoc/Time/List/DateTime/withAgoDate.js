
import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default function withAgoDate(Component) {
  return class extends React.Component {
    getAgoString = (date) => {
      if (moment().diff(date, 'day') < 1) {
        return moment(date).fromNow()
      }
      return <>{moment().diff(date, 'day')} дней назад</>;
    }

    render() {
      const friendlyDate = this.getAgoString(this.props.date);
      return <Component {...this.props} date={friendlyDate} />
    }
  }
}
