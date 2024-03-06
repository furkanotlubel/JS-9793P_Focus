let count = 0;

const button = document.getElementById("incrementButton");

button.addEventListener("click", function () {
    count++;

    const counter = document.getElementById("counter").innerHTML = count;
});


function play(X) {
    const musicFire = `music${X}`;

    const music = document.getElementById(musicFire);

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

