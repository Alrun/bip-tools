import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './app/app';
import mnemonicReducer from './mnemonic/mnemonic';

const config = {
    key: 'root',
    version: 1,
    storage
};

const rootReducer = combineReducers({
    app: persistReducer({ ...config, key: 'app' }, appReducer),
    mnemonic: persistReducer(
        {
            ...config,
            key: 'mnemonic',
            whitelist: ['expandedPanel', 'wordCount']
        },
        mnemonicReducer
    )
});

export default rootReducer;
