class Draw {
    constructor() {
   
    let _result = this.drawResult;
    this.getDrawResult = () => _result;

}

drawResult = (actualDeg) => {
    const symbolColors = {
        1: "black",
        2: "red",
        3: "black",
        4: "red",
        5: "black",
        6: "red",
        7: "black",
        8: "red",
        9: "black",
        10: "red",
        11: "black",
        12: "red",
        13: "black",
        14: "red",
        15: "black",
        16: "red",
        17: "black",
        18: "red",
        19: "black",
        20: "red",
        21: "black",
        22: "red",
        23: "black",
        24: "red",
        25: "black",
        26: "red",
        27: "black",
        28: "red",
        29: "black",
        30: "red",
        31: "black",
        32: "red",
        33: "black",
        34: "red",
        35: "black",
        36: "red",
        37: "green",
}
    let sizeColor = 9.729;
    const winningSymbolNr = Math.ceil(actualDeg / sizeColor);
    document.querySelector('.display').innerHTML = symbolColors[winningSymbolNr]
    if (symbolColors[winningSymbolNr] === "black") {
        document.querySelector('.display').style.color = "black"
    } else if (symbolColors[winningSymbolNr] === "red") {
        document.querySelector('.display').style.color = "red"
    } else {
        document.querySelector('.display').style.color = "green"
    };
return[symbolColors[winningSymbolNr]]
}
}
const draw = new Draw()