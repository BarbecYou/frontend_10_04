let lista2 = document.createElement('ul');
const burgerCalorie = 1000;
const friesCalorie = 600;
const cokeCalorie = 400;
let totalCalories = 0;

function init(){
    let lista = document.createElement('ul');
    let elsoElem = document.createElement('li');
    let masodikElem = document.createElement('li');
    let harmadikElem = document.createElement('li');
    let pic1 = document.createElement('img');
    let pic2 = document.createElement('img');
    let pic3 = document.createElement('img');
    pic1.src = './hamburger.jpg';
    pic1.style.width = '200px';
    pic2.src = './fries.jpg';
    pic2.style.width = '200px';
    pic3.src = './coke.jpg';
    pic3.style.width = '200px';
    lista.style.listStyle = 'none';
    lista.style.display = 'flex';
    lista.style.justifyContent = 'space-around';
    elsoElem.appendChild(pic1);
    masodikElem.appendChild(pic2);
    harmadikElem.appendChild(pic3);
    elsoElem.addEventListener('click', burgerHozzaad);
    masodikElem.addEventListener('click', krumpliHozzad);
    harmadikElem.addEventListener('click', colaHozzaad);

    lista.appendChild(elsoElem);
    lista.appendChild(masodikElem);
    lista.appendChild(harmadikElem);
    document.body.appendChild(lista);

    let p = document.createElement('p');
    p.id = 'resultCalories';
    document.body.appendChild(p);

    let torlesGomb = document.createElement('button');
    torlesGomb.id = 'torlesGomb';
    torlesGomb.textContent = 'Lista törlése';
    torlesGomb.addEventListener('click', listaTorles);
    document.body.appendChild(torlesGomb);

    document.body.appendChild(lista2);    
    
}

function listaTorles(){
    totalCalories = 0;
    calorieUpdate(0);
    lista2.innerHTML = '';
}

function burgerHozzaad(){
    let elem = document.createElement('li');
    let s = burgerCalorie.toString();
    elem.innerHTML = 'hamburger (<i>' + s + '</i>)';
    lista2.appendChild(elem);
    calorieUpdate(burgerCalorie);
}
function krumpliHozzad(){
    let elem = document.createElement('li');
    let s = friesCalorie.toString();
    elem.innerHTML = 'hasábburgonya (<i>' + s + '</i>)';
    lista2.appendChild(elem);
    calorieUpdate(friesCalorie);
}
function colaHozzaad(){
    let elem = document.createElement('li');
    let s = cokeCalorie.toString();
    elem.innerHTML = 'kóla (<i>' + s + '</i>)';
    lista2.appendChild(elem);
    calorieUpdate(cokeCalorie);
}

function calorieUpdate(calorie){
    totalCalories += calorie;
    console.log(totalCalories);
    document.getElementById('resultCalories').textContent = "összes bevitt kalória: " + totalCalories;
}

document.addEventListener('DOMContentLoaded', init);