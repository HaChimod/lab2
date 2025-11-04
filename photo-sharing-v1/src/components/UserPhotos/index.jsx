import React from "react";
import { Typography, Box } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
const images = {
  "ouster.jpg": require("../../images/ouster.jpg"),
  "malcolm1.jpg": require("../../images/malcolm1.jpg"),
  "malcolm2.jpg": require("../../images/malcolm2.jpg"),
  "ripley1.jpg": require("../../images/ripley1.jpg"),
  "ripley2.jpg": require("../../images/ripley2.jpg"),
  "kenobi1.jpg": require("../../images/kenobi1.jpg"),
  "kenobi2.jpg": require("../../images/kenobi2.jpg"),
  "kenobi3.jpg": require("../../images/kenobi3.jpg"),
  "kenobi4.jpg": require("../../images/kenobi4.jpg"),
  "took1.jpg": require("../../images/took1.jpg"),
  "took2.jpg": require("../../images/took2.jpg"),
  "ludgate1.jpg": require("../../images/ludgate1.jpg"),
};
/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const photos = models.photoOfUserModel(userId);

  return (
    <>
      {/* <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {user.userId}. You can fetch the model for the user
        from models.photoOfUserModel(userId):
      </Typography> */}
      <Typography>
        {photos.map((photo) => (
          <Box key={photo._id}>
            <img
              src={images[photo.file_name]}
              alt={photo.file_name}
              style={{ maxWidth: "100%" }}
            />
            <p>{photo.date_time}</p>
            {photo.comments &&
              photo.comments.map((comment) => (
                <p key={comment._id}>
                  {comment.user.first_name} {comment.user.last_name}:
                  {comment.comment}
                </p>
              ))}
          </Box>
        ))}
      </Typography>
    </>
  );
}

export default UserPhotos;
