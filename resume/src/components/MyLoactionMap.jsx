import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function Map() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Box w={"80%"} h={"400px"} m={"auto"} mb={"100px"} position="relative">
        <Heading
          fontWeight="500"
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign="center"
          mb="40px"
          data-aos="fade-up"
          color="teal.500"
        >
          Location
        </Heading>

        {isLoading && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
            zIndex={1}
            borderRadius={"5px"}
          >
            <Spinner size="xl" color="teal.500" />
            <Text ml={4} fontSize="lg" color="gray.600">
              Map is loading...
            </Text>
          </Box>
        )}

        <iframe
          title="Hansdiha Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.745927799698!2d87.25181421453228!3d24.517459484217103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0a91979962c4b%3A0x171259789e62da0e!2sHansdiha%2C%20Jharkhand%20814446!5e0!3m2!1sen!2sin!4v1694510528773!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          onLoad={handleLoad}
        ></iframe>
      </Box>
      <hr
        style={{
          marginTop: "10px",
          width: "80%",
          margin: "10px auto",
          borderColor: "#ccc",
        }}
      />
    </>
  );
}

export default Map;
