import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Game from './Game';
import HomePage from './HomePage'
import './index.css';

class HomePage extends React.Component {

    state={
        newRoomCode: ''
    }

    createRoomCode = () => {
        this.setState({newRoomCode : 'azert'});
    }


    render() {
        return (
            <Router>
                <Route
                    path="/"
                    exact
                    render={
                        () => {
                            (this.state.newRoomCode=='') ? (<Redirect to={'/' + this.state.newRoomCode} />) : (<HomePage createRoomCode={this.createRoomCode}/>)
                        }
                    }
                />
                <Route
                    path={'/' + this.state.newRoomCode} exact
                    component={<Game roomCode={this.state.newRoomCode} />}
                />
            </Router>
        );
    }
}

export default HomePage;