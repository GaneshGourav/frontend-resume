import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll event listener to hide/show navbar
  const controlNavBar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // Hide navbar on scroll down
      } else {
        setShowNav(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavBar);

      return () => {
        window.removeEventListener("scroll", controlNavBar);
      };
    }
  }, [lastScrollY]);

  // Component for navigation links
  const MenuItems = () => (
    <>
      {["home", "about", "education", "skills", "portfolio", "contact"].map(
        (section) => (
          <ScrollLink
            to={section}
            smooth={true}
            duration={500}
            offset={-70}
            key={section}
          >
            <Link
              color="white"
              fontWeight="bold"
              mx="4"
              cursor="pointer"
              _hover={{ color: "black", transition: "0.3s ease-in" }}
              onClick={onClose} // Close drawer on clicking link
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </ScrollLink>
        )
      )}
    </>
  );

  return (
    <Box
      position="fixed"
      top={showNav ? "0" : "-100px"}
      width="100%"
      bg="teal.500"
      p="10px"
      zIndex="1000"
      boxShadow="lg"
      transition="top 0.3s"
    >
      <Flex justify="space-between" align="center">
        <Box fontWeight="bold" fontSize="18px" color="white">
          {"<Ganesh/>"}
        </Box>

        {/* Desktop Menu (Visible on larger screens) */}
        <Flex display={{ base: "none", lg: "flex" }} gap="10px">
          <MenuItems />
        </Flex>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          icon={<BiMenu />}
          aria-label="Open Menu"
          display={{ base: "block", lg: "none" }}
          onClick={onOpen}
          color="white"
          fontSize="24px"
          bg="transparent"
          _hover={{ bg: "transparent" }}
        />

        {/* Drawer for Mobile Navigation */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent bg="teal.500">
              <DrawerCloseButton color="white" />
              <DrawerBody display="flex" justifyContent="center">
                <Stack spacing={6} mt="50px">
                  <MenuItems />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default NavBar;
