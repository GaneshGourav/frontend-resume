import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Education.css";

function Education() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box
        w={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
        m={"auto"}
        mt={"30px"}
        mb={"30px"}
      >
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign={"center"}
          mb={"30px"}
          color={"teal.500"}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          className="custom-slide-up"
        >
          Education
        </Heading>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#2196F3", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #2196F3" }}
            date="January 2023 - January 2024"
            iconStyle={{
              background: "#2196F3",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={
              <Box
                borderRadius="50%"
                background="#2196F3"
                color="white"
                fontSize="24px"
                fontWeight="bold"
                w="40px"
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                1
              </Box>
            }
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Heading fontSize={{ base: "16px", sm: "18px" }} mb={"10px"}>
              Full Stack Web Development (Full time)
            </Heading>
            <Text fontSize={{ base: "14px", sm: "16px" }} mb={"5px"}>
              Masai School, Bengaluru
            </Text>
            <Text fontSize={{ base: "14px", sm: "16px" }}>
              Frontend and Backend
            </Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FF9800", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FF9800" }}
            date="June 2014 - May 2018"
            iconStyle={{
              background: "#FF9800",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={
              <Box
                borderRadius="50%"
                background="#FF9800"
                color="white"
                fontSize="24px"
                fontWeight="bold"
                w="40px"
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                2
              </Box>
            }
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Heading fontSize={{ base: "16px", sm: "18px" }} mb={"10px"}>
              Electrical and Electronics Engineering, B.E
            </Heading>
            <Text fontSize={{ base: "14px", sm: "16px" }}>
              SRS College of Engineering and Technology
            </Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
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

export default Education;
