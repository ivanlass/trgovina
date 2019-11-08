import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//array with numbers for quantity
const numPickers = []


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

// Adding numbers to array 
for (let index = 1; index < 50; index++) {
    numPickers.push(index)

}

//making quantity list 
let numbers = numPickers.map(num => (
    <option key={num} value={num}>{num}</option>
))

export default function NumberPicker(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });


    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };






    return (
        <div>
            <FormControl key={props.id} onChange={props.itemCount} className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Kolicina</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange('age')}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option key={props.id} value="" />
                    {numbers}

                </Select>
            </FormControl>
        </div>
    );
}