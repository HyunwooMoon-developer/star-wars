import React, { Component } from 'react';

class StarwarsInfo extends Component {
    render() {
        return (
            <div>
                <div className="info">
                    <h3>name : {this.props.name}</h3>
                    <h3>gender : {this.props.gender}</h3>
                    <h3>birth year : {this.props.birth_year}</h3>
                    </div>
                </div>
           
        );
    }
}

export default StarwarsInfo;