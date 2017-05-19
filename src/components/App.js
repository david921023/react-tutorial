import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Stopwatch from "./stopwatch";
import Clock from "./clock";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>세계시간 + 스탑워치 ㅋ</h2>
                </div>
                <p className="App-intro">
                    To change timezone, choose a city below.
                </p>
                <Clock className="Clock"/>
                <p className="App-intro">
                    To get started, press PLAY button at the bottom.
                </p>
                <Stopwatch className="Stopwatch"/>
            </div>
        );
    }
}

export default App;
