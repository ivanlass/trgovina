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


    return (
        <div>
            <FormControl key={props.id} onChange={props.itemCount} className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Kolicina</InputLabel>
                <Select native >
                    <option key={props.id} disabled/>
                    {numbers}

                </Select>
            </FormControl>
        </div>
    );
}