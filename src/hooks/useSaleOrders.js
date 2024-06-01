import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import saleOrders from '../mockData/saleOrders';
import products from '../mockData/products';

function useSaleOrders() {
  return useQuery({
    queryKey: ['saleOrders'],
    queryFn: fetchSaleOrders,
  });
}

function useCreateSaleOrder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createSaleOrder,
    onSuccess: () => {
      queryClient.invalidateQueries('saleOrders');
    },
  });
}


async function fetchSaleOrders() {
  // Mock API call to fetch sale orders
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(saleOrders);
    }, 1000);
  });
}

async function createSaleOrder(order) {
  // Mock API call to create a sale order
  return new Promise((resolve) => {
    setTimeout(() => {
      saleOrders.push(order); // Add the new order to the saleOrders array
      resolve(order);
    }, 1000);
  });
}


function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
}

async function fetchProducts() {
  // Mock API call to fetch products
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

export { useSaleOrders, useCreateSaleOrder, useProducts };
