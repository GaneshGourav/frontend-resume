import React, { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Hobbies() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Box w={"80%"} m={"auto"} mt={"40px"} mb={"40px"}>
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign={"center"}
          mb={"40px"}
          data-aos="fade-up"
          color={"teal.500"}
        >
          Soft Skills & Interests
        </Heading>

        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"17px"} fontWeight={"500"}>
                    {" "}
                    Soft Skills
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text fontWeight={"500"} color={"gray"} fontSize={"18px"}>
                Problem Solving | Teamwork | Time Management | Adaptability
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"17px"} fontWeight={"500"}>
                    Interests
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text fontWeight={"500"} color={"gray"} fontSize={"18px"}>
                {" "}
                Travelling | Cooking | Listening Song
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
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

export default Hobbies;
