import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Box
        w={{ base: "90%", sm: "80%", md: "80%", lg: "80%" }}
        m={"auto"}
        p={{ base: "10px", sm: "20px", md: "30px", lg: "40px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px", md: "24px" }}
          textAlign={"center"}
          mb={"20px"}
          color={"teal.500"}
          className="heading-animation"
        >
          About Me
        </Heading>
        <Text
          fontWeight={"400"}
          fontSize={{ base: "14px", sm: "16px", md: "18px" }}
          mb={"20px"}
          lineHeight="1.6"
        >
          A dynamic Full Stack Developer with expertise in the MERN stack,
          specializing in building scalable, high-performance web applications.
          Skilled in JavaScript, React.js, and Node.js, with a focus on
          innovation and problem-solving. Adaptable to new technologies,
          including Generative AI, and driven by a passion for continuous
          improvement.
        </Text>
      </Box>
      <hr
        style={{
          marginTop: "10px",
          width: "80%",
          margin: "10px auto",
          border: "0.5px solid #ccc",
        }}
      />
    </>
  );
}

export default AboutMe;
