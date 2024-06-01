import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </ChakraProvider>
);














// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ChakraProvider } from "@chakra-ui/react";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import App from './App';

// const queryClient = new QueryClient();

// ReactDOM.createRoot(
//   <ChakraProvider>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </ChakraProvider>,
//   document.getElementById('root')
// );
