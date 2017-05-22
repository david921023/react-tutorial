/**
 * Created by david921023 on 2017. 5. 18..
 */
import {combineReducers} from 'redux';
import stopWatchReducer from './stopwatch-reducer';
import clockReducer from './clock-reducer';

const integratedReducer = combineReducers({
    stopWatch : stopWatchReducer,
    clock : clockReducer,
});

export default integratedReducer;