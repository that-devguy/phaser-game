export function createWalkAnimations(scene) {
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
}
