import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="/" className='nav1'><p>home</p></Link>
                <br />
                <Link to="/starwars" className='nav2'><p>search</p></Link>
            </div>
        );
    }
}

export default Nav;