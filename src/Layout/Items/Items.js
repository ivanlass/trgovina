import React, { Component } from 'react'
import Card from '../../Components/Card/Card'

const Items = (props) => {
    return (
        <Card items={props.items} addItem={props.addItem} itemCount={props.itemCount} />
    )
}

export default Items;