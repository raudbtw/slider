const imgs = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/5.png",
  "./img/6.png",
  "./img/7.png",
  "./img/8.jpg",
  "./img/9.png",
];

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slideImg = document.querySelector(".slide-img");
let currentImg = 0;

function nextPic() {
  currentImg++;
  if (currentImg === imgs.length - 1) {
    nextButton.disabled = true;
  }
  prevButton.disabled = false;
  slideImg.src = imgs[currentImg];
}

function pervPic() {
  currentImg--;
  slideImg.src = imgs[currentImg];
  nextButton.disabled = false;
  if (currentImg === 0) {
    prevButton.disabled = true;
  }
}

nextButton.addEventListener("click", nextPic);
prevButton.addEventListener("click", pervPic);

slideImg.src = imgs[currentImg];
prevButton.disabled = true;
