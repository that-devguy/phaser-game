import { normalizeMovement } from "../utils/MovementUtils";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.speed = 60;

    this.body.setSize(4, 4); // Set the player's physics body to match the sprite
    this.body.setOffset(6, 12); // Adjust the x and y offset for the collision box relative to the player
  }

  // MOVEMENT
  handleMovement(keys) {
    // If attacking, don't allow movement
    if (this.isAttacking) return;

    // Reset velocity
    this.setVelocity(0);
    let moving = false;

    // Diagonal Movement
    if (keys.w.isDown && keys.a.isDown) {
      this.setVelocityY(-this.speed);
      this.setVelocityX(-this.speed);
      this.anims.play("walk_left", true); // Play up animation for up-left
      moving = true;
    } else if (keys.w.isDown && keys.d.isDown) {
      this.setVelocityY(-this.speed);
      this.setVelocityX(this.speed);
      this.anims.play("walk_right", true); // Play up animation for up-right
      moving = true;
    } else if (keys.s.isDown && keys.a.isDown) {
      this.setVelocityY(this.speed);
      this.setVelocityX(-this.speed);
      this.anims.play("walk_left", true); // Play down animation for down-left
      moving = true;
    } else if (keys.s.isDown && keys.d.isDown) {
      this.setVelocityY(this.speed);
      this.setVelocityX(this.speed);
      this.anims.play("walk_right", true); // Play down animation for down-right
      moving = true;
    }

    // Horizontal movement (if no diagonal movement)
    if (!moving && keys.a.isDown) {
      this.setVelocityX(-this.speed);
      this.anims.play("walk_left", true); // Play walking left animation
      moving = true;
    } else if (!moving && keys.d.isDown) {
      this.setVelocityX(this.speed);
      this.anims.play("walk_right", true); // Play walking right animation
      moving = true;
    }

    // Vertical movement (if no diagonal movement)
    if (!moving && keys.w.isDown) {
      this.setVelocityY(-this.speed);
      this.anims.play("walk_up", true); // Play walking up animation
      moving = true;
    } else if (!moving && keys.s.isDown) {
      this.setVelocityY(this.speed);
      this.anims.play("walk_down", true); // Play walking down animation
      moving = true;
    }

    // If no movement, play idle animation
    if (!moving) {
      // Check last movement direction to play the corresponding idle animation
      const currentAnim = this.anims.currentAnim;
      if (currentAnim) {
        switch (currentAnim.key) {
          case "walk_left":
            this.anims.play("idle_left");
            break;
          case "walk_right":
            this.anims.play("idle_right");
            break;
          case "walk_up":
            this.anims.play("idle_up");
            break;
          case "walk_down":
            this.anims.play("idle_down");
            break;
        }
      }
    }

    // Normalize movement for smoother diagonal movement
    normalizeMovement(this.body.velocity);
  }

  // ATTACK
  handleAttack(pointer, keys) {
    // Defines attack state so that we can block movement
    this.isAttacking = true;

    const playerX = this.x;
    const playerY = this.y;
    const mouseX = pointer.worldX;
    const mouseY = pointer.worldY;

    // Calculate the angle between player and mouse
    const angle = Phaser.Math.Angle.Between(playerX, playerY, mouseX, mouseY);

    // Calculate direction based on angle (8-directional logic)
    if (angle >= -Math.PI / 4 && angle < Math.PI / 4) {
      this.anims.play("attack_right", true);
    } else if (angle >= Math.PI / 4 && angle < (3 * Math.PI) / 4) {
      this.anims.play("attack_down", true);
    } else if (angle >= (-3 * Math.PI) / 4 && angle < -Math.PI / 4) {
      this.anims.play("attack_up", true);
    } else {
      this.anims.play("attack_left", true);
    }

    // Stop player movement during attack animation
    this.setVelocity(0);

    this.once("animationcomplete", (anim) => {
      this.isAttacking = false; //Reset attack state

      this.handleMovement(keys);
    });
  }
}
