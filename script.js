let button = document.getElementById("btnanswer")
let answer1 = document.getElementById("ans1")
let answer2 = document.getElementById("ans2")
let arrowhour = document.getElementById("arrowhour")
let arrowmin = document.getElementById("arrowmin")

function checkAnswer() {
    if (answer1.value == "111") {
        arrowhour.classList.add("correhour")
    }
    else {
        arrowhour.classList.remove("correhour")

    }
    if (answer2.value == "222") {
        arrowmin.classList.add("corremin")
    }
    else {
        arrowmin.classList.remove("corremin")

    }
}

button.addEventListener('click', checkAnswer);