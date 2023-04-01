const productArray = [
  {
    id: 1,
    name: "Men Shoe",
    details: "This is the first product.",
    price: 19,
    image:
      "https://th.bing.com/th?q=Nike+Men%27s+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=BD&setlang=en&adlt=moderate&t=1&mw=247",
  },
  {
    id: 2,
    name: "Men Shoe",
    details: "This is the second product.",
    price: 20,
    image:
      "https://th.bing.com/th/id/OIP.UPL4i0xvmWRJSPOvG47L0AHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 3,
    name: "Men Shoe",
    details: "This is the third product.",
    price: 30,
    image:
      "https://th.bing.com/th/id/OIP.vIa12lARnhIbAVSKHJ_-eAHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    name: "Men Shoe",
    details: "This is the fourth product.",
    price: 39,
    image:
      "https://th.bing.com/th/id/OIP.vIa12lARnhIbAVSKHJ_-eAHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 5,
    name: "Women Shoe",
    details: "This is the fifth product.",
    price: 23,
    image:
      "https://th.bing.com/th/id/OIP.vIa12lARnhIbAVSKHJ_-eAHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 6,
    name: "Men Nike",
    details: "This is the Men Nike Shoe.",
    price: 32,
    image:
      "https://th.bing.com/th/id/OIP.vIa12lARnhIbAVSKHJ_-eAHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

function getProductData(id) {
  let productData = productArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log(`productData not found for id ${id}`);
    return undefined;
  }
  return productData;
}

export { productArray, getProductData };
