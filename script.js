const menuIcon = document.querySelector(".icon-menu");
const backDrop = document.querySelector(".backdrop");
const sideBar = document.querySelector(".side-bar");
const closeIcon = document.querySelector(".icon-close");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const productImage = document.querySelector(".product-image");
const plusBtn = document.querySelector(".icon-plus");
const minusBtn = document.querySelector(".icon-minus");
const numberItems = document.querySelector(".no-items");

menuIcon.addEventListener("click", function () {
  sideBar.classList.toggle("open-sidebar");
  backDrop.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.toggle("open-sidebar");
  backDrop.style.display = "none";
});

backDrop.addEventListener("click", function () {
  sideBar.classList.toggle("open-sidebar");
  backDrop.style.display = "none";
});

let current = 1;

nextBtn.addEventListener("click", function () {
  if (current <= 3) {
    current++;
    productImage.src = `images/image-product-${current}.jpg`;
    console.log(current);
  } else {
    current = 1;
    productImage.src = `images/image-product-${current}.jpg`;
  }
});

prevBtn.addEventListener("click", function () {
  if (current > 1 && current <= 4) {
    current--;
    productImage.src = `images/image-product-${current}.jpg`;
    console.log(current);
  } else {
    current = 4;
    productImage.src = `images/image-product-${current}.jpg`;
  }
});

plusBtn.addEventListener("click", function () {
  numberItems.textContent++;
});
minusBtn.addEventListener("click", function () {
  if (numberItems.textContent > 0) numberItems.textContent--;
});
