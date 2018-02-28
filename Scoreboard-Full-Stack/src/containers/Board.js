// src/containers/Board.js

import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player, { playerShape } from '../components/Player'
import PropTypes from 'prop-types'
import './Board.css'

export default class Board extends PureComponent {

  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
    updatePlayer: PropTypes.func.isRequired
  }

  renderPlayers(){
    // get these passed down from Apps
    const { players, updatePlayer } = this.props

    return players
      .sort((p1,p2) => (p2.score - p1.score))
      .map((player, index) => (
        <Player key={index} onChange={updatePlayer} { ...player}  />))
// render a bunch of player components
// by spreading out the props obj to probs

  }

  render() {
    return (
      <div>
        <Title content="Scoreboard" />
        <ul className="Board">
          {this.renderPlayers()} />

        </ul>
      </div>
    )
  }
}

//.sort((x,y) => y.score - x.score)
