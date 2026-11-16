let squareArea = document.querySelector('#squareArea');
let squareCount = parseInt(Math.random() * 21)+30; //30-50

for (let i = 0; i < squareCount; i++) {
    let square = document.createElement("div");
    square.className = "square";
    squareArea.append(square);
}