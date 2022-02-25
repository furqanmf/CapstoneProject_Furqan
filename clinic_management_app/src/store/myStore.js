import {createStore, combineReducers, applyMiddleware} from 'redux';
import rootSaga from '../sagas/searchPatientSaga';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import searchPatientReducer from '../reducers/searchPatientReducer';
import addPatientReducer from '../reducers/addPatientReducer';
import editPatientReducer from '../reducers/editPatientReducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    reducer1:searchPatientReducer,
    reducer2:addPatientReducer,
    reducer3:editPatientReducer
});
const store = createStore(
    rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))
    
    
    );

export default store;


sagaMiddleware.run(rootSaga);

