let button1 = document.getElementById("btnanswer1")
let button2 = document.getElementById("btnanswer2")
let answer1 = document.getElementById("ans1")
let answer2 = document.getElementById("ans2")
let arrowhour = document.getElementById("arrowhour")
let arrowmin = document.getElementById("arrowmin")

function checkAnswer1() {
    if (answer1.value == "111") {
        arrowhour.classList.add("correhour")
    }
    else {
        arrowhour.classList.remove("correhour")

    }
   
}
function checkAnswer2() {
    if (answer2.value == "222") {
        arrowmin.classList.add("corremin")
    }
    else {
        arrowmin.classList.remove("corremin")

    }
   
}

button1.addEventListener('click', checkAnswer1);
button2.addEventListener('click', checkAnswer2);
 