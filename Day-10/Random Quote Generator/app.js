const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const getQuoteBtn = document.querySelector("#quote-generate-btn");
const speech = document.querySelector("#voice-icon");
const copyText = document.querySelector("#copy-icon");
const copied = document.querySelector("#copied");

const fetchQuote = async () => {
  try {
    const response = await fetch("./quotes.json");
    const data = await response.json();

    generateQuote(data);
  } catch (error) {
    console.log(error);
  }
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(
    `${quoteText.textContent}${authorText.textContent}`
  );
  copied.style.display = "block";
  setTimeout(() => {
    copied.style.display = "none";
  }, 2000);
};

const speakText = () => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = `${quoteText.textContent}${authorText.textContent}`;
  window.speechSynthesis.speak(speech);
};

const generateQuote = (data) => {
  getQuoteBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    quoteText.textContent = randomQuote.quote;
    authorText.textContent = `- ${randomQuote.author}`;
  });
};

const handleEvents = () => {
  copyText.addEventListener("click", copyToClipboard);
  speech.addEventListener("click", speakText);
};

fetchQuote();
handleEvents();
