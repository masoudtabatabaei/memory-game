const lives = document.querySelector(".lives");
const playground = document.querySelector(".playground");
const livesCount = 6;

lives.textContent = livesCount;

// card data
const getData = () => [
  {imageSrc: "./images/coding.png", name: "coding"},
  {imageSrc: "./images/docker.png", name: "docker"},
  {imageSrc: "./images/github.png", name: "github"},
  {imageSrc: "./images/internet.png", name: "internet"},
  {imageSrc: "./images/js.png", name: "javascript"},
  {imageSrc: "./images/json-file.png", name: "json-file"},
  {imageSrc: "./images/structure.png", name: "structure"},
  {imageSrc: "./images/typescript.png", name: "typescript"},
  {imageSrc: "./images/coding.png", name: "coding"},
  {imageSrc: "./images/github.png", name: "github"},
  {imageSrc: "./images/typescript.png", name: "typescript"},
  {imageSrc: "./images/docker.png", name: "docker"},
  {imageSrc: "./images/js.png", name: "javascript"},
  {imageSrc: "./images/structure.png", name: "structure"},
  {imageSrc: "./images/json-file.png", name: "json-file"},
  {imageSrc: "./images/internet.png", name: "internet"},
];

// randomize data
const randomizeData = () => {
  return getData().sort(() => Math.random() - 0.5);
}

// render game cards
const createCards = () => {
  let playgroundCards = '';
  randomizeData().forEach(card => {
    playgroundCards += `
        <div class="card-container">
            <div class="card">
                <img src="${card.imageSrc}">
            </div>
        </div>
    `;
  });

  playground.innerHTML = playgroundCards;
}

createCards();
