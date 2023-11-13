import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <div><a href="https://javaguides.net" className="navbar-brand"></a>Student Management App</div>
                    </nav>
                </header>
            </div>
        );
    }
}


export default HeaderComponent;