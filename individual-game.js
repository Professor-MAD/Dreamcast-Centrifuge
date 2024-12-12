   

// Initialize the dreamcastGames array with the games selected by the user
let dreamcastGames = [];

document.addEventListener('DOMContentLoaded', function() {
    const customGameList = JSON.parse(localStorage.getItem('customGameList')) || [];

    // Add the selected games to the dreamcastGames array
    customGameList.forEach(gameTitle => {
        switch (gameTitle.toLowerCase()) {
            case '4 wheel thunder':
                dreamcastGames.push('4-wheel-thunder.html');
                break;
            case '4x4 evo':
                dreamcastGames.push('4x4-evo.html');
                break;
            case '18 wheeler: american pro trucker':
                dreamcastGames.push('18 Wheeler: American Pro Trucker.html');
                break;
            case '21: two one':
                dreamcastGames.push('21 Two One.html');
                break;
            case 'gauntlet legends':
                dreamcastGames.push('guantlet-legends.html');
                break;
            case 'gunlord':
                dreamcastGames.push('gunlord.html');
                break;
            case 'ikaruga':
                dreamcastGames.push('ikaruga.html');
                break;
            case 'millenium racer':
                dreamcastGames.push('millenium-racer.html');
                break;
            case 'mlb2k1':
                dreamcastGames.push('mlb2k1.html');
                break;
            case 'powerstone':
                dreamcastGames.push('powerstone.html');
                break;
            case 'propeller arena':
                dreamcastGames.push('propeller-arena.html');
                break;
            case 'reel fishing':
                dreamcastGames.push('reel-fishing.html');
                break;
            case 'rez':
                dreamcastGames.push('rez.html');
                break;
            case 'sega bass fishing':
                dreamcastGames.push('sega-bass-fishing.html');
                break;
            case 'sega marine fishing':
                dreamcastGames.push('sega-marine-fishing.html');
                break;
            case 'shenmue':
                dreamcastGames.push('shenmue.html');
                break;
            case 'shenmue ii':
                dreamcastGames.push('shenmue2.html');
                break;
            case 'skies of arcadia':
                dreamcastGames.push('skies.html');
                break;
            case 'sonic adventure':
                dreamcastGames.push('sonic-adventure.html');
                break;
            case 'sturmwind':
                dreamcastGames.push('sturmwind.html');
                break;
            case 'tokyo xtreme racer':
                dreamcastGames.push('tokyo.html');
                break;
            case 'volgar the viking':
                dreamcastGames.push('volgar.html');
                break;
            case 'the typing of the dead':
                dreamcastGames.push('typing-of-dead.html');
                break;
            case 'wetrix':
                dreamcastGames.push('wetrix.html');
                break;

            // Add cases for other selected games

            // Make sure to match the game title exactly with the case statement
            default:
                console.log('Game not found:', gameTitle);
        }
    });

    // Event listener for the random game button
    const randomGameButton = document.getElementById('random-game-button');
    randomGameButton.addEventListener('click', function () {
        const randomGameUrl = getRandomGameUrl();
        window.location.href = randomGameUrl;
    });

    console.log(dreamcastGames[randomDreamcastGame]);
});

// Function to get a random game URL from the updated dreamcastGames array
function getRandomGameUrl() {
    const randomIndex = Math.floor(Math.random() * dreamcastGames.length);
    return dreamcastGames[randomIndex];
}
