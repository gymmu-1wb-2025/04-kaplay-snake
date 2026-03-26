import k from "../main";

export default function sc00() {
    return() =>{
        k.add([
            k.text("Willkomen"),
            k.pos(320,240),
            k.anchor("center"),
            k.color(k.RED)]);
            k.onKeyPress("space", () => {
                k.go("level1");
            });

    };
}