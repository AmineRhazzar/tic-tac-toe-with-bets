import React from 'react';
import './index.css'

class BettingForm extends React.Component {
    render() {
        const roomAPI = "http://localhost:5000/roomtest";
        const player = {
            name: 'PLAYER_1',
            coinBalance: 100
        }
        if(this.props.isFormVisible){
            return (
                <form action={roomAPI} method='POST'>
                    <input type='number' required={true} min="0" max={player.coinBalance} />
                    <input type='text' hidden={true} />
                    <button type='submit'>BET</button>
                </form>
            );
        }else{
            return <div></div>;
        }

    }
}

export default BettingForm;