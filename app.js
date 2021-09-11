var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
//btnTranslate.addEventListener("onclick", function call(){
// var a=prompt("Hey! Dont Worry We are listening to the click events.");

// console.log("you enterd " + txtInput.value );
// })
// //console.log(btnTranslate);

function encoder(){
    var url="https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + txtInput.value
    return url
}


function errorHandler(error){
alert("Hey, It seems that currently the server is down please try after some time" +"\nError : " + error)
    return error
}


function clickHandler() {
    //encoder()
        fetch(encoder())
        .then(response => response.json())
        .then(json => txtOutput.innerText = json.contents.translated)
        .catch(errorHandler())
    
}

btnTranslate.addEventListener("click", clickHandler);



// console.log("you enterd " + txtInput.value)
//     txtOutput.innerText = ("You Entered !! " + txtInput.value);