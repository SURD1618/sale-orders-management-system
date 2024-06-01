const saleOrders = [
  {
    id: "1",
    customer_name: "Rohan",
    customer_id: "1",
    invoice_no: "Invoice - 1212121",
    invoice_date: "2024-04-15 10:30:57",
    products: [
      { product_id: "1", quantity: 2 },
      { product_id: "2", quantity: 1 },
    ],
    total_amount: 350,
    status: "active",
  },
  {
    id: "2",
    customer_name: "Naresh",
    customer_id: "2",
    invoice_no: "Invoice - 1415179",
    invoice_date: "2024-04-20 11:45:20",
    products: [{ product_id: "3", quantity: 1 }],
    total_amount: 200,
    status: "completed",
  },
  {
    id: "3",
    customer_name: "Digvijay",
    customer_id: "3",
    invoice_no: "Invoice - 2103921",
    invoice_date: "2024-04-21 09:30:11",
    products: [
      { product_id: "4", quantity: 2 },
      { product_id: "1", quantity: 1 },
    ],
    total_amount: 690,
    status: "active",
  },
  {
    id: "4",
    customer_name: "Ishaan",
    customer_id: "4",
    invoice_no: "Invoice - 2317801",
    invoice_date: "2024-04-30 12:10:00",
    products: [
      { product_id: "1", quantity: 2 },
      { product_id: "2", quantity: 1 },
    ],
    total_amount: 350,
    status: "completed",
  },
  {
    id: "5",
    customer_name: "Ram",
    customer_id: "5",
    invoice_no: "Invoice - 1112371",
    invoice_date: "2024-05-03 11:10:39",
    products: [
      { product_id: "1", quantity: 2 },
      { product_id: "2", quantity: 1 },
    ],
    total_amount: 1750,
    status: "completed",
  },
  {
    id: "6",
    customer_name: "Akhil",
    customer_id: "6",
    invoice_no: "Invoice - 1561809",
    invoice_date: "2024-05-12 11:37:33",
    products: [
      { product_id: "1", quantity: 2 },
      { product_id: "2", quantity: 1 },
    ],
    total_amount: 1150,
    status: "completed",
  },
];

export default saleOrders;
