import styles from "./GridShot.module.css";

import React from "react";
import Header from "./Header.component";
import Menu from "./Menu.component";
import Game from "./Game.component";
// import Stats from "./Stats";

/*
  Game Object
    @Desc: This game object holds any constant values that will be used throughout the game.
*/
const game = {
  targetGap: 3,
};

/*
  Grid Shot Game Component
    @Desc: App Component that uses conditional rendering to render out 3 different states of the game: Menu, Game, Stats
*/
class GridShot extends React.Component {
  constructor() {
    super();
    this.state = {
      gameStage: "Menu",
      targetDiameter: 48 + game.targetGap,
      targetColor: "#24B7C2",
      minute: 1,
      key: 0,
    };
  }

  /*
    Menu Functions
        @Desc:
  */
  changeTargetDiameter(e) {
    this.setState({
      targetDiameter: parseInt(e.target.value) + game.targetGap,
    });
  }
  changeTargetColor(e) {
    this.setState({ targetColor: e.target.value });
  }
  changeMinute(e) {
    this.setState({ minute: e.target.value });
  }
  startGame() {
    this.setState({ gameStage: "Game", key: this.state.key + 1 });
  }
  /*
    Render Function
        @Desc: This funciton renders all the different stages of the game. A switch statement is used to determine
        what component to render next. The state will be controlled from different functions passed down to buttons in the components
  */
  render() {
    let stage;
    switch (this.state.gameStage) {
      case "Menu":
        stage = (
          <Menu
            startGame={this.startGame.bind(this)}
            changeTargetDiameter={this.changeTargetDiameter.bind(this)}
            changeTargetColor={this.changeTargetColor.bind(this)}
            changeMinute={this.changeMinute.bind(this)}
            targetColor={this.state.targetColor}
          />
        );
        break;
      case "Game":
        stage = (
          <Game
            targetDiameter={this.state.targetDiameter}
            targetColor={this.state.targetColor}
            minute={this.state.minute}
            key={this.state.key}
          />
        );
        break;
      default:
        break;
    }
    return (
      <div className={styles.body}>
        <Header />
        <div>{stage}</div>
      </div>
    );
  }
}

export default GridShot;
