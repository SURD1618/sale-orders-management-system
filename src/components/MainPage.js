import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
  FormControl,
  FormLabel,
  Switch,
  Flex,
} from "@chakra-ui/react";
import ActiveSaleOrders from "./ActiveSaleOrders";
import CompletedSaleOrders from "./CompletedSaleOrders";
import { useColorMode } from "@chakra-ui/react";

function MainPage({ openModal }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4}>
      <Tabs>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
          <Flex alignItems="center">
            <Box ml={4}>
              <Button onClick={openModal} colorScheme="blue">
                + New Sale Order
              </Button>
            </Box>
            <Box ml={4}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="toggle-theme" mb="0" mr={2}>
                  {colorMode === "light" ? "Dark" : "Light"} Mode
                </FormLabel>
                <Switch id="toggle-theme" onChange={toggleColorMode} />
              </FormControl>
            </Box>
          </Flex>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ActiveSaleOrders />
          </TabPanel>
          <TabPanel>
            <CompletedSaleOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default MainPage;
