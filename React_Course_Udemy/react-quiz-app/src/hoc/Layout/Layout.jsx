import React, {Component} from 'react'
import { connect } from 'react-redux';
import Drawer from '../../components/Navigation/Drawer/Drawer';
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

    menueCloseHandler = () => {
        this.setState({
            menue: false
        })
    }

    render(){
        return (
            <div className={classes.Layout}>
                <Drawer 
                isOpen = {this.state.menue}
                onClose = {this.menueCloseHandler}
                isAuthenticated = {this.props.isAuthenticated}
                />
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

function mapStateToProps (state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout) ;