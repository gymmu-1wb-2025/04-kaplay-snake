import k from "../main";

export default function sc00() {
    return() =>{
        k.add([
            k.text("Hallo"),
            k.pos(320,240),
            k.anchor("center")]);
            k.onKeyPress("enter", () => {
                k.go("level1");
            });

    };
}