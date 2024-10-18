import Player from "../entities/Player";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    // Load default player sprite
    this.load.image(
      "player",
      "https://labs.phaser.io/assets/sprites/phaser-dude.png"
    );
    // Load default game background
    this.load.image(
      "background",
      "https://labs.phaser.io/assets/skies/space3.png"
    );
  }

  create() {
    // Phaser's add.image() adds an image to the game world. The first two parameters are the x and y coordinates.
    // Add the background
    this.add.image(400, 300, "background");

    // Add the player sprite
    this.player = new Player(this, 400, 300);

    // Set player movement
    // Keybindings for WASD movement
    this.keys = this.input.keyboard.addKeys({
      w: Phaser.Input.Keyboard.KeyCodes.W,
      a: Phaser.Input.Keyboard.KeyCodes.A,
      s: Phaser.Input.Keyboard.KeyCodes.S,
      d: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update() {
    this.player.handleMovement(this.keys); // This delegates movement logic to the player entity
  }
}
