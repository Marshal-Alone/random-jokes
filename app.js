const url = "https://dogapi.dog/api/v2/breeds";

const fact = document.querySelector("#fact")

async function getDogBreed() {
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    console.log(data.data[5].attributes.name);
    fact.innerText = data.data[2].attributes.name;
}

// getDogBreed();



const jokeContainer = document.querySelector(".joke");
let setup = document.querySelector("#setup");
let delivery = document.querySelector("#delivery");
const btn = document.querySelector("#btn");

function showJokeContainer() {
    jokeContainer.classList.remove("hide");
}

const emptyJoke = () => {
    setup.innerText = '';
    delivery.innerText = '';
}

const getJoke = async () => {
    emptyJoke();

    let url = "https://v2.jokeapi.dev/joke/Any";

    let response = await fetch(url);
    let jokeData = await response.json();
    console.log(jokeData);
    showJokeContainer();

    if (jokeData.type === "single") {
        setup.innerText = jokeData.joke;
        console.log(jokeData.joke);

    } else {
        setup.innerText = '~ ' + jokeData.setup;
        delivery.innerText = '~ ' + jokeData.delivery;
        console.log(jokeData.setup);
        console.log(jokeData.delivery);
    }



}

btn.addEventListener("click", getJoke);