import kaplay from "kaplay";
import sc00 from "./scenes/sc-00";
import level1 from "./scenes/level1";
import gameover from "./scenes/gameover";

const k = kaplay({
	height: 480,
	width: 640,
	canvas: document.getElementById("game-canvas"),
	background: "#ffffff",
	global: false,
	debug: true,
	debugKey: "r",
});

k.scene("init", sc00());
k.scene("level1", level1());
k.scene("gameover", gameover());

k.go("init");

export default k;
