import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import '../index.css';


class App extends Component {
  state = {
    players: [
      {
        name: "Alison",
        score: 0,
        id: 1
      },
      {
        name: "Stephanie",
        score: 0,
        id: 2
      },
      {
        name: "Raul",
        score: 0,
        id: 3
      },
      {
        name: "Victor",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId= 4;

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      const updatedPlayers = [ ...prevState.players ];
      const updatedPlayer = { ...updatedPlayers[index] };

  
      updatedPlayer.score += delta;

      updatedPlayers[index] = updatedPlayer;


      return {
        players: updatedPlayers
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return { 
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1,
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }


  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}            
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
