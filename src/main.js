import kaplay from "kaplay";


const k = kaplay({
	height: 480,
	width: 640,
	canvas: document.getElementById("game-canvas"),
	background: "#147171",
	global: false,
	debug: true,
	debugKey: "r",
});

k.setGravity(2750);
const player = k.add([k.circle(20),
	k.pos(320, 460),
	k.color(k.WHITE),
	k.body(),
	k.area(),]);
const ground = k.add([k.rect(640,20),
	k.pos (0, 460),
	k.body({ isStatic: true }),
	k.area(),
	k.color(k.GREEN)]);

const ceiling = k.add([k.rect(640,20),
	k.pos (0, 0),
	k.body({ isStatic: true }),
	k.area(),
	k.color(k.GREEN)]);

const pipedown = k.add([k.rect(75, 175),
	k.pos(280, 305),
	k.color(k.RED),
	k.area()]);

	const pipeup = k.add([k.rect(75, 175),
	k.pos(280, 0),
	k.color(k.RED),
	k.area()]);
	// röhre gemeinsam höhe 350 programieren
	// bewegung der röhren und neue erstellen

	player.onKeyPress("space", () => {	player.jump();
});

export default k;
