import React from 'react';
import classes from './MenueToggle.module.css'

const MenueToggle = props => {
    const cls = [
        classes.MenueToggle,
        'fa',
    ]

    if (props.isOpen){
        cls.push('fa-times')
        cls.push(classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        < i
        className={ cls.join(' ')}
        onClick={props.onToggle}
        />
    )
}

export default MenueToggle;