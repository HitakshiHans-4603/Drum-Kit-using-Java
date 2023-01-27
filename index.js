// alert("Hello, Hitakshi! Welcome to Advance javascript");

var totbut = document.querySelectorAll(".drum").length;

for (var i = 0; i < totbut; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var wbt = this.innerHTML;
        sound(wbt);
        activeButton(wbt);


    });
}
document.addEventListener("keypress", function (event) {
    sound(event.key);
    activeButton(event.key);
    
});

function sound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();

            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();

            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();

            break;




        default:
            console.log(buttonInnerHTML);
            break;
    }

}
function activeButton(keys){
    var store=document.querySelector("."+ keys);
    store.classList.add("pressed");
    setTimeout(function(){
        store.classList.remove("pressed");
    },100);
}


