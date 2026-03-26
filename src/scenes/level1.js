import k from "../main";
import gameover from "./gameover";
export default function level1() {
    return () => {

		k.setGravity(1000);



	// Hintergrundbild laden
k.loadSprite( // läd das bild
  "background",// name
  "https://projects-static.raspberrypi.org/projects/flappy-parrot/75cac360c1283fe75e745d69206d124dffeeb92c/en/images/flappy-stage.png"
);

  // Hintergrund anzeigen
k.add([
  k.sprite("background"), // Hintergrundbild verwenden
  k.pos(0, 0),// die position
  k.scale(480/288, 700/512), // macht das bild auf grösse des canvas
  //288 und 512 sind die original größe des bildes
  k.fixed(),// fixiert den hintergrund
]);





const player = k.add([k.circle(18),
	k.pos(120, 230),
	k.color(k.WHITE),
	k.body(),
	k.area(),]);

k.onUpdate(() => {
    player.pos.x = 120; // x bleibt fix, damit der spieler nicht nach vorne oder hinten verschoben wird
});

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


	// wenn spieler brührt zu gameover szene wechseln
    player.onCollide("danger", () => {
        k.go("gameover");
		});

const pipespeed = -150;        // Geschwindigkeit der Röhren
const pipespawning = 3.5;        // Sekunden zwischen neuen Röhren
const pipegap = 130;           // Abstand zwischen oberen und unteren Röhren

// Funktion: neue Röhren erstellen
function spawnPipe() {
    const topheight = k.rand(50, 300);       // zufällige höhe oben
    const bottomy = topheight + pipegap;    // Position der unteren röhre


	const pipeup = k.add([//obere röhre
        k.rect(75, topheight),
        k.pos(640, 0),
        k.color(k.RED),
        k.area(),
        k.body({ isStatic: true }),
        "danger" //macht die röhre gefährlich
    ]);

    const pipedown = k.add([
        k.rect(75, 480 - bottomy),
        k.pos(640, bottomy),
        k.color(k.RED),
        k.area(),
        k.body({ isStatic: true }),
        "danger"
    ]);


    k.onUpdate(() => {
        pipeup.move(pipespeed,0 );
        pipedown.move(pipespeed,0); // lässt die röhren nach links bewegen, "0"da das bewegung y achse ist

        // Röhren löschen, wenn sie aus dem Bildschirm sind
        if (pipeup.pos.x + 75 < 0) { // wenn die röhre oben ist und die x position und die breite der Röhre kleiner als 0 ist, sie also aus dem bild ist wird sie gelöscht
            pipeup.destroy();
            pipedown.destroy();
        }











    });
}




// Pipe automatisch alle pipespawning Sekunden spawnen wird immer wieder wiederholt
k.loop(pipespawning, () => {
    spawnPipe();// es werden neue röhren grössen erstellt
});


//Punkte

// COIN SCORE
let coinScore = 0;

const coinText = k.add([
    k.text("Coins: 0"),
    k.pos(20, 50),
    k.fixed(),
	k.z(1000),
]);

let coiny = k.rand(50, 430);


const coin = k.add([
        k.circle(10),
        k.pos(120, coiny),
        k.color(k.YELLOW),
		k.area(),
        k.body({ isStatic: true }),
		"good" // für die erkennng wie bei den röhren

]);


coin.active = true;

player.onCollide("good", () => { // wenn coin berührt wird es ausgelöst
	 if (!coin.active) return; // verhindert mehrfaches Auslösen
    coin.active = false
    coinScore += 1; // Punktzahl erhöhen
    coinText.text = "Coins: " + coinScore; // anzeige wird aktualisiert

	coin.use(k.opacity(0)); // Coin wird unsichtbar
 coin.use(k.area({ enabled: false })); // berührung aus, damit nicht mehrfach auslösbar
 coin.use(k.body({ enabled: false }));// Physik aus, damit er nicht mehr mit dem Spieler kollidiert
    //  2 Sekunden warten bis das ausgeführt wird
    k.wait(pipespawning, () => {

    // Coin neu positionieren
    coin.pos = k.vec2(120, k.rand(50, 430)); // vec2 ist eine position mit x und y, wird geändert
	coin.use(k.opacity(1)); // wieder sichtbar
	 coin.use(k.area({ enabled: true })); //berührung  wieder an
	 coin.use(k.body({ enabled: true, isStatic: true })); // fixiert, und physik wieder an
	 coin.active = true;

	});
});









    player.onKeyPress("space", () => {	player.jump(250); // Spieler springt
    });
    };


}