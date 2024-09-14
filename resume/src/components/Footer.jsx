import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      p={4}
      bg="teal.500"
      color="white"
      textAlign="center"
      mt={"30px"}
      bottom={0}
    >
      <Text fontSize="sm" fontStyle={"italic"}>
        Created and Designed by{" "}
        <span style={{ color: "yellow" }}>Ganesh Kumar</span>
      </Text>
    </Box>
  );
}

export default Footer;
