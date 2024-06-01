import React, { useState } from "react";
import { useSaleOrders } from "../hooks/useSaleOrders";
import {
  Box,
  Spinner,
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

function CompletedSaleOrders() {
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

  if (isLoading) return <Spinner size="xl" color="blue.500" />;
  if (error) return <Text>Error loading sale orders</Text>;

  const completedSaleOrders = saleOrders.filter(
    (order) => order.status === "completed"
  );

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Completed Sale Orders
      </Text>
      {completedSaleOrders.length === 0 ? (
        <Text>No completed sale orders</Text>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Customer Name</Th>
              <Th>Invoice No</Th>
              <Th>Last Modified</Th>
              <Th>Total Amount</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {completedSaleOrders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.customer_name}</Td>
                <Td>{order.invoice_no}</Td>
                <Td>{order.invoice_date}</Td>
                <Td>{order.total_amount}</Td>
                <Td>{order.status}</Td>
                <Td>
                  <IconButton
                    icon={<FaEllipsisH />}
                    onClick={() => openModal(order)}
                    variant="outline"
                    aria-label="View Sale Order"
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
          isReadOnly={true}
        />
      )}
    </Box>
  );
}

export default CompletedSaleOrders;
