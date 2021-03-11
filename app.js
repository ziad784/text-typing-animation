
let text = document.getElementById("typing");


let texts = ["what is this photo?", "it`s rosette nebula","text short", "give me star if ", "you like it"];

let letter = "";
let count  = 0;
let i = 0;
let currentText = "";




function type(){

 if(count == texts.length){
     count = 0;
 }

 currentText = texts[count];

 letter = currentText.slice(0,i++);

 text.textContent = letter;

 if(letter.length == currentText.length){
     count++;
     i = 0
 }


 setTimeout(type,500);


}


window.onload = type;