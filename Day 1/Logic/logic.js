function reverse(str) {
    const reverse = []
    for (let i = str.length - 1; i > -1; i--) {
        reverse.push(str[i])

    }
    console.log("Reverse String:", reverse.join(""));
}

reverse("Codify")