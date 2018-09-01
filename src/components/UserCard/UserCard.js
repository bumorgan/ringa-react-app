import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: props.photo,
            name: props.name,
            email: props.email,
        }
    }
    render() {
        const { photo, name, email } = this.state;
        return (
            <div onClick={this.props.onClick} className="card">
                <img alt='userPhoto' className="radius" src={photo}/>
                <b>{name.toUpperCase()}</b>
                <a className="email">{email}</a>
            </div>
        );
    }
}

export default UserCard;