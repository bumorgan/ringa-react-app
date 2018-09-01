import { combineReducers } from 'redux';
import setSelectedUser from './selectedUser';

const rootReducer = combineReducers({
  selectedUserState: setSelectedUser,
});

export default rootReducer;