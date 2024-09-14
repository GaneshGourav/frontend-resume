import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

function ExperienceModal({ date, title, description }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalSize = useBreakpointValue({ base: "xs", sm: "md", lg: "lg" });

  return (
    <Box
      p="20px"
      mb="20px"
      borderRadius="10px"
      bg="white"
      border={"1px solid #e2e8f0"}
      boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onClick={onOpen}
      maxWidth={{ base: "100%", sm: "100%", md: "80%", lg: "100%" }}
      mx="auto"
      transition="all 0.3s ease"
    >
      <Flex justify="space-between" alignItems="center">
        <Text fontSize="lg" fontWeight="500">
          {date}
        </Text>
        <Text
          as="h4"
          fontSize="lg"
          fontStyle="italic"
          fontWeight="500"
          color="gray.700"
        >
          {title}
        </Text>
      </Flex>

      {/* Modal for description */}
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="auto">
            <Text fontStyle="italic">{description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default ExperienceModal;
