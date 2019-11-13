import React, { Fragment, useState } from "react";
import DateTime from "../DateTime/DateTime"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

function Purchase(props) {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    
  return(
    <form onSubmit={props.submitPurchase} data-date={selectedDate}>
        <p>ukupno {props.total}</p>
        <DateTime selectedDate={selectedDate} handleDateChange={handleDateChange} findValue = {props.findDate}/>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Kupi
      </Button>
      </form>
  )
}

export default Purchase;