import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
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

for (let index = 0; index < 100; index++) {
    numPickers.push(index)

}
let numbers = numPickers.map(num => (
    <option value={num}>{num}</option>
))

export default function NumberPicker(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);


    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };






    console.log(numPickers)
    return (
        <div>
            <FormControl onChange={props.itemCount} className={classes.formControl}>
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
                    <option value="" />
                    {numbers}

                </Select>
            </FormControl>
        </div>
    );
}