const display = document.getElementById("display")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")

let count = 0
increase.addEventListener("click", () => {
    count += 1
    display.innerText = count
})
decrease.addEventListener("click", () => {
    if (count <= 0) {
        return
    }
    count -= 1
    display.innerText = count
})
reset.addEventListener("click", () => {
    count = 0
    display.innerText = count
})
