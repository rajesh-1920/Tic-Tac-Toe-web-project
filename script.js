let boxes = document.querySelectorAll(".box");
let btn = document.querySelectorAll(".reset-btn");

let win_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let current = "o";

for (let box of boxes) {
    box.onclick = () => {
        if (current === "o") {
            box.innerText = "O";
            current = "x";
            box.disabled = true;
            check();
        }
        else {
            box.innerText = "X";
            current = "o";
            box.disabled = true;
            check();
        }

    }
}

let win = document.querySelector(".result");
let msg = document.querySelector("#message");

for (let bt of btn) {
    bt.onclick = () => {
        current = "o";
        for (let box of boxes) {
            box.innerText = "";
            box.disabled = false;
            win.classList.remove("result");
            win.classList.add("hide");
            msg.innerText = "";
        }
    }
}

const check = () => {
    for (let arr of win_condition) {
        let val0 = boxes[arr[0]].innerText
        let val1 = boxes[arr[1]].innerText
        let val2 = boxes[arr[2]].innerText;
        if (val0 != "" && val1 != "" && val2 != "") {
            if (val0 == val1 && val0 == val2) {
                win.classList.add("result");
                win.classList.remove("hide");
                msg.innerText = "congratulations " + (val0) + " you are the winer";
            }
        }
    }
}


