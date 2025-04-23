// var sitater = [
//   {
//     sitat: "Eg har dårleg sjølvinnsikt.",
//     kjelde: "eit personifisert paradoks",
//   },
//   {
//     sitat: "Eg vil bare lage konfetti i javascript.",
//     kjelde: "Marius",
//     år: "2025",
//   },
// ];

// // Find the button
// const button = document.getElementById("nyttSitat");

// // Add a click event listener
// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
// });

// const quoteElement = document.querySelector(".sitat");

// button.addEventListener("click", function () {
//   const randomIndex = Math.floor(Math.random() * sitater.length);
//   quoteElement.textContent = sitater[randomIndex];
// });

const sitater = [
  {
    sitat: "Eg har dårleg sjølvinnsikt.",
    kjelde: "eit personifisert paradoks",
  },
  {
    sitat: "Eg vil bare lage konfetti i javascript.",
    kjelde: "Marius",
    år: "2025",
  },
  {
    sitat: "Supert spørsmål!",
    kjelde: "chatGPT 4",
    år: "kvar gong eg spør",
  },
  {
    sitat: "mmmm cookies",
    kjelde: "the cookie monster",
    år: "for lenge sidan",
    verk: "i ein galakse langt, langt borte",
  },
];

// const button = document.getElementById("nyttSitat");
// const quoteElement = document.querySelector(".sitat");
// const kjeldeElement = document.querySelector(".namn");
// const årElement = document.querySelector(".år");

// function getRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * sitater.length);
//   return sitater[randomIndex];
// }

// button.addEventListener("click", function () {
//   const randomIndex = Math.floor(Math.random() * sitater.length);
//   quoteElement.textContent = sitater[randomIndex].sitat;
//   kjeldeElement.textContent = quote.kjelde;
// });

const button = document.getElementById("nyttSitat");
const sitatElement = document.querySelector(".sitat");
const kjeldeElement = document.querySelector(".kjelde");
const verkElement = document.querySelector(".verk");
const årElement = document.querySelector(".år");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * sitater.length);
  return sitater[randomIndex];
}

button.addEventListener("click", function () {
  const quote = getRandomQuote();
  sitatElement.textContent = quote.sitat;
  kjeldeElement.textContent = quote.kjelde;
  verkElement.textContent = quote.verk;
  årElement.textContent = quote.år;

  // Only show year if it exists
  årElement.textContent = quote.år ? ` (${quote.år})` : "";
});
