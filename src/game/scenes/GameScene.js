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
    this.load.spritesheet("player_idle", "assets/images/hero_idle.png", {
      frameWidth: 16,
      frameHeight: 16,
      margin: 32,
      spacing: 64,
    });
    console.log("player_idle sprite sheet loaded");

    this.load.spritesheet("player_walk", "assets/images/hero_walk.png", {
      frameWidth: 16,
      frameHeight: 16,
      margin: 32,
      spacing: 64,
    });
    console.log("player_walk sprite sheet loaded");
  }

  create() {
    // Add the background
    this.add.image(400, 300, "background");

    // Add idle animations
    this.anims.create({
      key: "idle_up",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 0,
        end: 5,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "idle_down",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 6,
        end: 11,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "idle_left",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 12,
        end: 17,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "idle_right",
      frames: this.anims.generateFrameNumbers("player_idle", {
        start: 18,
        end: 23,
      }),
      frameRate: 5,
      repeat: -1,
    });

    // Add walking animations
    this.anims.create({
      key: "walk_up",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "walk_down",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 6,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "walk_left",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 12,
        end: 17,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "walk_right",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 18,
        end: 23,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Add the player sprite
    this.player = new Player(this, 400, 300).play("idle_down");
    this.player.setScale(3);

    // Keybindings for WASD movement
    this.keys = this.input.keyboard.addKeys({
      w: Phaser.Input.Keyboard.KeyCodes.W,
      a: Phaser.Input.Keyboard.KeyCodes.A,
      s: Phaser.Input.Keyboard.KeyCodes.S,
      d: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update() {
    this.player.handleMovement(this.keys); // Delegate movement logic to the player entity
  }
}
