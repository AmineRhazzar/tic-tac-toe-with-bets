import React from 'react';
import './index.css'

class BettingForm extends React.Component {
    render() {
        const roomAPI = "http://localhost:5000/roomtest";
        const player = {
            name: 'PLAYER_1',
            coinBalance: 100
        }
        return (
            <form action={roomAPI} method='POST'>
                <input type='number' required={true} min="0" max={player.coinBalance} />
                <input type='text' hidden={true} value={player.name} />
                <button type='submit'>BET</button>
            </form>
        );
    }
}

export default BettingForm;