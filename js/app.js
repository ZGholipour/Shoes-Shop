// DOM => Document Object Model
// BOM => Browser Object Model
let container = document.querySelector(".container");
let shoes = [
  { id: 1, title: "sport shoe", price: 25, img: "images/1.png" },
  { id: 2, title: "women shoe", price: 45, img: "images/2.png" },
  { id: 3, title: "boot", price: 75, img: "images/3.png" },
];

shoes.forEach((item) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="product-card">
        <h1>${item.title}</h1>
        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
        <div class="product-pic" style="background-image: url(${item.img});"></div>
        <div class="product-info">
          <div class="product-price">$${item.price}</div>
          <a href="product.html?id=${item.id}" class="product-button">See More</a>
        </div>
      </div>`
  );
});
