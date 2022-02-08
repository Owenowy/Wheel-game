class Mark {
    
    constructor() {
         
       document.querySelectorAll('.colors span').forEach(color => color.addEventListener('click', this.choiceColor));    
       document.querySelectorAll('.stawka span').forEach(rate => rate.addEventListener('click', this.choiceRate));  

  this.Rate = {
        choiceRate1: ""
    } ;
 
   this.Color = {
    choiceColor1: ""
     };

    }
  
choiceRate() {

  mark.Rate.choiceRate1 = this.dataset.option;
    document.querySelectorAll('.stawka span').forEach(rate => rate.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px black'
return [mark.Rate.choiceRate1]
}

 choiceColor() {

     mark.Color.choiceColor1 = this.dataset.option;
    document.querySelectorAll('.colors span').forEach(color => color.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px white';
    
    }  
        
}

const mark = new Mark()