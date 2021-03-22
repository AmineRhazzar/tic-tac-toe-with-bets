import React from 'react';
import PlayerNameCoins from './PlayerNameCoins';
import './index.css';

export default class PlayerSection extends React.Component {
    render() {
        const player1 = this.props.player1;
        const player2 = this.props.player2;
        return (
            <div className="player-section">
                <PlayerNameCoins
                    playerClass='player1'
                    name={player1.name}
                    coinBalance={player1.coinBalance}
                />
                <PlayerNameCoins
                    playerClass='player2'
                    name={player2.name}
                    coinBalance={player2.coinBalance}
                />
            </div>
        );
    }
}
