import React, { useState } from "react";
import { useSaleOrders } from "../hooks/useSaleOrders";
import {
  Box,
  Text,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";
import SaleOrderModal from "./SaleOrderModal";

function ActiveSaleOrders() {
  const { data: saleOrders, isLoading, error } = useSaleOrders();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setModalOpen(false);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading sale orders</Text>;

  const activeSaleOrders = saleOrders.filter(
    (order) => order.status === "active"
  );

  return (
    <Box>
      {activeSaleOrders.length === 0 ? (
        <Text>No active sale orders</Text>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Invoice No</Th>
              <Th>Customer</Th>
              <Th>Total Amount</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {activeSaleOrders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.invoice_no}</Td>
                <Td>{order.customer_id}</Td>
                <Td>{order.total_amount}</Td>
                <Td>{order.status}</Td>
                <Td>
                  <IconButton
                    icon={<FaEllipsisH />}
                    onClick={() => openModal(order)}
                    variant="outline"
                    aria-label="Edit Sale Order"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      {selectedOrder && (
        <SaleOrderModal
          isOpen={isModalOpen}
          onClose={closeModal}
          order={selectedOrder}
          isReadOnly={false}
        />
      )}
    </Box>
  );
}

export default ActiveSaleOrders;
