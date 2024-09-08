const display = document.getElementById("displaydiv");

function displayValue(value){
   display.value += value;
}

function clearDisplay(){
   display.value ="";
}

function percent(){
   display.value = eval(display.value / 100);
}

function displayResult(){
   try{
      display.value = eval(display.value);
   }

   catch(error){
      display.value = "Error";
   }
}