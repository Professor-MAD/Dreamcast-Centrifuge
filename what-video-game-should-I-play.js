// Dreamcast Games Array
const dreamcastGames = ['sonic-adventure.html', 'shenmue.html', 'wetrix.html', 'gunlord.html', 'sturmwind.html', 'sega-marine-fishing.html', 'sega-bass-fishing.html',
'rez.html', 'typing-of-dead.html', 'guantlet-legends.html', 'shenmue2.html', 'reel-fishing.html', 'skies.html', 'powerstone.html', 'propeller-arena.html', 'millenium-racer.html', 'mlb2k1.html',
'tokyo.html', 'volgar.html'];

// Function to get a random game URL
function getRandomGameUrl() {
    const randomIndex = Math.floor(Math.random() * dreamcastGames.length);
    return dreamcastGames[randomIndex];
}

// Event listener for the random game button
const randomGameButton = document.getElementById('random-game-button');
randomGameButton.addEventListener('click', function () {
    const randomGameUrl = getRandomGameUrl();
    window.location.href = randomGameUrl;
});

console.log(dreamcastGames[randomDreamcastGame]);

// N64 Starts Here

const N64Games = ['Mario 64', 'Mario Kart', 'Zelda: Ocarina of Time', 'Kirby: Crystal Shards', 'Quake'];

const randomN64Game = Math.floor(Math.random()*N64Games.length);

console.log(N64Games[randomN64Game]);
