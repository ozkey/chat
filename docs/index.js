function play() {
    var audio = new Audio('mail.mp3');
    audio.play();
}
function mail(){
    var inputElement = document.getElementById('milli');
    var inputValue = inputElement.value;

    // clear input value
    inputElement.value = '';

    if (isNaN(inputValue)) {
        inputValue = 30000
    }else{
        inputValue = Number(inputValue);
    }

    if (inputValue< 10 ) inputValue = 10000
    console.log(inputValue)
    setTimeout( play,inputValue)
}