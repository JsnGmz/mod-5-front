import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

class Navbar extends Component {
    state = {
        isOpen: false,
    };

    showNavbar = () => {
        this.setState({
            isOpen: true,
        });
    };

    hideNavbar = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        return (
            <Fragment>

            </Fragment>
        );
    };
}

export default Navbar;
