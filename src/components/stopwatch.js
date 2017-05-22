/**
 * Created by david921023 on 2017. 5. 18..
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import '../App.css';
import {connect} from 'react-redux';
import {playStopWatch, pauseStopWatch, resetStopWatch, stepStopWatch, setTimerId} from '../actions/stopwatch-action';


function mapStateToProps(state) {

    console.log("MapStateToProps returns entire state nested within the state", state);

    return {
        aStopTime : state.stopWatch.aStopTime,
        iTimerId : state.stopWatch.iTimerId,
        bIsPlaying : state.stopWatch.bIsPlaying,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        playStopWatch : playStopWatch,
        pauseStopWatch : pauseStopWatch,
        resetStopWatch : resetStopWatch,
        stepStopWatch : stepStopWatch,
        setTimerId : setTimerId,
    }, dispatch);
}

class Stopwatch extends Component {

    handlePlay() {
        if (! this.props.bIsPlaying) {
            let timerId = setInterval(() => this.props.stepStopWatch(this.props.aStopTime), 10);
            this.props.setTimerId(timerId);
        }

        this.props.playStopWatch(this.props.aStopTime);
    }

    handlePause() {
        if (this.props.iTimerId) {
            clearInterval(this.props.iTimerId);
            this.props.setTimerId(null);
        }

        this.props.pauseStopWatch(this.props.aStopTime)
    }

    handleReset() {
        if (this.props.iTimerId) {
            clearInterval(this.props.iTimerId);
            this.props.setTimerId(null);
        }

        this.props.resetStopWatch(this.props.aStopTime);
    }

    render() {

        return (
            <div className="Stopwatch">
                <div>
                    {this.props.aStopTime[0]}:{this.props.aStopTime[1]}:{this.props.aStopTime[2]}
                </div>
                <button
                    className="Stopwatch_Button"
                    onClick={() => this.handlePlay()}>
                    PLAY
                </button>
                <button
                    className="Stopwatch_Button"
                    onClick={() => this.handlePause()}>
                    PAUSE
                </button>
                <button
                    className="Stopwatch_Button"
                    onClick={() => this.handleReset()}>
                    RESET
                </button>
            </div>
        );
    }
}


export default connect(mapStateToProps, matchDispatchToProps)(Stopwatch);