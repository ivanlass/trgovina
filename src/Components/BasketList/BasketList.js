import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import NumberPicker from '../NumberPicker/NumberPicker'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(1, 0, 1),
    },
}));

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function BasketList(props) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const list = props.orders.map(listItem => (
        <ListItem>
            <ListItemText
                primary={listItem.title.slice(0, 10)}
            />
            <ListItemText
                primary={listItem.id}
            />
            <ListItemText
                primary={listItem.count}
            />
            <ListItemText
                primary={listItem.count * listItem.id}
            />
            <NumberPicker />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    ))

    return (
        <div className={classes.root}>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={event => setDense(event.target.checked)}
                            value="dense"
                        />
                    }
                    label="Enable dense"
                />
            </FormGroup>

            <Grid item xs={12} md={12}>
                <Typography variant="h6" className={classes.title}>
                    Avatar with text and icon
          </Typography>
                <div className={classes.demo}>
                    <List dense={dense}>
                        {list}



                    </List>
                </div>
            </Grid>

        </div >
    );
}