import React from 'react';
import Board from './board';
import PlayerSection from './playerSection';
import BettingForm from './BettingForm';
import isGameWon from './isGameWon';
import { getRoomState, updateRoomState } from './client';

import './index.css';

class Game extends React.Component {
    state = {
        "turn": 1,
        "board": [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ],
        "player1": {},
        "player2": {},
        "isFormVisible": false
    }

    componentDidMount() {
        //load state from server
        this.LoadStateFromServer();
    }

    LoadStateFromServer = () => {
        getRoomState((roomState) => {
            this.setState(Object.assign({}, this.state, roomState));
        });
    };


    updateBoardShape = (i) => {
        const newBoard = this.state.board.concat([]);
        if (this.state.turn === 1) {
            newBoard[i] = i + 1;
        } else {
            newBoard[i] = String.fromCharCode(97 + i);
        }

        this.setState({ board: newBoard }, () => {
            updateRoomState(this.state);//update in the server
            this.changeTurn();
            this.setState(Object.assign({}, this.state, { isFormVisible: false }));
        });

    }


    changeTurn = () => {
        const newTurn = (this.state.turn === 1) ? 2 : 1;
        this.setState(Object.assign({}, this.state, { turn: newTurn }), () => {
            updateRoomState(this.state);
        })
    }

    clearBoard = () => {
        this.setState(Object.assign({}, this.state, {
            board: [
                0, 0, 0,
                0, 0, 0,
                0, 0, 0
            ]
        }), () => {
            updateRoomState(this.state);
        })
    }



    render() {

        // getRooms((rooms) => console.log(rooms));


        var gameEnded = isGameWon(this.state.board);
        var message = gameEnded ? `THE PLAYER #${this.state.turn} HAS WON!` : `CURRENT TURN IS : ${this.state.turn}`

        return (
            <div className="game">

                <PlayerSection
                    player1={this.state.player1}
                    player2={this.state.player2}
                />
                <p className="message"><b>{message}</b></p>
                <BettingForm displayed={this.state.isFormVisible} />
                <Board
                    boardShape={this.state.board}
                    updateBoardShape={this.updateBoardShape}
                    gameEnded={gameEnded}
                />
                <button onClick={this.changeTurn}>CHANGE TURN</button>
                <button onClick={this.clearBoard}>CLEAR THE BOARD</button>
            </div>
        );
    }
}

export default Game;