import { Box, Grid, Heading, Text, Tooltip } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { DiMongodb, DiNodejsSmall } from "react-icons/di";
import { TbBrandCypress } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const Skills = [
    {
      title: "HTML-5",
      logo: AiFillHtml5,
      level: "Intermediate",
      arialLabel: "HTML-5 skill level",
      color: "#e54c21",
    },
    {
      title: "CSS",
      logo: FaCss3Alt,
      level: "Intermediate",
      arialLabel: "CSS skill level",
      color: "#1572b6",
    },
    {
      title: "JavaScript",
      logo: IoLogoJavascript,
      level: "Intermediate",
      arialLabel: "JavaScript skill level",
      color: "#f7df1e",
    },
    {
      title: "React",
      logo: GrReactjs,
      level: "Intermediate",
      arialLabel: "React skill level",
      color: "#61dafb",
    },
    {
      title: "Node",
      logo: DiNodejsSmall,
      level: "Basic",
      arialLabel: "Node skill level",
      color: "#68a063",
    },
    {
      title: "MongoDB",
      logo: DiMongodb,
      level: "Basic",
      arialLabel: "MongoDB skill level",
      color: "#47A248",
    },
    {
      title: "Express",
      logo: TbBrandCypress,
      level: "Basic",
      arialLabel: "Express skill level",
      color: "#4a6ef3",
    },
    {
      title: "Tailwind CSS",
      logo: RiTailwindCssFill,
      level: "Basic",
      arialLabel: "Tailwind CSS skill level",
      color: "#38bdf8",
    },
  ];

  return (
    <>
      <Box
        w={{ base: "100%", sm: "90%", md: "80%" }}
        m={"auto"}
        mt={"40px"}
        mb={"40px"}
        id="skills"
        overflowX="hidden"
        overflowY="hidden"
      >
        <Heading
          fontWeight={"500"}
          fontSize={{ base: "20px", sm: "22px" }}
          textAlign={"center"}
          mb={"40px"}
          data-aos="fade-up"
          color={"teal.500"}
        >
          Technical Skills
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "20px", sm: "30px", md: "40px" }}
          placeItems={"center"}
          overflow="hidden"
        >
          {Skills.map((skill) => (
            <Tooltip
              label={skill.level}
              aria-label={skill.arialLabel}
              key={skill.title}
            >
              <Box
                p="20px"
                w={{ base: "100%", sm: "80%", md: "100%", lg: "70%" }}
                borderRadius={"15px"}
                border={"1px solid #e2e8f0"}
                boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
                bg={"white"}
                textAlign={"center"}
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                }}
                data-aos="fade-up"
                transition="all 0.3s ease"
              >
                <skill.logo
                  fontSize={"65px"}
                  style={{ margin: "auto" }}
                  color={skill.color}
                />
                <Text fontWeight={"500"} mt={"10px"}>
                  {skill.title}
                </Text>
              </Box>
            </Tooltip>
          ))}
        </Grid>
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

export default Skills;
