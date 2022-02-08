class Calc {

    constructor() {
this.data = new Data();
let deg = 0;
let _deg = deg;
let _actualDeg = 0;
this.getDeg = () => _deg
this.getActualDeg = () => _actualDeg
console.log(this.getDeg())
    
this.CalcDeg = () => {
    _deg = Math.floor(5000 + Math.random() * 5000); 
     return _deg
}
this.actualDeg = () => { 
    _actualDeg = this.getDeg() % 360;
    return _actualDeg
}
}
startCalc() {
    
    this.data.display.innerHTML = "-"; 
        this.data.display2.style.position = 'fixed'
        this.data.display.style.position = 'relative'
        this.data.startButton.style.pointerEvents = 'none';
        this.data.wheel.style.transition = 'all 3s ease-out';
        console.log(this.getDeg())
        this.data.wheel.style.transform = `rotate(${this.getDeg()}deg)`;
}
startWheel() {
    const actualDeg = this.getActualDeg()
     this.data.wheel.addEventListener('transitionend', () => {
             
         this.data.startButton.style.pointerEvents = 'auto';
         this.data.wheel.style.transition = 'none';
         this.data.wheel.style.transform = `rotate(${actualDeg}deg)`;
         console.log(actualDeg)
         this.data.display2.style.position = 'relative'
         this.data.display.style.position = 'fixed'
 
     })
}
}

 

    
