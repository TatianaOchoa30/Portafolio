
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter

 .pauseFor(2500)
 .typeString('Bienvenid@ soy Tatiana Ochoa')
 .pauseFor(300)
 .deleteChars(10)
 .start();
