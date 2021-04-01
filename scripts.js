// Make Cards
const sectionCards = document.querySelector('section > .cards');

const card = document.querySelector(".card");

const posts = [
  {
    title: "Eletric",
    thumb: "https://www.harley-davidson.com/content/dam/h-d/images/category-images/2021/overlap-media-card/electric-motorcycle-overlap-media-card.jpg?impolicy=myresize&rw=1250",
    info: "Ride the Future. Get instant power and acceleration with a twist of the throttle. No clutch, no gas. Pure performance"
  },
  {
    title: "Street",
    thumb: "https://www.harley-davidson.com/content/dam/h-d/images/category-images/2021/overlap-media-card/street-motorcycle-overlap-media-card.jpg?impolicy=myresize&rw=1250",
    info: "Built to shred city streets. Sleek and nimble, with an authentic urban attitude."
  },
  {
    title: "Adventure",
    thumb: "https://www.harley-davidson.com/content/dam/h-d/images/category-images/2021/overlap-media-card/adventure-motorcycle-overlap-media-card.jpg?impolicy=myresize&rw=1250",
    info: "Where touring becomes detouring, and everything is a road."
  },
  {
    title: "Cruiser",
    thumb: "https://www.harley-davidson.com/content/dam/h-d/images/category-images/2021/overlap-media-card/cruiser-motorcycle-overlap-media-card.jpg?impolicy=myresize&rw=1250",
    info: "Authentic heritage meets modern technology for power, style, and the unadulterated riding experience – around town or along country roads."
  },
  {
    title: "Trike",
    thumb: "https://www.harley-davidson.com/content/dam/h-d/images/category-images/2021/overlap-media-card/trike-motorcycle-overlap-media-card.jpg?impolicy=myresize&rw=1250",
    info: "Roll with confidence, comfort, and head-turning custom style on three wheels."
  },
  {
    title: "Touring",
    thumb: "https://www.harley-davidson.com/content/dam/h-d/images/category-images/2021/overlap-media-card/touring-motorcycle-overlap-media-card.jpg?impolicy=myresize&rw=1250",
    info: "Go the distance and discover the wide-open world in the most epic way possible."
  },

];

posts.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > .text--medium").innerHTML = video.info;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
