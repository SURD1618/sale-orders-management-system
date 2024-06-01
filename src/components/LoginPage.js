import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Center,
  VStack,
  Text,
} from "@chakra-ui/react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "" || password === "") {
      setError("Username and password are required.");
      return;
    }
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAuthenticated", true); // Persist authentication state
      navigate("/main"); // Redirect to main page after successful login
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <Center h="100vh" bg="gray.50">
      <VStack
        spacing={4}
        w="350px"
        p={4}
        boxShadow="md"
        borderRadius="md"
        bg="white"
        color="gray.800"
      >
        <FormControl>
          <FormLabel fontSize="md">Username</FormLabel>
          <Input
            size="md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            borderRadius="md"
            bg="gray.100"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="md">Password</FormLabel>
          <Input
            size="md"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderRadius="md"
            bg="gray.100"
          />
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button size="md" onClick={handleLogin} colorScheme="blue">
          Login
        </Button>
      </VStack>
    </Center>
  );
}

export default LoginPage;
