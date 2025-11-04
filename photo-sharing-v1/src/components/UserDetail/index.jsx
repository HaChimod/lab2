import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";

import models from "../../modelData/models";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  return (
    <>
      {/* <Typography variant="body1">
            This should be the UserDetail view of the PhotoShare app. Since it is
            invoked from React Router the params from the route will be in property match.
            So this should show details of user: {user.userId}.
            You can fetch the model for the user from models.userModel.
          </Typography> */}
      <Typography variant="body1">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body2">Location: {user.location}</Typography>
      <Typography variant="body2">Description: {user.description}</Typography>
      <Typography variant="body2">Occupation: {user.occupation}</Typography>
      <Typography variant="body1">
        <Link to={`/photos/${user._id}`}>View Photos</Link>
      </Typography>
    </>
  );
}

export default UserDetail;
