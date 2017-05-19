/**
 * Created by david921023 on 2017. 5. 18..
 */

export const playStopWatch = function(time) {
    return {
        type: "PLAY_STOPWATCH",
        payload: time,
    };
};

export const stepStopWatch = function(time) {
    return {
        type: "STEP_STOPWATCH",
        payload: time,
    };
};

export const pauseStopWatch = function(time) {
    return {
        type: "PAUSE_STOPWATCH",
        payload: time
    };
};

export const resetStopWatch = function(time) {
    return {
        type: "RESET_STOPWATCH",
        payload: time
    };
};

export const setTimerId = function(id) {
    return {
        type: "SET_TIMER_ID",
        payload: id
    }
}