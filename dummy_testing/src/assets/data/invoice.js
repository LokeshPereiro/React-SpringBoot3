export const invoice = {
  id: 10,
  name: "PC Components",
  client: {
    firstName: "Pepiño",
    lastName: "Sanchez",
    address: {
      country: "Spain",
      city: "Madrid",
      street: "Gran Vía 202",
    },
  },
  company: {
    companyName: "Pepiño S.L.",
    fiscalNumber: 46526241,
    address: {
      country: "Spain",
      city: "Getafe",
      street: "GTA Street 02",
    },
  },
  items: [
    { id: 1, product: "HP Pavillion", price: 750, quantity: 1 },
    { id: 2, product: "Keyboard Logitech", price: 98, quantity: 1 },
    { id: 3, product: "Mouse Logitech", price: 45, quantity: 1 },
    { id: 4, product: "Monitor Sony", price: 200, quantity: 1 },
    { id: 5, product: "Smartphone Samsung", price: 880, quantity: 1 },
    { id: 6, product: "TV LG Qled", price: 1899, quantity: 1 },
  ],
};
