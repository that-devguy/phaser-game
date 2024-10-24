export function create1hSwordAttackAnimations(scene) {
  // 1h sword attack animations
  scene.anims.create({
    key: "1h_sword_attack_up",
    frames: scene.anims.generateFrameNumbers("1h_sword_attack", {
      start: 0,
      end: 8,
    }),
    frameRate: 16,
    repeat: 0,
  });

  scene.anims.create({
    key: "1h_sword_attack_down",
    frames: scene.anims.generateFrameNumbers("1h_sword_attack", {
      start: 9,
      end: 17,
    }),
    frameRate: 16,
    repeat: 0,
  });

  scene.anims.create({
    key: "1h_sword_attack_left",
    frames: scene.anims.generateFrameNumbers("1h_sword_attack", {
      start: 18,
      end: 26,
    }),
    frameRate: 16,
    repeat: 0,
  });

  scene.anims.create({
    key: "1h_sword_attack_right",
    frames: scene.anims.generateFrameNumbers("1h_sword_attack", {
      start: 27,
      end: 35,
    }),
    frameRate: 16,
    repeat: 0,
  });
}
