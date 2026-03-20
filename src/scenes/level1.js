import k from "../main";
export default function level1() {
    return() =>{
        k.setGravity(2750);



	// Hintergrundbild laden
k.loadSprite( // läd das bild
  "background",// name
  "https://projects-static.raspberrypi.org/projects/flappy-parrot/75cac360c1283fe75e745d69206d124dffeeb92c/en/images/flappy-stage.png"
);

  // Hintergrund anzeigen
k.add([
  k.sprite("background"), // Hintergrundbild verwenden
  k.pos(0, 40),// die position
  k.scale(480/288, 640/512), // macht das bild auf grösse des canvas
  //288 und 512 sind die original größe des bildes
  k.fixed(),// fixiert den hintergrund
]);





const player = k.add([k.circle(20),
	k.pos(320, 460),
	k.color(k.WHITE),
	k.body(),
	k.area(),]);
const ground = k.add([k.rect(640,20),
	k.pos (0, 460),
	k.body({ isStatic: true }),
	k.area(),
	k.color("#01ce40")]);

const ceiling = k.add([k.rect(640,20),
	k.pos (0, 0),
	k.body({ isStatic: true }),
	k.area(),
	k.color("#99ffff")]);

const pipedown = k.add([k.rect(75, 175),
	k.pos(280, 305),
	k.color(k.RED),
	k.area()
]);
k.onUpdate(() => {
pipeup.move(-120, 0);
  pipedown.move(-120, 0); // lässt die röhre nach links bewegen
  });

	const pipeup = k.add([k.rect(75, 175),
	k.pos(280, 0),
	k.color(k.RED),
	k.area()]);
	// röhre gemeinsam höhe 350 programieren
	// bewegung der röhren und neue erstellen

	player.onKeyPress("space", () => {	player.jump();
});};
}