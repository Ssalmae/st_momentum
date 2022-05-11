const backgroundImgs = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
];
const randomImg =
  backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];

const img = document.createElement("img");
img.src = `img/${randomImg}`;
img.classList.add("background");
document.body.appendChild(img);
