import { combineReducers } from "redux";

import {
    userProfile,
    updateUserProfile
} from './core/reducers/user'

const appReducer = combineReducers({
    userProfile,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;