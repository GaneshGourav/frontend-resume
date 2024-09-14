import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useMediaQuery,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const referencesData = [
  {
    name: "John Doe",
    position: "Senior Developer",
    company: "Tech Corp",
    description:
      "John was my mentor during my internship at Tech Corp. He can vouch for my skills in React, Node.js, and overall teamwork.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    position: "Project Manager",
    company: "Web Solutions",
    description:
      "I worked with Jane on multiple projects where I was responsible for the front-end development. She can attest to my project management and client-handling skills.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function References() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Box w={{ base: "90%", md: "80%" }} m="auto" py="50px">
        <Heading
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign={"center"}
          mb={"30px"}
          color={"teal.500"}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          className="custom-slide-up"
        >
          References
        </Heading>
        <Stack
          direction={isLargerThan768 ? "row" : "column"}
          spacing="30px"
          justifyContent="center"
          alignItems="center"
        >
          {referencesData.map((ref, index) => (
            <Box
              key={index}
              p="20px"
              borderWidth="1px"
              borderRadius="lg"
              w={{ base: "100%", md: "45%" }}
              boxShadow="md"
              bg="white"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
            >
              <Avatar size="xl" src={ref.avatar} mb="20px" />
              <Text fontWeight="bold" fontSize="20px">
                {ref.name}
              </Text>
              <Text fontSize="16px" color="gray.600">
                {ref.position}, {ref.company}
              </Text>
              <Text
                mt="15px"
                fontStyle="italic"
                fontSize="14px"
                color="gray.500"
              >
                {ref.description}
              </Text>
            </Box>
          ))}
        </Stack>
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

export default References;
