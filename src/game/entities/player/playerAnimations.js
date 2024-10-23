import { createIdleAnimations } from "./playerIdle";
import { createWalkAnimations } from "./playerWalk";
import { createAttackAnimations } from "./playerAttack";

export function createPlayerAnimations(scene) {
  createIdleAnimations(scene);
  createWalkAnimations(scene);
  createAttackAnimations(scene);
}
