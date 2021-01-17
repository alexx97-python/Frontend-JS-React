import React, {Component} from 'react'
import MenueToggle from '../../components/Navigation/MenueToggle/MenueToggle';
import classes from './Layout.module.css'

class Layout extends Component {

    state = {
        menue: false
    }

    onToggleMenueHandler = ()=> {
        this.setState({
            menue: !this.state.menue
        })
    }

    render(){
        return (
            <div className={classes.Layout}>

                <MenueToggle 
                onToggle = {this.onToggleMenueHandler}
                isOpen = {this.state.menue}
                />

                <main>
                    {this.props.children}
                </main>

            </div>
        )
    }
}

export default Layout;