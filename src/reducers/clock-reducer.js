/**
 * Created by david921023 on 2017. 5. 18..
 */

const initState = {
    iClockTimerId : null,
    sZone : "Asia/Seoul",
    sCurrentTime : "-",
};

const clockReducer = function(state = initState, action) {
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