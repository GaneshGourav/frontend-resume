import {
  Box,
  Button,
  Heading,
  Img,
  Input,
  Textarea,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Validation Schema
const ContactSchema = Yup.object().shape({
  to_name: Yup.string()
    .min(2, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Name is required"),
  from_name: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters long")
    .required("Message is required"),
});

function ContactForm() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (values, actions) => {
    emailjs
      .send(
        "service_nadhpjb",
        "template_306jy0a",
        {
          to_name: values.to_name,
          from_name: values.from_name,
          message: values.message,
        },
        "Utlf75F74vAU-zRFb"
      )
      .then(
        (result) => {
          console.log(result.text);
          actions.resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );

    actions.setSubmitting(false);
  };

  return (
    <>
      <Box w="100%" overflowX="hidden" id="contact" px="4">
        <Box
          w={{ base: "100%", md: "80%", lg: "70%" }}
          m="auto"
          mt="40px"
          mb="60px"
        >
          <Heading
            fontWeight="500"
            fontSize={{ base: "20px", sm: "22px" }}
            textAlign="center"
            mb="40px"
            data-aos="fade-up"
            color="teal.500"
          >
            Connect with me !
          </Heading>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            gap="20px"
          >
            <Box
              w={{ base: "100%", md: "45%" }}
              minHeight={{ base: "auto", md: "450px" }}
              // display="flex"
              display={{ base: "none", lg: "flex" }}
              alignItems="center"
              data-aos="fade-right"
            >
              <Img
                src="https://lystloc-landing-page.s3.ap-south-1.amazonaws.com/images/others/contact-us.svg"
                alt="Contact-image"
                w="100%"
                borderRadius="10px"
                boxShadow="lg"
                height="100%"
                objectFit="cover"
              />
            </Box>

            <Box
              w={{ base: "100%", md: "100%", lg: "45%" }}
              bgGradient="linear(to-r, teal.100, teal.200)"
              p="30px"
              borderRadius="15px"
              boxShadow="lg"
              minHeight={{ base: "auto", md: "350px" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              data-aos="fade-left"
            >
              <Formik
                initialValues={{ to_name: "", from_name: "", message: "" }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box mb="20px">
                      <Field name="to_name">
                        {({ field, meta }) => (
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <Input
                              {...field}
                              placeholder="Your Name"
                              bg="white"
                              border="2px solid teal.300"
                              _hover={{ border: "2px solid teal.500" }}
                              _focus={{ border: "2px solid teal.500" }}
                              borderRadius="10px"
                              p="10px"
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box mb="20px">
                      <Field name="from_name">
                        {({ field, meta }) => (
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Your Email"
                              bg="white"
                              border="2px solid teal.300"
                              _hover={{ border: "2px solid teal.500" }}
                              _focus={{ border: "2px solid teal.500" }}
                              borderRadius="10px"
                              p="10px"
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box>
                      <Field name="message">
                        {({ field, meta }) => (
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <Textarea
                              {...field}
                              placeholder="Your Message"
                              bg="white"
                              border="2px solid teal.300"
                              _hover={{ border: "2px solid teal.500" }}
                              _focus={{ border: "2px solid teal.500" }}
                              borderRadius="10px"
                              p="10px"
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box mt="30px">
                      <Button
                        type="submit"
                        w="100%"
                        isLoading={isSubmitting}
                        _hover={{
                          bgGradient: "linear(to-r, teal.500, teal.600)",
                        }}
                        fontFamily="cursive"
                        color="white"
                        p="12px 0"
                        borderRadius="10px"
                        bgGradient="linear(to-l, teal.400, teal.500)"
                        boxShadow="md"
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
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
    </>
  );
}

export default ContactForm;
