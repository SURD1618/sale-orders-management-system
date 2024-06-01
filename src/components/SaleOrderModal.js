import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useCreateSaleOrder, useProducts } from "../hooks/useSaleOrders";
import { useCustomers } from "../hooks/useCustomers";
import SaleOrderForm from "./SaleOrderForm";

function SaleOrderModal({ isOpen, onClose, order, isReadOnly }) {
  const { mutateAsync: createSaleOrder, isLoading: isCreating } =
    useCreateSaleOrder();
  const {
    data: customers,
    isLoading: isLoadingCustomers,
    error: customersError,
  } = useCustomers();
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useProducts();

  const onSubmit = async (data) => {
    if (isReadOnly) return;

    try {
      const formattedData = {
        customer_id: data.customer_id,
        items: Object.values(data.items).map((item) => ({
          sku_id: item.product_id,
          quantity: item.quantity,
          price: products.find((p) => p.id === item.product_id)?.price || 0,
        })),
        invoice_date: data.invoice_date?.toISOString(),
        paid: false,
        invoice_no: order ? order.invoice_no : `INV-${Date.now()}`,
      };
      await createSaleOrder(formattedData);
      onClose();
    } catch (error) {
      console.error("Error creating sale order:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {order ? "Edit Sale Order" : "Create Sale Order"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoadingCustomers || isLoadingProducts ? (
            <Spinner size="xl" color="blue.500" />
          ) : customersError || productsError ? (
            <Text color="red.500">Error loading data</Text>
          ) : (
            <SaleOrderForm
              onSubmit={onSubmit}
              customers={customers}
              products={products}
              defaultValues={order}
              isReadOnly={isReadOnly}
              isCreating={isCreating}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SaleOrderModal;
