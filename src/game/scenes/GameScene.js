import { playerAssets } from "../entities/player/playerAssets";
import Player from "../entities/player/Player";
import { loadAnimations } from "../systems/animations/animationLoader";
import { setupTestMap } from "../systems/mapSetup/testMap";
import {
  setupCollisionDebug,
  updateCollisionDebug,
} from "../utils/collisionDebug";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });

    // Flag for toggling collision box visibility
    this.showCollisionBoxes = false;
  }

  preload() {
    // Load test map sprite sheet & tiled map
    this.load.image("tiles", "assets/sprites/maps/demo_tiles.png");
    this.load.tilemapTiledJSON("testMap", "assets/maps/test_map.json");

    // Load player sprite sheets
    Object.values(playerAssets).forEach((asset) => {
      this.load.spritesheet(asset.key, asset.path, {
        frameWidth: asset.frameWidth,
        frameHeight: asset.frameHeight,
        margin: asset.margin,
        spacing: asset.spacing,
      });
    });
  }

  create() {
    // Load animations into scene
    loadAnimations(this);

    // Set up map
    this.map = setupTestMap(this);

    // Add the player sprite
    this.player = new Player(this, 120, 88).play("idle_down");
    this.player.setScale(1);
    this.physics.add.collider(this.player, this.collisionLayer);

    // Keybindings for WASD movement
    this.keys = this.input.keyboard.addKeys({
      w: Phaser.Input.Keyboard.KeyCodes.W,
      a: Phaser.Input.Keyboard.KeyCodes.A,
      s: Phaser.Input.Keyboard.KeyCodes.S,
      d: Phaser.Input.Keyboard.KeyCodes.D,
    });

    // Left-click attack handler
    this.input.on("pointerdown", (pointer) => {
      if (pointer.leftButtonDown()) {
        this.player.handleAttack(pointer, this.keys);
      }
    });

    // Set up collision debug system
    this.collisionSettings = setupCollisionDebug(this);
  }

  update() {
    // Delegate movement logic to the player entity
    this.player.handleMovement(this.keys);

    // Update and redraw collision debug if needed
    updateCollisionDebug(
      this,
      this.collisionSettings,
      this.player,
      this.collisionLayer
    );
  }
}
