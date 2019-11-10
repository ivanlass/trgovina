import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import NumberPicker from '../NumberPicker/NumberPicker'





class BasketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    itemCount = (e) => {
        const newCount = e.target.value
        this.setState({ count: newCount })
    }

    render() {
        const list = this.props.orders.map(listItem => (
            <form key={listItem.id} onChange={this.props.addItem} id={listItem.id} data-count={this.state.count}>
                <ListItem key={listItem.id} style={{ display: "block", marginTop: "10px", background: "white" }}>
                    <ListItemText
                        style={{ display: "inline-block" }}
                        primary={`${listItem.title.slice(0, 10)} \u00A0 `}
                    />
                    <ListItemText
                        style={{ display: "inline-block" }}
                        secondary={`${listItem.id} KM `}
                    />
                    <ListItemText
                        style={{ display: "block" }}
                        secondary={`Kolicina: ${listItem.count} `}
                    />
                    <ListItemText
                        style={{ display: "block" }}
                        secondary={`Ukupno: ${listItem.count * listItem.id} KM`}
                    />
                    <NumberPicker itemCount={this.itemCount} id={listItem.id} />
                    <ListItemSecondaryAction>
                        <IconButton id={listItem.id} onClick={this.props.deleteItem} edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </form >
        ))

        return (
            <div style={{ flexGrow: 1, maxWidth: 752 }} >

                <Grid item xs={12} md={12}>
                    <Typography variant="h6">
                        Narudzba
          </Typography>
                    <div>
                        <List>
                            {list}
                        </List>
                    </div>
                </Grid>

            </div >
        );
    }
}

export default BasketList