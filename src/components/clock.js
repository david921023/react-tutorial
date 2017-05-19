/**
 * Created by david921023 on 2017. 5. 19..
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import '../App.css';
import {connect} from 'react-redux';
import {changeClock} from '../actions/clock-action';

const TIME_ZONE_SEOUL = 'Asia/Seoul';
const TIME_ZONE_PHL = 'America/New_York';

function mapStateToProps(state) {

    console.log("MapStateToProps returns entire state nested within the state", state);

    return {
        iClockTimerId : state.sZone.iClockTimerId,
        sZone : state.sZone.sZone,
        sCurrentTime : state.sCurrentTime.sCurrentTime,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeClock : changeClock,
    }, dispatch);
}

class Clock extends Component {

    componentWillMount() {
        console.log("is it printed every time?");
        this.props.changeClock(TIME_ZONE_SEOUL, this.props.iClockTimerId)
    }

    render() {
        return (
            <div className="Clock">
                <p>{this.props.sCurrentTime}</p>
                <button
                    className="clock_button"
                    onClick={() => this.props.changeClock(TIME_ZONE_SEOUL, this.props.iClockTimerId)}
                >
                    Seoul
                </button>
                <button
                    className="clock_button"
                    onClick={() => this.props.changeClock(TIME_ZONE_PHL, this.props.iClockTimerId)}
                >
                    Philadelphia
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Clock);