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
            box.disable = true;
            check();
        }
        else {
            box.innerText = "X";
            current = "o";
            box.disable = true;
            check();
        }
       
    }
}

for (let bt of btn) {
    bt.onclick = () => {
        current = "o";
        for (let box of boxes) {
            box.innerText = "";
            box.disable = false;
        }
    }
}

let win = document.querySelector(".result");

const check = () => {
    for (let arr of win_condition) {
        if (boxes[arr[0]].innerText != "" && boxes[arr[1]].innerText != "" && boxes[arr[2]].innerText != "") {
            if (boxes[arr[0]].innerText == boxes[arr[1]].innerText && boxes[arr[0]].innerText == boxes[arr[2]].innerText) {
                let win = document.querySelector(".result");
                win.classList.add(".result");
                win.classList.remove(".hide");
                
            }
        }
    }
}


