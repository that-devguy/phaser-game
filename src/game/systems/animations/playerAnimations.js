export const createPlayerAnimations = (scene) => {
  // Add idle animations
  scene.anims.create({
    key: "idle_up",
    frames: scene.anims.generateFrameNumbers("player_idle", {
      start: 0,
      end: 5,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "idle_down",
    frames: scene.anims.generateFrameNumbers("player_idle", {
      start: 6,
      end: 11,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "idle_left",
    frames: scene.anims.generateFrameNumbers("player_idle", {
      start: 12,
      end: 17,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: "idle_right",
    frames: scene.anims.generateFrameNumbers("player_idle", {
      start: 18,
      end: 23,
    }),
    frameRate: 5,
    repeat: -1,
  });

  // Add walking animations
  scene.anims.create({
    key: "walk_up",
    frames: scene.anims.generateFrameNumbers("player_walk", {
      start: 0,
      end: 5,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "walk_down",
    frames: scene.anims.generateFrameNumbers("player_walk", {
      start: 6,
      end: 11,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "walk_left",
    frames: scene.anims.generateFrameNumbers("player_walk", {
      start: 12,
      end: 17,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "walk_right",
    frames: scene.anims.generateFrameNumbers("player_walk", {
      start: 18,
      end: 23,
    }),
    frameRate: 10,
    repeat: -1,
  });

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

  // Add 1h sword attacking animations
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
};
