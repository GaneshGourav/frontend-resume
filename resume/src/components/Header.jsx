import React, { useEffect } from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt, FaLinkedin, FaBook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import ProfilePicture from "./ProfilePicture";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header>
      <Box
        display={"flex"}
        id="home"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        m={"auto"}
        mt={"60px"}
        gap={{ base: "20px", md: "40px" }}
        width={{ base: "95%", md: "80%" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <ProfilePicture
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
        />
        <Box width={"100%"} data-aos="fade-left">
          <Heading
            as="h1"
            size="2xl"
            mb={2}
            color={"teal.500"}
            className="heading-animation"
          >
            Ganesh Kumar
          </Heading>
          <Text fontWeight={"600"} fontStyle="italic" mb={4} data-aos="fade-up">
            Full Stack Developer (MERN Stack)
          </Text>
          <Box data-aos="fade-up" mb={4}>
            <Flex
              direction={{
                base: "column",
                md: "column",
                lg: "row",
                "2xl": "row",
              }}
              gap={3}
              color={"grey"}
            >
              <Flex alignItems={"center"} gap={"10px"}>
                <CiLocationOn />
                <Text>Hansdiha, Jharkhand-814145</Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"}>
                <FaPhoneAlt />
                <Text>
                  <a href="tel:+919572016410">+91 9572016410</a>
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"}>
                <MdOutlineEmail />
                <Text>
                  <a href="mailto:mrganeshofficial8@gmail.com">
                    mrganeshofficial8@gmail.com
                  </a>
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"}>
                <FaLinkedin />
                <Text>
                  <a
                    href="https://www.linkedin.com/in/ganeshofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={"10px"}>
                <FaBook />
                <Text>
                  <a
                    href="https://ganeshgourav.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
      <hr
        style={{
          marginTop: "10px",
          width: "80%",
          margin: "10px auto",
          borderColor: "#ccc",
        }}
      />
    </header>
  );
}

export default Header;
