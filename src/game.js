// game.js
import { GameScene } from "./scenes/GameScene.js";
import { PauseScene } from "./scenes/PauseScene.js";
import { LoadingScene } from "./scenes/LoadingScene.js";
import { GameOverScene } from "./scenes/GameOverScene.js";
import { MenuScene } from "./scenes/MenuScene.js";
import { GameState } from "./GameState.js";
import { GameWinScene } from "./scenes/GameWinScene.js";

const config = {
  type: Phaser.AUTO,
  width: 768,
  height: 768,
  backgroundColor: "#c0dffd",
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
   input: {
    touch: {
      capture: true, // Enable touch event capture
      enabled: true, // Enable touch input
      multitouch: true, // Enable multi-touch
    },
  },
  fps: {
    target: 60,
    forceSetTimeOut: true,
  },
  scene: [
    LoadingScene,
    MenuScene,
    GameScene,
    PauseScene,
    GameOverScene,
    GameWinScene,
  ],
};
// Initialize shared game state
const gameState = new GameState();

window.onload = () => {
  const game = new Phaser.Game(config);
};
