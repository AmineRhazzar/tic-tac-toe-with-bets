import React from 'react';
import Board from './board'
import PlayerSection from './playerSection'

import './index.css';

class Game extends React.Component {
    state = {
        board : [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ]
    }
    updateBoardShape = (i) => {
        const newBoard = this.state.board.concat([]);
        newBoard[i] = i+1;
        this.setState({board:newBoard});
    }

    componentDidMount() {
        console.log(this.state.board);
    }

    componentDidUpdate() {
        console.log(this.state.board);
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