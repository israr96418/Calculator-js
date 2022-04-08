

let screen = document.getElementById('screen');
let Buttons = document.querySelectorAll('button');
let screenvalue= "";
// for the iteration of button i used " for of loop ":
for(item of Buttons){
    item.addEventListener('click', (e)=>{

        let buttonTxt = e.target.innerText;
        // console.log('Innertxt: ',buttonTxt );
        
        if(buttonTxt=='X'){
             buttonTxt ='*';

            // there few methods to write this logic:
            // screen.value += buttonTxt;

            screenvalue += buttonTxt;
            screen.value =  screenvalue;

        }
        else if(buttonTxt == 'C'){
         
            screenvalue ="";
            screen.value = screenvalue; 
            
        }

        else if(buttonTxt =='='){
            screen.value = eval(screenvalue); 

            
        }

        else if(buttonTxt == '+'){
            buttonTxt ='+';
            screenvalue += buttonTxt;
            screen.value = screenvalue; 
            
        }

        else if(buttonTxt == '-'){
            buttonTxt ='-';
            screenvalue += buttonTxt;
            screen.value = screenvalue; 
            
        }

        else if(buttonTxt == '/'){
            buttonTxt ='/';
            screenvalue += buttonTxt;
            screen.value = screenvalue; 
            
        }


        else{
            screenvalue += buttonTxt;
            screen.value =  screenvalue;

        }


    })

}