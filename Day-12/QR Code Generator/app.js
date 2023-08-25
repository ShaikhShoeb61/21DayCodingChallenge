// Get a reference to the QR code container
const qrCodeContainer = document.querySelector("#Qr-code-container");

// Get a reference to the generate button
const generateQrBtn = document.querySelector("#genrate-btn");

// Function to generate and display a QR code
const generateQr = (inputText) => {
  // Clear previous QR code from the container
  qrCodeContainer.innerHTML = "";

  // Construct the URL for generating the QR code
  let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;

  // Create an img element for the QR code
  const qr = document.createElement("img");
  qr.src = url;

  // Append the QR code image to the container
  qrCodeContainer.appendChild(qr);

  // Clear the input value
  inputText.value = "";
};

// Attach a click event listener to the generate button
generateQrBtn.addEventListener("click", () => {
  // Get the input element
  const inputText = document.querySelector("#input-text");

  // Call the generateQr function with the input element
  generateQr(inputText);
});
