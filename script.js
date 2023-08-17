"use strict";

const counterValue = document.getElementById('Counter');

const increment = () =>{

    let value = parseInt(counterValue.innerText);

    value = value + 1 ;

    counterValue.innerText = value ;

    
}; 


const decrement = () => {

    let value = parseInt(counterValue.innerText);

    value = value - 1 ;

    counterValue.innerText = value ;

}; 



