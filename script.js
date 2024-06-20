let boxes = document.querySelectorAll(".box");
let turn = true;
let resetBtn = document.querySelector(".reset")
let clickCount = 0;

let winPatters = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn) {
            box.innerText = "X";
            turn = false;
            document.querySelector(".right-section-content").style.textDecoration = "underline"
            document.querySelector(".right-section-content").style.fontWeight = "bold"
            document.querySelector(".left-section-content").style.textDecoration = "none"
            document.querySelector(".left-section-content").style.fontWeight = "none"
        }
        else {
            box.innerText = "O";
            turn = true;
            document.querySelector(".left-section-content").style.textDecoration = "underline"
            document.querySelector(".left-section-content").style.fontWeight = "bold"
            document.querySelector(".right-section-content").style.textDecoration = "none"
            document.querySelector(".right-section-content").style.fontWeight = "none"
        }
        box.disabled = true;
        checkWinner();
        clickCount++;
        if (clickCount == 9){
            document.querySelector(".msg-section").innerText = "Draw!!!"
        }
    })
    
})

const checkWinner = () => {

    for (let pattern of winPatters) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                document.querySelector(".msg-section").innerText = pos1val + " is the winner!!!";
                for (let box of boxes) {
                    box.disabled = true;
                }
            }
        }
        
    }
    
}

const resetGame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        document.querySelector(".msg-section").innerText = "";
    }
    clickCount = 0;
}

resetBtn.addEventListener("click", resetGame);
