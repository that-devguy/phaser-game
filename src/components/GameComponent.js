import { useEffect } from "react";
import * as Phaser from "phaser";
import GameScene from "../game/scenes/GameScene";

const GameComponent = () => {
  useEffect(() => {
    // Check if we are running in the browser
    if (typeof window !== "undefined") {
      // Phaser game configuration object. This sets up the basic game properties
      const config = {
        type: Phaser.AUTO, // This sets Phaser to automatically use WebGL if available, otherwise it falls back to Canvas.
        width: 240,
        height: 176,
        parent: "phaser-game", // DOM element ID where the game will be rendered
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 0 },
            debug: false, // Enable or disable physics debugging
          },
        },
        scene: [GameScene], // Imports the GameScene
        scale: {
            zoom: 4 // Scale the game size for 16x16 sprites
        }
      };

      const game = new Phaser.Game(config);

      // Cleanup function that runs when the component unmounts.
      // Destroys the Phaser game instance, ensuring it doesn't continue running in the background.
      return () => {
        game.destroy(true); // Destroying the game instance and all of its internal references.
      };
    }
  }, []);

  return (
    <div>
      <div id="phaser-game" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default GameComponent;
