import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Drawer.module.css';

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose();
    }

     renderLinks(links){
         return links.map ((link, index) => {
             return (
                 <li key={index}>
                     <NavLink
                     to={link.to}
                     exact={link.exact}
                     activeClassName={classes.active}
                     onClick={this.clickHandler}
                     >
                        {link.label}
                     </NavLink>
                 </li>
             )
         })
     }

    render(){
        const cls = [classes.Drawer]

        const links = [
            {to: '/', label: 'List', exact: true},
        ]

        if (this.props.isAuthenticated){
            links.push({to: '/quiz-creator', label: 'Create Quiz', exact: false});
            links.push({to: '/logout', label: 'LogOut', exact: false})
        } else {
            links.push({to: '/auth', label: 'Authorization', exact: false})
        }

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
            
        )
    }
}

export default Drawer;