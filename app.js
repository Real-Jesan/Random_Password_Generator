// 1. Define all the possible characters we can use
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+/";

// 2. Connect our JavaScript to the HTML elements (IDs)
const passwordDisplay = document.getElementById("password-display");
const lengthInput = document.getElementById("password-length");
const uppercaseCheckbox = document.getElementById("uppercase-checkbox");
const lowercaseCheckbox = document.getElementById("lowercase-checkbox");
const numbersCheckbox = document.getElementById("numbers-checkbox");
const symbolsCheckbox = document.getElementById("symbols-checkbox");
const generateButton = document.getElementById("generate-button");

// 3. The main function that builds the password
function generatePassword() {
    let characterPool = "";
    let finalPassword = "";

    // Add characters to our pool based on what is checked
    if (uppercaseCheckbox.checked === true) {
        characterPool += uppercaseLetters;
    }
    if (lowercaseCheckbox.checked === true) {
        characterPool += lowercaseLetters;
    }
    if (numbersCheckbox.checked === true) {
        characterPool += numbers;
    }
    if (symbolsCheckbox.checked === true) {
        characterPool += symbols;
    }

    // Safety check: Make sure at least one box is checked
    if (characterPool === "") {
        passwordDisplay.innerText = "Select an option!";
        return; // Stop the function here
    }

    // Loop through the pool to pick random characters one by one
    let passwordLength = lengthInput.value;
    
    for (let i = 0; i < passwordLength; i++) {
        // Pick a random spot in our character pool
        let randomIndex = Math.floor(Math.random() * characterPool.length);
        
        // Add that random character to our final password
        finalPassword += characterPool[randomIndex];
    }

    // Show the final password on the screen
    passwordDisplay.innerText = finalPassword;
}

// 4. Make the button run our function when clicked
generateButton.addEventListener("click", function() {
    generatePassword();
});

// 5. Run the function once immediately so a password shows on page load
generatePassword();