import React, { Fragment, useState } from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


function BasicDateTimePicker(props) {
  
  return (
    <MuiPickersUtilsProvider date={props.selectedDate} utils={DateFnsUtils}>
        <DateTimePicker
        
          value={props.selectedDate}
          disablePast
          onChange={props.handleDateChange}
          label="Kada zelite preuzeti"
          showTodayButton
      />
  </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;