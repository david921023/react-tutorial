/**
 * Created by david921023 on 2017. 5. 18..
 */
import moment from 'moment-timezone';


var FORMAT = 'YYYY/MM/DD HH:mm:ss';
var ZONE = "Asia/Seoul";

const initState = {
    iClockTimerId : null,
    sZone : ZONE,
    sCurrentTime : moment().tz(ZONE).format(FORMAT),
};

const clockReducer = function(state = initState, action) {

    console.log(state);

    switch(action.type) {
        case 'CHANGE_CLOCK' :
            return Object.assign({}, state, {
                iClockTimerId : action.payload.id,
                sZone : action.payload.zone,
            });
        case 'UPDATE_CLOCK' :
            return Object.assign({}, state, {
                sCurrentTime : action.payload,
            });
        default :
            break;
    }

    return state;
};

export default clockReducer;