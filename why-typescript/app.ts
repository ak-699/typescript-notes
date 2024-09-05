// function getProduct(id) {
//   return {
//     id,
//     name: `Awesome gadget ${id}`,
//     price: 99,
//   };
// }
// const product = getProduct(1);

// in this the product.Name property exists
// console.log(`The product ${product.Name} costs: ${product.price}`);

// const showProduct = (name, price) => {
//   console.log(`Product name: ${name} and price: ${price}`);
// };

// js dosent care that we misplaced the arguments
// showProduct(product.price, product.name);

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id: number): Product {
  return {
    id,
    name: `Awesome gadget ${id}`,
    price: 99,
  };
}
const product = getProduct(1);
// in this the product.Name property exists
console.log(`The product ${product.name} costs: ${product.price}`);

const showProduct = (name: string, price: number) => {
  console.log(`Product name: ${name} and price: ${price}`);
};
