// Get references to HTML elements
const generateBtn = document.querySelector("#generate-btn");
const inputText = document.querySelector("#password");

// Set initial values
let length = 8;

// Function to generate a random password
const generateRandomPassword = (length) => {
  // Define the character set for password generation
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  // Generate the password based on the specified length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

// Function to display a randomly generated password
const displayRandomPassword = (inputText) => {
  const randomPassword = generateRandomPassword(length);
  inputText.value = randomPassword;
};

// Function to copy the password to the clipboard
const copyPassword = () => {
  inputText.select();
  document.execCommand("copy");
};

// Event listener for the "Generate" button
generateBtn.addEventListener("click", () => {
  displayRandomPassword(inputText);
});
