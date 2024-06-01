import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import ActiveSaleOrders from "./components/ActiveSaleOrders";
import CompletedSaleOrders from "./components/CompletedSaleOrders";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import SaleOrderModal from "./components/SaleOrderModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const { isAuthenticated } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/main"
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                      <MainPage openModal={openModal} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/active-orders"
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                      <ActiveSaleOrders />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/completed-orders"
                  element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                      <CompletedSaleOrders />
                    </PrivateRoute>
                  }
                />
              </Routes>
              <SaleOrderModal isOpen={isModalOpen} onClose={closeModal} />
            </Grid>
          </Box>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
