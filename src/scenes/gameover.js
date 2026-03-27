import k from "../main";


export default function gameover() {
    return () =>{
        k.add([
            k.text("Game Over"),
            k.pos(320,240),
            k.anchor("center"),
            k.color(k.RED)]);
            k.onKeyPress("space", () => {
                k.go("level1");
            });

    };
}
