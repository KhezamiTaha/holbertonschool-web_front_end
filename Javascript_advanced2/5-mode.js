// Function to change page style using closure
function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

// Main function to set up the page and buttons
function main() {
    // Create themes
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add a paragraph to the body
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Add Spooky button
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    // Add Dark Mode button
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    // Add Scream Mode button
    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
}

// Call the main function
main();
