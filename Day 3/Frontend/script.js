const counter = document.getElementById("counter")
const text = document.getElementById("text")
const display = document.getElementById("display")

const update = () => {
    const len = text.value.length
    counter.innerText = len
    if (len > 80) {
        display.style.color = "red";
    } else if (len > 50) {
        display.style.color = "orange";
    } else {
        display.style.color = "black";
    }
}

text.addEventListener("input", update)