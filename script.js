const menuIcon = document.querySelector(".icon-menu");
const backDrop = document.querySelector(".backdrop");
const sideBar = document.querySelector(".side-bar");
const closeIcon = document.querySelector(".icon-close");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
let productImage = document.querySelector(".product-image");
const plusBtn = document.querySelector(".icon-plus");
const minusBtn = document.querySelector(".icon-minus");
const numberItems = document.querySelector(".no-items");
const subImages = document.querySelectorAll(".sub-product_image");

let current = 1;

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

nextImg = function () {
  if (current <= 3) {
    current++;
    productImage.src = `images/image-product-${current}.jpg`;
  } else {
    current = 1;
    productImage.src = `images/image-product-${current}.jpg`;
  }
};

prevImg = function () {
  if (current > 1 && current <= 4) {
    current--;
    productImage.src = `images/image-product-${current}.jpg`;
  } else {
    current = 4;
    productImage.src = `images/image-product-${current}.jpg`;
  }
};
nextBtn.addEventListener("click", nextImg);

prevBtn.addEventListener("click", prevImg);

plusBtn.addEventListener("click", function () {
  numberItems.textContent++;
});
minusBtn.addEventListener("click", function () {
  if (numberItems.textContent > 0) numberItems.textContent--;
});

//get image container of main image
//get image container of sub images
//add event listeners of click to sub images
subImages.forEach((subImage) =>
  subImage.addEventListener("click", function (e) {
    //if sub image is clicked, display sub image as main

    const clickedImg = e.target;
    subImages.forEach((subImage) =>
      subImage.classList.remove("sub-product_images--active")
    );
    clickedImg.classList.add("sub-product_images--active");
    productImage.src = clickedImg.src;
  })
);
