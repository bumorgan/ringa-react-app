import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './UserDialog.css';

import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Address from '@material-ui/icons/LocationCity';

class UserDialog extends Component {
    render() {
        const { open, handleClose, selectedUser } = this.props;
        return(
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    {selectedUser ?
                        <div className="container-dialog">
                            <img alt='userPhoto' className="radius-dialog" src={selectedUser.photo}/>
                            <b className="selected-user-name">{selectedUser.name.toUpperCase()}</b>
                            <div className="container-infos">
                                <Email /><div>{selectedUser.email}</div>
                                <Phone /><div>{selectedUser.phone}</div>
                                <Address /><div>{selectedUser.address.toUpperCase()}</div>
                            </div>
                        </div>
                    :
                        null}
                </DialogContent>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedUser: state.selectedUserState.selectedUser,
});

const mapDispatchToProps = dispatch => ({
    setSelectedUser: (type, user) => dispatch({ type: type, selectedUser: user }),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDialog);