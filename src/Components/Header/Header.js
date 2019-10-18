import React, {Component} from 'react'

import {Redirect} from 'react-router-dom'



class Header extends Component {
    constructor(){
        super();

        this.state = {
            redirect: false
        }
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/inputs'/>
        }
    }

    render(){
        return(
            <div>
                Header
            </div>
        )
    }
}

export default Header;