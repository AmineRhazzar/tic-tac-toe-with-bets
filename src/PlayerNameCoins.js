import React, { Component } from 'react';

class PlayerNameCoins extends Component {
    render() {
        return (
            <div className={this.props.playerClass}>
                <p className='player-name'>{this.props.name}</p>
                <p className ='coin-balance'>{this.props.coinBalance}</p>
            </div>
        );
    }
}

export default PlayerNameCoins;