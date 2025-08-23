// you have a bunch of customer purchase data at a major online retailer.
// you're trying to generate a mailing list of super-spenders on the site.
// a super-spender is defined as someone who spent over $100 last month.
// given the customer data base and the purchase data from last month,
// produce a list of emails of customers who are super-spenders.

const customers = [
  { id: 1, email: "will@email.com", language: "es" },
  { id: 2, email: "paris@email.com", language: "en" },
  { id: 3, email: "jo@email.com", language: "en" },
  { id: 4, email: "zara@email.com", language: "fr" },
  { id: 5, email: "lee@email.com", language: "ko" },
];

const orderData = [
  { customerId: 1, items: 3, amount: 6 },
  { customerId: 2, items: 1, amount: 45 },
  { customerId: 3, items: 2, amount: 60 },
  { customerId: 2, items: 2, amount: 70 },
  { customerId: 4, items: 5, amount: 101 },
  { customerId: 1, items: 10, amount: 120 },
  { customerId: 3, items: 1, amount: 39 },
];

// totals: id1=126, id2=115, id3=99, id4=101, id5=0
const expectedOutput = ["will@email.com", "paris@email.com", "zara@email.com"];

type Customer = {
  id: number;
  email: string;
  language: string;
};

type Order = {
  customerId: number;
  items: number;
  amount: number;
};
/*

set result array
create customerOrderData map/object
iterate through order data
  add amount to customerData
    if amount is greater than 100, add it to the result

*/
const getSuperSpenders = (customers: Customer[], orders: Order[]): string[] => {
  const superSpenders = new Set<string>();
  const customerOrderData: Record<number, number> = {};

  for (const order of orders) {
    const { customerId, amount } = order;
    customerOrderData[customerId] =
      (customerOrderData[customerId] ?? 0) + amount;

    if (customerOrderData[customerId] > 100) {
      // console.log("customer data", customerId, customers[customerId]);
      // console.log("inside", customers[customerId]);
      const customer = customers.find((customer) => customer.id === customerId);
      superSpenders.add(customer!.email);
    }
  }

  return [...superSpenders];
};

// console.log(getSuperSpenders(customers, orderData));

// --- second example ---

const customers2 = [
  { id: 101, email: "ana@email.com", language: "es" },
  { id: 102, email: "ben@email.com", language: "en" },
  { id: 103, email: "chris@email.com", language: "en" },
  { id: 104, email: "dev@email.com", language: "de" },
];

const orderData2 = [
  { customerId: 101, items: 1, amount: 40 },
  { customerId: 101, items: 1, amount: 55 }, // total 95 -> not a super-spender
  { customerId: 102, items: 3, amount: 120 }, // total 120 -> super-spender
  { customerId: 103, items: 2, amount: 80 },
  { customerId: 103, items: 1, amount: 20 }, // total 100 -> not (strictly > 100)
  { customerId: 104, items: 1, amount: 20 }, // total 20 -> not
];

const expectedOutput2 = ["ben@email.com"];

console.log(getSuperSpenders(customers2, orderData2));
