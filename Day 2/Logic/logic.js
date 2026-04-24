function vowels(str) {
    const vowels = "aeiou"
    let count = 0
    const lowercase = str.toLowerCase()
    for (let i = 0; i < lowercase.length; i++) {
        if (vowels.includes(lowercase[i])) {
            count += 1
        }
    }
    console.log(count);
}

vowels("JavaScript")