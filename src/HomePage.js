import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Redirect} from "react-router-dom";
import Game from './Game';
import './index.css';

class HomePage extends React.Component {

    state = {
        chosenUsername: '',
        redirect: null
    };

    onUsernameChange = (e) => {
        this.setState({ chosenUsername: e.target.value });
    }

    validate = (e) => {
        e.preventDefault();
        //check if username already exists;
        this.createRoom();
    }

    createRoom = () => {
        //create unique roomCode
        const roomCode = "azert";
        this.setState({ redirect: "/azert"});
    }

    render() {

        const roomCode = 'testroom';//to replace with the code to create a random unique room code
        const roomEndpoint = "http://localhost:5000/" + roomCode;
        return (
            <Router>
                <form method='POST' action={roomEndpoint} onSubmit={this.validate}>
                    <input type="text" value={this.state.chosenUsername} onChange={this.onUsernameChange} required />
                    <button type="submit">Create Room</button>
                </form>
            </Router>
        );
    }
}

export default HomePage;