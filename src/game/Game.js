import React, { Component } from 'react';

import './Game.css';

import Board from './Board/Board';

class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div> {/* TODO */} </div>
                    <ol> {/* TODO */} </ol>
                </div>
            </div>
        );
    }
}

export default Game;