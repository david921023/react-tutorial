/**
 * Created by david921023 on 2017. 5. 18..
 */


function calculateWatch(aStopTime) {

    var newArray = aStopTime.slice();

    newArray[2] ++;

    if (newArray[2] >= 100) {
        newArray[1] += 1;
        newArray[2] -= 100;
    }

    if (newArray[1] >= 60) {
        newArray[0] += 1;
        newArray[1] -= 60;
    }

    return newArray;
}

const initState = {
    aStopTime : [0, 0, 0],
    bIsPlaying : false,
    sCurrentTime : new Date().toString(),
    iTimerId : null,
}

const stopWatchReducer = (state = initState, action) =>{

    console.log(action.type);


    switch(action.type) {

        case 'PLAY_STOPWATCH' :
            return Object.assign({}, state, {bIsPlaying : true});
        case 'STEP_STOPWATCH' :
            return Object.assign({}, state, {aStopTime : calculateWatch(state.aStopTime)});
        case 'PAUSE_STOPWATCH' :
            return Object.assign({}, state, {bIsPlaying : false});
        case 'RESET_STOPWATCH' :
            return Object.assign({}, state, {
                bIsPlaying : false,
                aStopTime : [0, 0, 0],
            });
        case 'SET_TIMER_ID' :
            return Object.assign({}, state, {iTimerId : action.payload});
        default :
            break;
    }

    console.log(state);

    return state;
}

export default stopWatchReducer;