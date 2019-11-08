import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import BasketList from '../BasketList/BasketList'


const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
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
      <BasketList orders={props.orders} />
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