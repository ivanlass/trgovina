import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import BasketList from '../BasketList/BasketList'
import DateTime from "../DateTime/DateTime"

const useStyles = makeStyles({
  list: {
    width: 350,
    background: "#f5f5f5",
    height: "100%"
  },
  fullList: {
    width: 'auto',
    background: "#f5f5f5"
  },
});

export default function Basket(props) {
  const classes = useStyles();



  const sideList = side => (
    <div 
      className={classes.list}
      role="presentation"
      onKeyDown={props.toggleBasketHandler}
    >
      <BasketList deleteItem={props.deleteItem} addItem={props.addItem} orders={props.orders} />
      <p>ukupno {props.total}</p>
      <div >
      <DateTime findDate={props.findDate}/>

      </div>
    </div>
  );



  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={props.isOpen}
        onClose={props.toggleBasketHandler}
        onOpen={props.toggleBasketHandler}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}