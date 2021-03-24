import React from 'react';
import './index.css';

class HomePage extends React.Component {
    state = {
        chosenUsername: ''
    }

    onUsernameChange = (e) => {
        this.setState({ chosenUsername: e.target.value });
    }

    validate = () => {
        //check if this.state.username is available
        //....
        this.props.createRoomCode();
    }

    render() {
        return (
            <form onSubmit={this.validate}>
                <input type="text" value={this.state.chosenUsername} onChange={this.onUsernameChange} />
                <button type="submit">Create Room</button>
            </form>
        );
    }
}

export default HomePage;