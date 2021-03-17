import React from 'react';
import Board from './board'
import PlayerSection from './playerSection'

import './index.css';

class Game extends React.Component {
    state = {
        board : [
            0, 'b', 0,
            'd', 5, 6,
            7, 'h', 0
        ]
    }
    updateBoardShape = (i) => {
        console.log("state.changed at index " + i + "!")
    }

    render(){
        return(
            <div className="game">
                <PlayerSection />
                <Board
                boardShape={this.state.board}
                updateBoardShape={this.updateBoardShape}
                />
            </div>
        );
    }
}

export default Game;