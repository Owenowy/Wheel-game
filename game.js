class Game {
    constructor(start) {
        this.sound = new Sound();
        this.calc = new Calc();
        this.resultCash = new ResultCash();
        this.lastwin = new LastWin("-");
        this.wallet = new Wallet(start);
        this.data = new Data();

document.getElementById('start').addEventListener('click', this.startGame.bind(this));       
 }

  async startGame() {
        const rate = mark.Rate.choiceRate1;
const color = mark.Color.choiceColor1; 
if(!rate) {return alert("Proszę wybrać stawkę")}
 else if(!color) {return alert("Proszę wybrać kolor")}
    else if(!this.wallet.checkCanPlay(rate)) {return alert("Masz za mało środków aby zagrać")};
        

        this.calc.CalcDeg();
        this.calc.actualDeg();
        this.calc.startCalc();

        this.sound.startSound();
        this.draw = new Draw(); 
        this.draw.drawResult(this.calc.getActualDeg())
        
       
    
    const colorW = this.data.display.innerHTML;   
    setTimeout(this.wallet.changeWallet(rate, color, colorW), 3000); 
    const hajs = this.wallet.getWalletValue();
    const hajs2 = this.lastwin.changeLastWin(color, colorW, rate)

this.calc.startWheel();
    
await sleep(3000);
    this.resultCash.getResult(hajs, hajs2);
    effects.effectWin(color, colorW);     
    }   
}
function sleep(ms) {
    return new Promise (
        resolve =>  setTimeout(resolve, ms)
    );
}