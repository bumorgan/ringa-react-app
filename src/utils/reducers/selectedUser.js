const initialState = {
    selectedUser: null,
};

function setSelectedUser(state = initialState, action) {
    switch (action.type){
        case 'SET_USER':
            return {
                selectedUser: action.selectedUser
            }
        default:
            return state
    }
}

export default setSelectedUser;