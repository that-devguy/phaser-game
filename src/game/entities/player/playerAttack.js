export function createAttackAnimations(scene) {
  // Add 1h attacking animations
  scene.anims.create({
    key: "attack_up",
    frames: scene.anims.generateFrameNumbers("player_1h_attack", {
      start: 0,
      end: 8,
    }),
    frameRate: 16,
    repeat: 0,
  });

  scene.anims.create({
    key: "attack_down",
    frames: scene.anims.generateFrameNumbers("player_1h_attack", {
      start: 9,
      end: 17,
    }),
    frameRate: 16,
    repeat: 0,
  });

  scene.anims.create({
    key: "attack_left",
    frames: scene.anims.generateFrameNumbers("player_1h_attack", {
      start: 18,
      end: 26,
    }),
    frameRate: 16,
    repeat: 0,
  });

  scene.anims.create({
    key: "attack_right",
    frames: scene.anims.generateFrameNumbers("player_1h_attack", {
      start: 27,
      end: 35,
    }),
    frameRate: 16,
    repeat: 0,
  });
}
