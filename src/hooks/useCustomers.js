import { useQuery } from "@tanstack/react-query";
import customers from "../mockData/customers";

function useCustomers() {
  return useQuery({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
  });
}

async function fetchCustomers() {
  // Mock API call to fetch customers
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customers);
    }, 1000);
  });
}

export { useCustomers };
