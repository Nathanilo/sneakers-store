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
const quantityTag = document.querySelector(".quantity-tag");
const addToCartBtn = document.querySelector(".add-to-cart");
const cart = document.querySelector(".cart-icon");
const cartSection = document.querySelector(".cart-section");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".icon-close-modal");

let current = 1;

menuIcon.addEventListener("click", function () {
  sideBar.classList.add("open-sidebar");
  backDrop.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  backDrop.style.display = "none";
});

backDrop.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  modal.classList.remove("open-modal");
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

subImages.forEach((subImage) =>
  subImage.addEventListener("click", function (e) {
    const clickedImg = e.target;
    subImages.forEach((subImage) =>
      subImage.classList.remove("sub-product_images--active")
    );
    clickedImg.classList.add("sub-product_images--active");
    productImage.src = clickedImg.src;
  })
);

addToCartBtn.addEventListener("click", function () {
  console.log("clicked");

  if (numberItems.textContent > 0) {
    quantityTag.textContent = "New";
    quantityTag.style.display = "block";
    backDrop.style.display = "block";
    modal.classList.add("open-modal");
  }
});

closeModal.addEventListener("click", function () {
  backDrop.style.display = "none";
  modal.classList.remove("open-modal");
  if (modal.classList.remove("open-modal")) {
    modal.style.display = "none";
  }
});

cart.addEventListener("click", function () {
  cartSection.style.display = "block";
});
