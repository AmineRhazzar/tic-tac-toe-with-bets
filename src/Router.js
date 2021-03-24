import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { getRoomState, updateRoomState } from './client';
import Game from './Game';
import HomePage from './HomePage'
import './index.css';

class Home extends React.Component {

    state = {
        newRoomCode: ''
    }

    createRoomCode = (chosenUsername) => {
        this.setState({ newRoomCode: 'azert' });
        const newRoomState = {
            "turn": 2,
            "board": [0, 0, 0, 0, 0, 0, 0, 0, 0],
            "player1": { "name": chosenUsername, "coinBalance": 100, "bet": 0 },
            "player2": { "name": "", "coinBalance": 100, "bet": 0 },
            "isFormVisible": false
        };
        updateRoomState(newRoomState);
        
    }

    joinRoom = (chosenUsername) => {
        //load state from server
        //change the name of player2 to chosenUsername
        //update room state to the server
        //setState to newRoomCode: 'azert'
    }


    render() {
        return (
            <Router>
                <Route
                    path='/'
                    exact
                    render={
                        () => (
                            this.state.newRoomCode ? (<Redirect to={'/' + this.state.newRoomCode} />) : (<HomePage createRoomCode={this.createRoomCode} />)
                        )
                    }
                />
                <Route
                    path={this.state.newRoomCode ? ('/' + this.state.newRoomCode) : ('/testroom')}
                    exact
                    render={(props) => (
                        this.state.newRoomCode ? (<Game roomCode={this.state.roomCode} />) : (<HomePage createRoomCode={this.createRoomCode} joinRoom={this.joinRoom}/>)

                    )}
                />
            </Router>
        );
    }
}

export default Home;