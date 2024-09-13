import { Box } from "@chakra-ui/react";
import React from "react";
import photo from "../assets/Ganesh_Photo.jpeg";

function ProfilePicture() {
  return (
    <>
      <Box borderRadius={"20px 10px"} marginTop={"10px"}>
        <img
          style={{
            height: "180px",
            width: "200px",
            borderRadius: "15px 5px",
          }}
          src={photo}
          alt="Profile-Picture"
        />
      </Box>
    </>
  );
}

export default ProfilePicture;
