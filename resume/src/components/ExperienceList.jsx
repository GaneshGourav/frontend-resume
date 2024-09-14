import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import ExperienceModal from "./ExperienceModal";
import AOS from "aos";
import "aos/dist/aos.css";

function ExperienceList() {
  useEffect(() => {
    AOS.init();
  }, []);
  const experiences = [
    {
      date: "January 2022 - Present",
      title: "Software Developer at ABC Corp",
      description:
        "Working on various frontend and backend projects using React, Node.js, and MongoDB. Designed and implemented user-friendly web applications.",
    },
    {
      date: "June 2020 - December 2021",
      title: "Junior Developer at XYZ Inc",
      description:
        "Assisted in building responsive web applications using React and Redux. Worked closely with design teams to implement UI/UX improvements.",
    },
  ];

  return (
    <>
      <Box p="20px" w="100%" maxWidth="1200px" mx="auto">
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
          Experience
        </Heading>

        {experiences.map((experience, index) => (
          <ExperienceModal
            key={index}
            date={experience.date}
            title={experience.title}
            description={experience.description}
          />
        ))}
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

export default ExperienceList;
