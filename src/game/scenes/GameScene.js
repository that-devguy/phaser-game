import Player from "../entities/Player";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    // Load default game background
    this.load.image(
      "background",
      "https://labs.phaser.io/assets/skies/space3.png"
    );

    // Load animated player sprite sheets
    this.load.spritesheet("player_idle", "src/assets/images/hero_idle.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet("player_walk", "src/assets/images/hero_walk.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    // Phaser's add.image() adds an image to the game world. The first two parameters are the x and y coordinates.
    // Add the background
    this.add.image(400, 300, "background");

    // Add idle animations
    this.anims.create({
      key: "idle_up",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 0,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "idle_down",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 8,
        end: 15,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "idle_left",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 16,
        end: 23,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "idle_right",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 24,
        end: 31,
      }),
      frameRate: 5,
      repeat: -1,
    });

    // Add walking animations
    this.anims.create({
      key: "walk_up",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "walk_down",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 8,
        end: 110,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "walk_left",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 16,
        end: 23,
      }),
      frameRate: 10,
      repeat: -1,
    });gi

    this.anims.create({
      key: "walk_right",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 24,
        end: 31,
      }),
      frameRate: 5,
      repeat: -1,
    });

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
