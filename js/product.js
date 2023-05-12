let $ = document;
let backBtn = $.querySelector("button");
let h1Elem = $.querySelector("h1");
let imgElem = $.querySelector("img");

let shoes = [
  { id: 1, title: "sport shoe", price: 25, img: "images/1.png" },
  { id: 2, title: "women shoe", price: 45, img: "images/2.png" },
  { id: 3, title: "boot", price: 75, img: "images/3.png" },
];

let locationParam = new URLSearchParams(location.search);
let locationId = locationParam.get("id");

let ObjectItem = shoes.find((item) => {
  return item.id === Number(locationId);
});

if (ObjectItem) {
  h1Elem.innerHTML = ObjectItem.title;
  console.log(ObjectItem.img);
  imgElem.setAttribute("src", ObjectItem.img);
} else {
  location.href = "http://127.0.0.1:5500/index.html";
}
backBtn.addEventListener("click", () => {
  history.back();
});
// ✌ :))
