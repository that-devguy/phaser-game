import { normalizeMovement } from "../utils/MovementUtils";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.speed = 160;
  }

  handleMovement(keys) {
    // Reset velocity
    this.setVelocity(0);

    // Horizontal movement
    if (keys.a.isDown) {
      this.setVelocityX(-this.speed);
    } else if (keys.d.isDown) {
      this.setVelocityX(this.speed);
    }

    // Vertical movement
    if (keys.w.isDown) {
      this.setVelocityY(-this.speed);
    } else if (keys.s.isDown) {
      this.setVelocityY(this.speed);
    }

    // Normalize movement for diagonal directions
    normalizeMovement(this.body.velocity);
  }
}
