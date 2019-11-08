import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NumberPicker from '../NumberPicker/NumberPicker'








class MediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    
    itemCount = (e) => {
        const newCount = e.target.value
        this.setState({count:newCount})
    }
    
    render() {
        const items = this.props.items.map(item => {
            if (item.id < 20) {
                return (
                    <form style={{display: "inline-block"}} key={item.id} id={item.id} onSubmit={this.props.addItem} data-count={this.state.count}>
                        < Card key={item.id} style={{height:400, width: 300, display: "inline-block" , margin:"20px"}}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: 140}}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    {item.title.slice(0, 20)}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    {item.body.slice(0, 30)}
                                    </Typography>
                                    
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    {item.id} Eura
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <NumberPicker itemCount={this.itemCount } id={item.id }/>
                                    <Button
                                    type="submit"
                                    size="large"
                                    color="primary"
                                    style={{margin: "50px auto"}}>
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
        }
        
        export default MediaCard