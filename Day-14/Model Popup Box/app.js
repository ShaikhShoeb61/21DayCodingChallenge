// Get references to HTML elements
const couponText = document.querySelector("#coupon-text");
const closeIcon = document.querySelector("#close-icon");
const popupContainer = document.querySelector("#popup-container");

// Function to generate a coupon code
const generateCouponCode = () => {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let couponCode = "";

  // Generate characters for the coupon code
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    couponCode += charset.charAt(randomIndex);
  }

  // Insert characters at specific positions
  couponCode = couponCode.slice(0, 2) + couponCode.slice(2, 4) + couponCode.slice(4, 6) + couponCode.slice(6);

  return couponCode;
};

// Function to display a coupon code
const displayCouponCode = () => {
  const couponCode = generateCouponCode();
  console.log(couponCode);
  couponText.innerText = couponCode;
};

// Function to copy the coupon code to the clipboard
const copyCouponCode =  () => {
  // Add Clipboard API logic here to copy the coupon code to the clipboard
  const codeToCopy = couponText.innerText;

  // Using the Clipboard API
  navigator.clipboard.writeText(codeToCopy)
  
};

// Load event listener to display a coupon code on page load
window.addEventListener("load", () => {
  displayCouponCode();
});

// Click event listener for the close icon
closeIcon.addEventListener("click", () => {
  // Hide the popup container
  popupContainer.style.display = "none";
  
  // After a delay, show the popup container again
  setTimeout(() => {
    popupContainer.style.display = "";
  }, 2000); // Adjust the delay time (in milliseconds) as needed
});
