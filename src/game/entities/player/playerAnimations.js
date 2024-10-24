import { createIdleAnimations } from "./playerIdle";
import { createWalkAnimations } from "./playerWalk";
import { createAttackAnimations } from "./playerAttack";
import { create1hSwordAttackAnimations } from "./player1hSwordAttack";

export function createPlayerAnimations(scene) {
  createIdleAnimations(scene);
  createWalkAnimations(scene);
  createAttackAnimations(scene);
  create1hSwordAttackAnimations(scene);
}
