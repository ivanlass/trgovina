import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NumberPicker from '../NumberPicker/NumberPicker'



const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        display: "inline-block"
    },
    media: {
        height: 140,
    },
});


export default function MediaCard(props) {
    const classes = useStyles();
    const [count, setCounter] = useState(0);


    const items = props.items.map(item => {
        if (item.id < 5) {
            return (
                <form id={item.id} onSubmit={props.addItem}>
                    < Card key={item.id} className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.body}
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.id} Eura
                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <NumberPicker itemCount={props.itemCount} />
                            <Button size="small" color="primary">
                                Discard
                </Button>
                            <Button
                                type="submit"
                                size="large"
                                color="primary">
                                Add
                </Button>
                        </CardActions>
                    </Card >
                </form>
            )
        }
    })


    return (
        <div>{items}</div>

    )
}