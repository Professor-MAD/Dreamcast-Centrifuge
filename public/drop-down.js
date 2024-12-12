
//Search Stuff
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const gameContainers = document.querySelectorAll('.game-container');
    const gameTitles = Array.from(gameContainers, container => container.querySelector('.game-title-text').textContent.toLowerCase());
    const optionsContainer = document.getElementById('searchOptions'); // Get the search options container
    let customGameList = []; // Custom array to store selected games

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const matchingTitles = gameTitles.filter(title => title.includes(searchTerm));

        // Clear existing options
        optionsContainer.innerHTML = '';

        // Show or hide the options container based on search term existence
        if (searchTerm.length > 0) {
            optionsContainer.style.display = 'block'; // Show the options container
            matchingTitles.forEach(title => {
                const option = document.createElement('div');
                option.textContent = title;
                option.classList.add('search-option');

                option.addEventListener('click', function() {
                    const selectedContainer = Array.from(gameContainers).find(container => container.querySelector('.game-title-text').textContent.toLowerCase() === title);
                    if (selectedContainer) {
                        selectedContainer.scrollIntoView({ behavior: 'smooth' });
                        toggleSelected(selectedContainer); // Toggle selected state
                        addToCustomList(title); // Add or remove selected game from custom list
                    }
                });

                optionsContainer.appendChild(option);
            });
        } else {
            optionsContainer.style.display = 'none'; // Hide the options container
        }
    });

    // Hide options when clicking outside the search input
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#searchInput')) {
            optionsContainer.innerHTML = ''; // Clear options
            optionsContainer.style.display = 'none'; // Hide options container
        }
    });

    // Function to toggle selected state of game container
    function toggleSelected(container) {
        container.classList.toggle('selected');
    }

    // Function to add or remove selected game from custom list
    function addToCustomList(gameTitle) {
        if (customGameList.includes(gameTitle)) {
            customGameList = customGameList.filter(title => title !== gameTitle); // Remove the game from the list
        } else {
            customGameList.push(gameTitle); // Add the game to the list
        }
        console.log('Custom Game List:', customGameList); // You can modify this to do something with the custom list
        // Save the custom game list to local storage
        localStorage.setItem('customGameList', JSON.stringify(customGameList));
    }

    // Click event listener for game containers
    gameContainers.forEach(container => {
        container.addEventListener('click', function() {
            toggleSelected(container); // Toggle selected state on click
            const gameTitle = container.querySelector('.game-title-text').textContent.toLowerCase();
            addToCustomList(gameTitle); // Add or remove selected game from custom list
        });
    });

// Hamburger Menu Dropdown
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');

// Add options to the dropdown menu
const options = ['Your Custom List', 'About', 'Contact']; // Changed 'custom-games.html' to 'Your Custom List'
const hrefs = ['custom-games.html', '#', '#']; // Links for each option
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


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBF7HS7mNrTuqPC8PBEt7mSjvedkzwT-xE",
    authDomain: "professormad-be264.firebaseapp.com",
    databaseURL: "https://professormad-be264-default-rtdb.firebaseio.com",
    projectId: "professormad-be264",
    storageBucket: "professormad-be264.appspot.com",
    messagingSenderId: "129071175494",
    appId: "1:129071175494:web:d2fef7779ab59e4ebfb747",
    measurementId: "G-0Y3GJJKYGT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
