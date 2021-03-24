import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Game from './Game';
import HomePage from './HomePage'
import './index.css';

class Home extends React.Component {

    state = {
        newRoomCode: ''
    }

    createRoomCode = () => {
        this.setState({ newRoomCode: 'azert' });
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
                        this.state.newRoomCode ? (<Game roomCode={this.state.roomCode} />) : (<HomePage createRoomCode={this.createRoomCode} />)

                    )}
                />
            </Router>
        );
    }
}

export default Home;