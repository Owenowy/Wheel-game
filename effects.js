class Effects {
   constructor()  {
 this.lastM = document.querySelector('.result2'); 
 var snd = new Audio("dzwiek2.mp3");
 this.loop = false;
 this.autoplay = false;
 
 this.effectWin = (color, colorW) => {
     if(color === colorW){
this.lastM.style.animationName = 'colors';

snd.play()
     }
    else{
        this.lastM.style.animationName = '';  
    } } }      
}

const effects = new Effects();