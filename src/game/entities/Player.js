import { normalizeMovement } from "../utils/MovementUtils";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player_idle");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.speed = 160;

    if (scene.anims) {
      this.anims.play("idle_down", true);
    }
  }

  handleMovement(keys) {
    // Reset velocity
    this.setVelocity(0);
    let moving = false;

    // Horizontal movement
    if (keys.a.isDown) {
      this.setVelocityX(-this.speed);
      this.anims.play("walk_down", true); // Play walking animation
      moving = true;
    } else if (keys.d.isDown) {
      this.setVelocityX(this.speed);
      this.anims.play("walk_down", true); // Play walking animation
      moving = true;
    }

    // Vertical movement
    if (keys.w.isDown) {
      this.setVelocityY(-this.speed);
      this.anims.play("walk_down", true); // Play walking animation
      moving = true;
    } else if (keys.s.isDown) {
      this.setVelocityY(this.speed);
      this.anims.play("walk_down", true); // Play walking animation
      moving = true;
    }

    // If not moving, play idle animation
    if (!moving) {
      this.anims.play("idle_down", true);
    }

    // Normalize movement for diagonal directions
    normalizeMovement(this.body.velocity);
  }
}
