import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import SelectThick from '../../Components/SelectThick/SelectThick'

function NewRest(props) {
    return (
        <div>
            <TextField label="Duzina" />
            <TextField label="Sirina" />
            <TextField label="Sirina" />
            <SelectThick kurac={props.kurac}
                chooseHandler={props.chooseHandler} />
        </div>
    )
}


export default NewRest;