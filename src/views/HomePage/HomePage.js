import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';
import UserDialog from '../../components/UserDialog/UserDialog';
import CircularProgress from '@material-ui/core/CircularProgress';

import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            users: [],
            open: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillMount() {
        this.getUsersFromApiAsync();
    }
    getUsersFromApiAsync() {
        fetch('https://private-3c5d2-fronttest.apiary-mock.com/users')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ users: responseJson.data });
        })
        .catch((error) => {
            console.error(error);
        });
    }
    handleChange = id => event => {
        this.setState({
            [id]: event.target.value,
        });
    };
    handleClick(user) {
        const { setSelectedUser } = this.props;
        setSelectedUser('SET_USER', user);
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { search, users, open } = this.state;
        return (
            <div className="container">
                <div className="grid-content">
                    {users.map((user) => {
                        return (
                            search === '' || user.name.indexOf(search) !== -1 ?
                            <UserCard
                                key={user.id}
                                onClick={() => this.handleClick(user)}
                                photo={user.photo} 
                                name={user.name}
                                email={user.email}
                            />
                            :
                            null
                        )
                    })}
                </div>
                <UserDialog 
                    open={open}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedUser: state.selectedUserState.selectedUser,
});

const mapDispatchToProps = dispatch => ({
    setSelectedUser: (type, user) => dispatch({ type: type, selectedUser: user }),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);