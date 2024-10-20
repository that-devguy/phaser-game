import { normalizeMovement } from "../utils/MovementUtils";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.speed = 160;
    this.lastDirection = "down"; // Default starting direction
  }

  handleMovement(keys) {
    // Reset velocity
    this.setVelocity(0);
    let moving = false;

    // Handle Diagonal Movement
    if (keys.w.isDown && keys.a.isDown) {
      this.setVelocityY(-this.speed);
      this.setVelocityX(-this.speed);
      this.anims.play("walk_up", true); // Play up animation for up-left
      this.lastDirection = "up";
      moving = true;
    } else if (keys.w.isDown && keys.d.isDown) {
      this.setVelocityY(-this.speed);
      this.setVelocityX(this.speed);
      this.anims.play("walk_up", true); // Play up animation for up-right
      this.lastDirection = "up";
      moving = true;
    } else if (keys.s.isDown && keys.a.isDown) {
      this.setVelocityY(this.speed);
      this.setVelocityX(-this.speed);
      this.anims.play("walk_down", true); // Play down animation for down-left
      this.lastDirection = "down";
      moving = true;
    } else if (keys.s.isDown && keys.d.isDown) {
      this.setVelocityY(this.speed);
      this.setVelocityX(this.speed);
      this.anims.play("walk_down", true); // Play down animation for down-right
      this.lastDirection = "down";
      moving = true;
    }

    // Horizontal movement (if no diagonal movement)
    if (!moving && keys.a.isDown) {
      this.setVelocityX(-this.speed);
      this.anims.play("walk_left", true); // Play walking left animation
      this.lastDirection = "left";
      moving = true;
    } else if (!moving && keys.d.isDown) {
      this.setVelocityX(this.speed);
      this.anims.play("walk_right", true); // Play walking right animation
      this.lastDirection = "right";
      moving = true;
    }

    // Vertical movement (if no diagonal movement)
    if (!moving && keys.w.isDown) {
      this.setVelocityY(-this.speed);
      this.anims.play("walk_up", true); // Play walking up animation
      this.lastDirection = "up";
      moving = true;
    } else if (!moving && keys.s.isDown) {
      this.setVelocityY(this.speed);
      this.anims.play("walk_down", true); // Play walking down animation
      this.lastDirection = "down";
      moving = true;
    }

    // If no movement, play idle animation
    if (!moving) {
      switch (this.lastDirection) {
        case "left":
          this.anims.play("idle_left");
          break;
        case "right":
          this.anims.play("idle_right");
          break;
        case "up":
          this.anims.play("idle_up");
          break;
        case "down":
          this.anims.play("idle_down");
          break;
      }
    }

    // Normalize movement for smoother diagonal movement
    normalizeMovement(this.body.velocity);
  }
}
