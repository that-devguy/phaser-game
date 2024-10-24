export function setupCollisionDebug(scene) {
  // Create graphics objects for the map's collision tiles and player's collision area
  const viewCollisionTiles = scene.add.graphics({
    fillStyle: { color: 0xff0000, alpha: 0.5 },
  });
  const collisionGraphics = scene.add.graphics({
    fillStyle: { color: 0xff0000, alpha: 0.5 },
  });

  // Toggle hotkey for collision box visibility
  const toggleCollisionBoxes = scene.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.C
  );

  // Return an object to keep track of collision settings
  return {
    showCollisionBoxes: false,
    viewCollisionTiles,
    collisionGraphics,
    toggleCollisionBoxes,
  };
}

export function updateCollisionDebug(
  scene,
  collisionSettings,
  player,
  collisionLayer
) {
  const {
    showCollisionBoxes,
    viewCollisionTiles,
    collisionGraphics,
    toggleCollisionBoxes,
  } = collisionSettings;

  // Check for showCollisionBoxes toggle
  if (Phaser.Input.Keyboard.JustDown(toggleCollisionBoxes)) {
    collisionSettings.showCollisionBoxes = !showCollisionBoxes;
  }

  // Clear previous drawings
  viewCollisionTiles.clear();
  collisionGraphics.clear();

  if (collisionSettings.showCollisionBoxes) {
    // Manually render collision tiles with transparency
    collisionLayer.forEachTile((tile) => {
      if (tile.collides) {
        viewCollisionTiles.fillStyle(0xff0000, 0.5);
        viewCollisionTiles.fillRect(
          tile.pixelX,
          tile.pixelY,
          tile.width,
          tile.height
        );
      }
    });

    // Render player collision box
    collisionGraphics.fillStyle(0xff0000, 0.5);
    collisionGraphics.fillEllipse(
      player.body.x + player.body.width / 2,
      player.body.y + player.body.height / 2,
      player.body.width,
      player.body.height
    );
  }
}
