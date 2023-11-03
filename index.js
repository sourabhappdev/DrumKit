
document.addEventListener("keypress", function (e) {

    makesound(e.key);
    buttonAnimation(e.key);
});


for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

    document.querySelectorAll("button")[index].addEventListener("click", function (e) {
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

}




function makesound(key) {


    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default:
            break;
    }

}


function buttonAnimation(key) {


    var active = document.querySelector("."+key);

    active.classList.add("pressed");

    setTimeout(() => {
    active.classList.remove("pressed");
    }, 300);

    
}







