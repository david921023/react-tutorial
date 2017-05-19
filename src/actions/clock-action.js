/**
 * Created by david921023 on 2017. 5. 19..
 */
import moment from 'moment-timezone';

var FORMAT = 'YYYY/MM/DD HH:mm:ss';

const changeClockInfo = function(zone, id) {
    return {
        type: "CHANGE_CLOCK",
        payload: {zone, id,}
    }
}

const updateClock = function(timeString) {
    return {
        type: "UPDATE_CLOCK",
        payload: timeString,
    }
}

export const changeClock = function(zone, id) {
    return (dispatch) => {
        if (id) {
            clearInterval(id);
        }
        var timerId = setInterval(() => dispatch(updateClock(moment().tz(zone).format(FORMAT))), 1000)
        dispatch(changeClockInfo(zone, timerId));
    };
};