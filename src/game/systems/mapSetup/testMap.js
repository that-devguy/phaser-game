export function setupTestMap(scene) {
  // Add map and tileset
  const map = scene.make.tilemap({ key: "testMap" });
  const tileset = map.addTilesetImage("test_map", "tiles");

  const layers = [
    "Tile Layer 1",
    "Tile Layer 2",
    "Tile Layer 3", // Collision Layer
    "Tile Layer 4",
    "Tile Layer 5", // Layer that goes above player sprite
  ];

  // Create layers and set properties
  layers.forEach((layerName) => {
    const layer = map.createLayer(layerName, tileset, 0, 0);
    if (layerName === "Tile Layer 5") {
      layer.setDepth(10); // Sets layer depth above the player sprite
    }
    if (layerName === "Tile Layer 3") {
      scene.collisionLayer = layer; // Assign collision layer
    }
  });

  // Enables collision detection on the collision layer
  scene.collisionLayer.setCollisionByProperty({ collides: true });

  return map;
}
