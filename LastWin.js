class LastWin {
constructor(LastMoney){
    
// LastMoney = 0;
let _lastmoney = LastMoney;

this.changeLastWin = (color, colorW, rate) => {
    if(color === colorW) {
        return _lastmoney = rate*2;
    }
    else if(color === colorW) {
        return _lastmoney = rate*60;
    }
    
    else {
        return _lastmoney = "-"
    }
}
}

}
const lastwin = new LastWin()