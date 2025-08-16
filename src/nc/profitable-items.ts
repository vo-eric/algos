/*

a bakery tracks daily items with:

name (string)

cost (number, cost to make)

price (number, selling price)

sold (number, units sold)

given an array of items for a day, return an array of the names of items that made net profit at least targetProfit.
net profit for an item = (price - cost) * sold.
if no items meet the target, return [].
*/

interface Item {
  name: string;
  cost: number;
  price: number;
  sold: number;
}

/**
 * Time Complexity: O(n) where n is length of the array
 * Space Complexity: O(n) where n is the length of the array
 */
const profitableItems = (itemsSold: Item[], targetProfit: number) => {
  const result: string[] = [];

  for (const item of itemsSold) {
    const { name, cost, price, sold } = item;
    if ((price - cost) * sold >= targetProfit) {
      result.push(name);
    }
  }

  return result;
};

// test case 1
const day1 = [
  { name: "croissant", cost: 1.2, price: 2.5, sold: 30 },
  { name: "bagel", cost: 0.5, price: 1.5, sold: 20 },
  { name: "muffin", cost: 0.8, price: 2.0, sold: 10 },
];
console.log(profitableItems(day1, 20));
// expected: ["croissant", "bagel"]

// test case 2
const day2 = [
  { name: "donut", cost: 0.6, price: 1.0, sold: 15 },
  { name: "brownie", cost: 1.0, price: 3.0, sold: 15 },
  { name: "tart", cost: 2.0, price: 5.0, sold: 1 },
];
console.log(profitableItems(day2, 15));
// expected: ["brownie"]
