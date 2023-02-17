let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

//order.forEach(item=>console.log(item.quantity+"       "+item.itemName+"       "+item.unitPrice))

order.forEach(({ quantity: quan, itemName: item, unitPrice: price }) =>
  console.log(quan, item, price)
);
let sum = 0;
for (const { unitPrice: price, quantity: quan } of order) {
  sum += quan * price;
}
console.log(`total: ${sum}`);
