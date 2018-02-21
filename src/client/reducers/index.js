import { combineReducers } from 'redux';
import DummyReducer from './dummy_reducer';

const rootReducer = combineReducers({
  dummy: DummyReducer,
});

export default rootReducer;
