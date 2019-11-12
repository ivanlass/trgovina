import React, { Fragment, useState } from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


function BasicDateTimePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider onClick={props.findDate} date={selectedDate} utils={DateFnsUtils}>
        <DateTimePicker
          value={selectedDate}
          disablePast
          onChange={handleDateChange}
          label="Kada zelite preuzeti"
          showTodayButton
      />
  </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;