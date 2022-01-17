import React, { Component } from 'react';

import Header from './Header';

import Player from './Player';

import '../App.css';

import '../index.css';


class App extends Component {
  state = {
    players: [
      {
        name: "Maria",
        score: 0,
        id: 1
      },
      {
        name: "Jose",
        score: 0,
        id: 2
      },
      {
        name: "Alonzo",
        score: 0,
        id: 3
      },
      {
        name: "Claudino",
        score: 0,
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
