function generateRandomGame() {
    const games = ["League of Legends", "Valorant", "Counter-Strike", "Lethal Company", "Among Us", "Phasmophobia", "Baldurs Gate 3", "GTA", "Fortnite", "Genshin Impact", "Fall Guys", "Dead By Daylight"];
    const randomGame = generateRandomGameFromArray(games);
    document.getElementById("randomGame").innerText = `Randomly selected game: ${randomGame}`;
}

function generateRandomGameFromArray(gameList) {
    const randomIndex = Math.floor(Math.random() * gameList.length);
    return gameList[randomIndex];
}
