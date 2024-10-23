export function createIdleAnimations(scene) {
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
}
