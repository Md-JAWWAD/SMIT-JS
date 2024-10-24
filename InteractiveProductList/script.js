let productArr = [
  {
    image: "src/assests/pexels-828860-2587370.jpg",
    title: "Liptstick",
    content: "super content 1",
    price: 300,
  },

  {
    image: "src/assests/pexels-binoid-cbd-1990665-3612182.jpg",
    title: "Skin care",
    content: "super content 2",
    price: 600,
  },

  {
    image: "src/assests/pexels-jibarofoto-1738641.jpg",
    title: "SD card",
    content: "super content 3",
    price: 900,
  },

  {
    image: "src/assests/pexels-kpaukshtite-3270223.jpg",
    title: "Vasaline",
    content: "super content 4",
    price: 100,
  },

  {
    image: "src/assests/pexels-madebymath-90946.jpg",
    title: "DSLR",
    content: "super content 5",
    price: 5000,
  },

  {
    image: "src/assests/pexels-pixabay-248412.jpg",
    title: "Plastic jug",
    content: "super content 6",
    price: 50,
  },

  {
    image: "src/assests/pexels-pixabay-258244.jpg",
    title: "Perfume",
    content: "super content 7",
    price: 200,
  },

  {
    image: "src/assests/pexels-pixabay-279480.jpg",
    title: "Lipgloss",
    content: "super content 8",
    price: 500,
  },

  {
    image: "src/assests/pexels-suzyhazelwood-2533266.jpg",
    title: "Makeup box",
    content: "super content 9",
    price: 350,
  },

  {
    image: "src/assests/pexels-olenkabohovyk-3819969.jpg",
    title: "CokaCola",
    content: "super content 10",
    price: 50,
  },
];

productArr.map((e, i) => {
  let productDiv = document.getElementById(`product${i}`);

  productDiv.innerHTML = `<div class="card glass w-56">
    <figure>
      <img src=${e.image} />
    </figure>
    <div class="card-body">
      <h2 class="card-title p-4 justify-center">${e.title}</h2>
      <div class="card-actions justify-center">
        <button class="btn btn-neutral">${e.price}$</button>
        <button onclick="addHandle(${e.price},'${e.title}')" class="btn ">Add</button>
      </div>
    </div>
  </div>`;
});

var totalPrice = 0;
var totalProduct = "";
let i = 0;
function addHandle(charges, name) {

   i = i + 1; 
  //  console.log(i);
   
  console.log(`Price: ${charges}`);
  console.log(`Product: ${name}`);
  console.log(i)
  totalPrice = totalPrice + charges;
  console.log(`Total price = ${totalPrice}`);

  totalProduct = totalProduct + " " + name;
  console.log(`Total products are ${totalProduct}`);

  document.getElementById("total-cart").innerHTML = `${totalProduct}`;
  document.getElementById("total-cart").className = "badge badge-neutral";

  document.getElementById("total-price").innerHTML = `${totalPrice}$`;
  document.getElementById("total-price").className = "badge badge-secondary";

  document.getElementById('total-item').innerHTML = `${i}`
  document.getElementById('total-item').className = "badge badge-outline badge-md"
}

function alertHandle() {
  document.getElementById(
    "alert"
  ).innerHTML = `<div role="alert" class="alert alert-success">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your purchase has been confirmed!</span>
</div>`;
}

function delHandle() {

  document.getElementById("total-cart").innerHTML = "";
  document.getElementById("total-cart").className = "";

  document.getElementById("total-price").innerHTML = "";
  document.getElementById("total-price").className = "";

  document.getElementById('total-item').innerHTML = "";
  document.getElementById('total-item').className = "";
}