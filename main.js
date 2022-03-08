const randomNumber = (par) => {
    let num = Math.random();
    if (par === 0) {
        return Math.floor(num * 10);
    }
    else {
        return Math.floor(num * 20);
    }
}

const whatPilot = () => {
    let pilots = ["Verstappen", "Hamilton", "Bottas", "Perez", "Sainz", "Norris", "Leclerc",
              "Ricciardo", "Gasly", "Alonso", "Ocon", "Vettel", "Stroll", "Tsunoda", "Russel", 
              "Raikkonen", "Latifi", "Giovinazzi", "Schumacher", "Mazepin"];

    let teams = ["Red bull", "Mercedes", "Ferrari", "McLaren", "Alpha Tauri", "Alpine", "Aston Martin", "Williams", "Alfa Romeo", "Haas"];
    let pilotIdx = randomNumber(1);
    let teamIdx = randomNumber(0);
    let pilot = pilots[pilotIdx];
    let team = teams[teamIdx];
    return `You are ${pilot} driving for ${team} starting at ${pilotIdx}.`
}


console.log(whatPilot())