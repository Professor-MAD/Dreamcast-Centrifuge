// Favicon
const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'sonic-icon.svg';
    document.head.appendChild(link);

// Hamburger Menu Dropdown
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');

// Add options to the dropdown menu
const options = ['Your Custom List', 'Home', 'Contact']; // Changed 'custom-games.html' to 'Your Custom List'
let hrefs;
if (window.innerWidth <= 768) {
    // Mobile screen size
    hrefs = ['custom-games-mobile.html', 'index.html', 'contact.html'];
} else {
    hrefs = ['custom-games.html', 'index.html', 'contact.html'];
}
options.forEach((optionText, index) => {
    const option = document.createElement('a');
    option.textContent = optionText;
    option.href = hrefs[index]; // Set the href attribute based on the hrefs array
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


//Noises
document.addEventListener('DOMContentLoaded', function() {
    const gameContainers = document.querySelectorAll('.game-container');
    let selectedContainers = {}; // Object to track selected state of game containers

    // Click event listener for game containers
    gameContainers.forEach(container => {
        container.addEventListener('click', function() {
            const gameTitle = container.querySelector('.game-title-text').textContent.toLowerCase();
            
            if (!selectedContainers[gameTitle]) {
                selectedContainers[gameTitle] = true;
                playSound('Sonic_Ring_Sound_Effect_HD.mp3'); // Play first sound effect
                container.classList.add('selected'); // Add visual indication of selection
            } else {
                selectedContainers[gameTitle] = false;
                playSound('Sonic_Oh_No_Sound_Effect.mp3'); // Play second sound effect
                container.classList.remove('selected'); // Remove visual indication of selection
            }
        });
    });

    // Function to play sound effect
    function playSound(soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
});

// Add event listeners for sign-in dropdown menu
const signInDropdown = document.getElementById('sign-in-dropdown');
const signInOptions = document.getElementById('sign-in-options');

signInDropdown.addEventListener('click', function() {
    signInOptions.style.display = signInOptions.style.display === 'block' ? 'none' : 'block';
});

// Hide sign-in dropdown menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('#sign-in-dropdown')) {
        signInOptions.style.display = 'none';
    }
});