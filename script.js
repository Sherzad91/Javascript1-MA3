// Oppgave 1

function getRemainder(a,b) {
    return a % b;
    }

const getRemainder = (a, b) => a % b;

// Oppgave 2

const key = "d95ba86532564676adae6967a1eaa6a9";
const gamesUrl = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}';

async function callApi(url){
    const myRes = await fetch(url);
    const data =  await myRes.Json();
    const myArray = data.results;
    document.body.innerHTML = "";

    console.log(myArray);

    for(let i = 0; i < myArray.length; i++){
        document.body.innerHTML += '<div><h3>${myArray[i].name}</h3><p>${mayArray[i].rating}</p><h5>Numbers: ${myArray[i].tags.length}</h5></div>';
        if(i === 7){
            break;
        }
    }
    }
callApi(gamesurl);