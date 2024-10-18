"use client";
import dynamic from "next/dynamic";

// Dynamically import Phaser to prevent SSR
const GamePage = dynamic(() => import("../components/GameComponent"), {
  ssr: false,
});

export default function Game() {
  return <GamePage />;
}
