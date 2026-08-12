const startBtn = document.querySelector(".start-btn");

const scene1 = document.querySelector("#scene1");
const scene2 = document.querySelector("#scene2");
const scene3 = document.querySelector("#scene3");
const scene4 = document.querySelector("#scene4");
const scene5 = document.querySelector("#scene5");
const scene6 = document.querySelector("#scene6");

const daysCounter = document.querySelector("#daysCounter");

const backgroundMusic = document.querySelector("#backgroundMusic");
backgroundMusic.volume = 0.20;

startBtn.addEventListener("click", () => {

    backgroundMusic.play();

    scene1.classList.remove("active");
    scene2.classList.add("active");

    setTimeout(() => {

        scene2.classList.remove("active");
        scene3.classList.add("active");

        setTimeout(() => {

            scene3.classList.remove("active");
            scene4.classList.add("active");

            startDaysCounter(); 

            setTimeout(() => {

                scene4.classList.remove("active");
                scene5.classList.add("active");

                setTimeout(() => {

                    scene5.classList.remove("active");
                    scene6.classList.add("active");

                    setTimeout(() => {

                        fadeOutMusic();

                    }, 7000);

                    // Sigurno zaustavljanje nakon 9 sekundi

                    setTimeout(() => {

                        backgroundMusic.pause();
                        backgroundMusic.currentTime = 0;
                        backgroundMusic.volume = 0.20;

                    }, 9000);

                }, 8000);

            }, 6000);

        }, 5000);

    }, 7000);

});

function startDaysCounter() {

    let currentNumber = 0;

    const counter = setInterval(() => {

        currentNumber++;

        daysCounter.textContent = currentNumber;

        if (currentNumber === 365) {
            clearInterval(counter);
        }

    }, 11);

}

function fadeOutMusic() {

    const fadeInterval = setInterval(() => {

        if (backgroundMusic.volume > 0.02) {

            backgroundMusic.volume = Math.max(
                0,
                backgroundMusic.volume - 0.02
            );

        } else {

            clearInterval(fadeInterval);

            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            backgroundMusic.volume = 0.20;

        }

    }, 200);

}