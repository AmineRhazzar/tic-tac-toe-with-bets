import React from 'react';
import './index.css';

class HomePage extends React.Component {
    state = {
        chosenUsername: ''
    }

    onUsernameChange = (e) => {
        this.setState({ chosenUsername: e.target.value });
    }

    validate = (e) => {
        //check if this.state.username is available
        e.preventDefault();
    }

    createRoomCode = (e) => {
        e.preventDefault();
        this.props.createRoomCode(this.state.chosenUsername);
    }

    joinRoom = (e) => {
        e.preventDefault();
        this.props.joinRoom(this.state.chosenUsername);
    }


    render() {
        return (
            <form onSubmit={this.validate}>
                <label htmlFor="username">Enter Your username</label>
                <input type="text" value={this.state.chosenUsername} onChange={this.onUsernameChange} name="username" required />
                <button type="submit" onClick={this.createRoomCode}>Create Room</button>
                <button type="submit" onClick={this.joinRoom}>Join Room</button>
            </form>
        );
    }
}

export default HomePage;