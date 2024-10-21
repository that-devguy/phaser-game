// Normalizes the velocity to prevent diagonal movement from being faster than horizontal/vertical movement.
export const normalizeMovement = (velocity) => {
  if (velocity.length() > 0) {
    return velocity.normalize().scale(60);
  }
};
