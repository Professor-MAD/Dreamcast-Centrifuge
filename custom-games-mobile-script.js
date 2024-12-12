

// Hamburger Menu Dropdown
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');

// Add options to the dropdown menu
const options = ['Home', 'Option 2', 'Option 3']; // Change 'drop-down.html' to 'Home'
options.forEach(optionText => {
    const option = document.createElement('a');
    option.textContent = optionText;
    if (optionText === 'Home') {
        option.href = 'index.html'; // Set the href attribute to the correct page
    } else {
        option.href = '#'; // Placeholder for other options
    }
    dropdownMenu.appendChild(option);
});

// Append dropdown menu to the header
document.getElementById('header').appendChild(dropdownMenu);

// Toggle dropdown menu visibility on hamburger menu click
hamburgerMenu.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.hamburger-menu')) {
        dropdownMenu.style.display = 'none';
    }
});


//Custom Game Stuff
document.addEventListener('DOMContentLoaded', function() {
    const customGameList = JSON.parse(localStorage.getItem('customGameList')) || [];
    const customGameListElement = document.getElementById('customGameList');

    // Function to create a list item with game artwork
    function createGameListItem(gameTitle, gameArtPath) {
        const listItem = document.createElement('li');
        const gameArt = document.createElement('img');
        gameArt.src = gameArtPath;
        gameArt.alt = gameTitle;
        listItem.appendChild(gameArt);
        customGameListElement.appendChild(listItem);
    }

    // Display each selected game with its artwork
    customGameList.forEach(gameTitle => {
        switch (gameTitle.toLowerCase()) {
            case '4 wheel thunder':
                createGameListItem(gameTitle, 'Search Library Art/4_Wheel_Thunder_ntsc-front.jpg');
                break;
            case '4x4 evo':
                createGameListItem(gameTitle, 'Search Library Art/4x4_Evolution_DC.jpg');
                break;
            case '18 wheeler: american pro trucker':
                createGameListItem(gameTitle, 'Search Library Art/eighteen wheeler.jpg');
                break;
            case '21: two one':
                createGameListItem(gameTitle, 'Search Library Art/21-Two_One-_Dreamcast_Limited_Edition_Cover.jpeg');
                break;
            case '90 minutes: sega championship football':
                createGameListItem(gameTitle, 'Search Library Art/90_Minutes.jpg');
                break;
            case "disney's 102 dalmatians: puppies to the rescue":
                createGameListItem(gameTitle, 'Search Library Art/dalmatians.jpg');
                break;
            case 'advanced daisenryaku 2001 ':
                createGameListItem(gameTitle, 'Search Library Art/Advanced Daisenryaku 2001.jpg');
                break;
            case 'advanced daisenryaku: europe no arash':
                createGameListItem(gameTitle, 'Search Library Art/Advanced Daisenryaku Europe no Arashi  Doitsu Dengeki Sakusen.jpg');
                break;
            case 'aero dancing':
                createGameListItem(gameTitle, 'Search Library Art/Aero Dancing F Todoroki Tsubasa no Hatsu Hikou.jpg');
                break;
            case 'aerowings':
                createGameListItem(gameTitle, 'Search Library Art/Aerowings.jpg');
                break;
            case 'aerowings 2: airstrike':
                createGameListItem(gameTitle, 'Search Library Art/Aerowings-2-Airstrike.jpg');
                break;
            case 'after...':
                createGameListItem(gameTitle, 'Search Library Art/after.jpg');
                break;
            case 'gauntlet legends':
                    createGameListItem(gameTitle, 'guantlet-legends.jpg');
                    break;
            case 'gunlord':
                    createGameListItem(gameTitle, 'gunlord.jpg');
                    break;
            case 'ikaruga':
                    createGameListItem(gameTitle, 'ikaruga.jpg');
                    break;
            case 'millenium racer':
                    createGameListItem(gameTitle, 'milleniumracerimage.jpg');
                    break;
            case 'mlb2k1':
                    createGameListItem(gameTitle, 'worldseriesbaseball2k1image.jpg');
                    break;
            case 'powerstone':
                    createGameListItem(gameTitle, 'powerstoneimage.jpg');
                    break;
            case 'propeller arena':
                    createGameListItem(gameTitle, 'propellerarenaimage.jpg');
                    break;
            case 'reel fishing':
                    createGameListItem(gameTitle, 'reelfishingimage.jpg');
                    break;
            case 'rez':
                    createGameListItem(gameTitle, 'rez.jpg');
                    break;
            case 'sega bass fishing':
                    createGameListItem(gameTitle, 'SegaBassFishing.jpg');
                    break;
            case 'sega marine fishing':
                    createGameListItem(gameTitle, 'Segamarinefishing.jpg');
                    break;
            case 'shenmue':
                    createGameListItem(gameTitle, 'shenmue.jpg');
                    break;
            case 'shenmue ii':
                    createGameListItem(gameTitle, 'shenmue2.jpg');
                    break;
            case 'skies of arcadia':
                    createGameListItem(gameTitle, 'skiesofarcadia.jpg');
                    break;
            case 'sonic adventure':
                    createGameListItem(gameTitle, 'Sonic_Adventure.jpg');
                    break;
            case 'sturmwind':
                    createGameListItem(gameTitle, 'sturmwind.jpg');
                    break;
            case 'tokyo xtreme racer':
                    createGameListItem(gameTitle, 'tokyoimage.jpg');
                    break;
            case 'the typing of the dead':
                    createGameListItem(gameTitle, 'typing-of-dead.jpeg');
                    break;
            case 'volgar the viking':
                    createGameListItem(gameTitle, 'volgarimage.jpg');
                    break;
            case 'wetrix':
                    createGameListItem(gameTitle, 'wetrix.jpg');
                    break;

            // Make sure to match the game title exactly with the case statement
            default:
                console.log('Artwork not found for:', gameTitle);
        }
    });

    // Other code for random game button, etc.
});

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

    // Other code for custom game list display, random game button, etc.
});

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
