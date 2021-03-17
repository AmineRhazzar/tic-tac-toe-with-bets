import React from 'react';
import Board from './board'
import PlayerSection from './playerSection'
import isGameWon from './isGameWon'

import './index.css';

class Game extends React.Component {
    state = {
        turn: 1,
        board: [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ]
    }
    updateBoardShape = (i) => {
        const newBoard = this.state.board.concat([]);
        if (this.state.turn === 1) {
            newBoard[i] = i + 1;
        } else {
            newBoard[i] = String.fromCharCode(97 + i);
        }
        this.setState({ board: newBoard });
    }

    changeTurn = () => {
        const newTurn = (this.state.turn === 1) ? 2 : 1;
        this.setState(Object.assign({}, this.state, { turn: newTurn }))
    }

    clearBoard = () => {
        this.setState(Object.assign({}, this.state, {
            board: [
                0, 0, 0,
                0, 0, 0,
                0, 0, 0
            ]
        }))
    }

    componentDidUpdate() {
        const newBoard = this.state.board;
        if (isGameWon(newBoard)) {
            console.log("PLAYER " + this.state.turn + " HAS WON !!");
        }
    }

    render() {
        var message = isGameWon(this.state.board) ? <p><strong>THE PLAYER #{this.state.turn} HAS WON!</strong></p> : <p><strong>CURRENT TURN IS : {this.state.turn}</strong></p>

        return (
            <div className="game">
                <PlayerSection />
                    {message}
                <Board
                    boardShape={this.state.board}
                    updateBoardShape={this.updateBoardShape}
                />
                <button onClick={this.changeTurn}>CHANGE TURN</button>
                <button onClick={this.clearBoard}>CLEAR THE BOARD</button>
            </div>
        );
    }
}

export default Game;