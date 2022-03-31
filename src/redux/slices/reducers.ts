import { combineReducers } from 'redux';
import appReducer from './app/app';

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;
