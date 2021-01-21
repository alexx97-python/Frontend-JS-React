import React from 'react';
import classses from './Header.module.css';


const Header = props => {
    return (
        <div>
            {props.city}
            temperature
            icon
        </div>
    )
}

export default Header;