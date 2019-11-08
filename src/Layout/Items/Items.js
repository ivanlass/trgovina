import React from 'react'
import Card from '../../Components/Card/Card'

const Items = (props) => {
    return (
        <Card items={props.items} addItem={props.addItem} />
    )
}

export default Items;