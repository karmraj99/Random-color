let button = document.querySelector(`button`);
let body = document.querySelector(`body`);
let div = document.querySelector(`div`);

button.addEventListener(`click`, function (){
                                div.innerText=random();
                                body.style.backgroundColor=random();}
);

function random() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let change = `rgb(${red},${green},${blue})`;

    return change;
} 

