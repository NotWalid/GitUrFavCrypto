export function getRandomRGBColor() {
    const randomColor = {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256)
    };

    return `rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue})`;
}
