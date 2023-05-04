export const invoice = {
  id: 10,
  name: "PC Components",
  client: {
    name: "Pepe",
    lastName: "Perez",
    address: {
      country: "Spain",
      city: "Madrid",
      street: " Gran Vía 202",
    },
  },
  company: {
    name: "Pepe Money",
    fiscalNumber: 46526241,
    address: {
      country: "Spain",
      city: "Getafe",
      street: "GTA Street 02",
    },
  },
  items: [
    { id: 1, product: "HP Pavillion", price: 650, quantity: 1 },
    { id: 2, product: "Keyboard Logitech", price: 98, quantity: 1 },
    { id: 3, product: "Mouse Logitech", price: 43, quantity: 1 },
    { id: 4, product: "Monitor Sony", price: 200, quantity: 1 },
    { id: 5, product: "Smartphone Samsung", price: 1200, quantity: 1 },
    { id: 6, product: "TV LG Qled", price: 1899, quantity: 1 },
  ],
};
