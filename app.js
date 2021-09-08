var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
//btnTranslate.addEventListener("onclick", function call(){
// var a=prompt("Hey! Dont Worry We are listening to the click events.");

// console.log("you enterd " + txtInput.value );
// })
// //console.log(btnTranslate);

function clickHandler(){
    console.log("you enterd " + txtInput.value )
    txtOutput.innerText= ("You Entered !! "+txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler);

