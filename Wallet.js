
class Wallet {
    constructor(money) {
        let _money = money;
        this.getWalletValue = () => _money
        
        this.checkCanPlay = value => {
            if(_money >= value) return true;
            return false;
            
        }

this.changeWallet = (value, color, colorW) => {
          
if(color === colorW) {
    console.log(colorW)
    return _money += value*2;
}
else if(color === colorW) {
    return _money += value*60;
}

else {
    return _money -= value;
}
        }

    }
}

