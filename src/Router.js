import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { getRoomState, updateRoomState } from './client';
import Game from './Game';
import HomePage from './HomePage'
import './index.css';

class Home extends React.Component {

    state = {
        newRoomCode: '',
        playerID: 0
    }

    createRoomCode = (chosenUsername) => {
        const newRoomState = {
            "turn": 2,
            "board": [0, 0, 0, 0, 0, 0, 0, 0, 0],
            "player1": { "name": chosenUsername, "coinBalance": 100, "bet": 0 },
            "player2": { "name": "", "coinBalance": 100, "bet": 0 },
            "isFormVisible": false
        };
        updateRoomState(newRoomState);
        this.setState({ newRoomCode: 'azert' });
    }

    joinRoom = (chosenUsername) => {
        //load state from server
        getRoomState((roomState) => {
            var newRoomState = {};
            if (!roomState.player1.name) {
                newRoomState = Object.assign({}, roomState, { player1: { name: chosenUsername, coinBalance: 100, bet: 0 } });
                updateRoomState(newRoomState);
                this.setState({ newRoomCode: 'azert', playerID: 1 });
            } else if (!roomState.player2.name) {
                newRoomState = Object.assign({}, roomState, { player2: { name: chosenUsername, coinBalance: 100, bet: 0 } });
                updateRoomState(newRoomState);
                this.setState({ newRoomCode: 'azert', playerID: 2 });
            }
        })
        //change the name of player2 to chosenUsername
        //update room state to the server
        //setState to newRoomCode: 'azert'
    }


    render() {

        var playerID = this.state.playerID;

        return (
            <Router>
                <Route
                    path='/'
                    exact
                    render={
                        () => (
                            this.state.newRoomCode ? (<Redirect to={'/' + this.state.newRoomCode} />) : (<HomePage createRoomCode={this.createRoomCode} joinRoom={this.joinRoom} />)
                        )
                    }
                />
                <Route
                    path={this.state.newRoomCode ? ('/' + this.state.newRoomCode) : ('/testroom')}
                    exact
                    render={(props) => (
                        this.state.newRoomCode ? (<Game playerID={playerID} />) : (<HomePage createRoomCode={this.createRoomCode} joinRoom={this.joinRoom} />)

                    )}
                />
            </Router>
        );
    }
}

export default Home;