import { playerAssets } from "../entities/player/playerAssets";
import Player from "../entities/player/Player";
import { loadAnimations } from "../systems/animations/animationLoader";
import { setupTestMap } from "../systems/mapSetup/testMap";

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

    // Toggle hotkey for collision box visibility
    this.toggleCollisionBoxes = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.C
    );

    // Create a graphics object to draw the maps's collision tiles
    this.viewCollisionTiles = this.add.graphics({
      fillStyle: { color: 0xff0000, alpha: 0.5 },
    });

    // Create a graphics object to draw the player's collision area
    this.collisionGraphics = this.add.graphics({
      fillStyle: { color: 0xff0000, alpha: 0.5 },
    });
  }

  update() {
    // Delegate movement logic to the player entity
    this.player.handleMovement(this.keys);

    // Check for showCollisionBoxes toggle
    if (Phaser.Input.Keyboard.JustDown(this.toggleCollisionBoxes)) {
      this.showCollisionBoxes = !this.showCollisionBoxes;
    }

    // If showCollisionBoxes is true, render map collision boxes
    if (this.showCollisionBoxes) {
      this.collisionLayer.renderDebug(this.viewCollisionTiles, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(255, 10, 40, 128), // Highlight collidable tiles
        faceColor: null,
      });
    } else {
      this.viewCollisionTiles.clear();
    }

    // Update and redraw player collision box while the player is moving
    // Clear any previous graphics drawings
    this.collisionGraphics.clear();

    // If showCollisionBoxes is true, render player collision boxes
    if (this.showCollisionBoxes) {
      // Draw a red filled circle over the player's physics body (with 50% opacity)
      this.collisionGraphics.fillStyle(0xff0000, 0.5);
      this.collisionGraphics.fillEllipse(
        this.player.body.x + this.player.body.width / 2,
        this.player.body.y + this.player.body.height / 2,
        this.player.body.width,
        this.player.body.height
      );
    }
  }
}
