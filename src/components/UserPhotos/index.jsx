import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData"; 
function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      const data = await fetchModel(`/api/photo/photosOfUser/${userId}`);
      console.log("Fetched photos:", data);
      if (data) setPhotos(data);
      setLoading(false);
    }
    fetchPhotos();
  }, [userId]);

  if (loading) return <Typography>Loading photos...</Typography>;
  if (!photos.length) return <Typography>No photos yet.</Typography>;

  return (
    <>
      {photos.map((photo) => (
        <Box key={photo._id} mb={3}>
    <img
        src={require(`../../images/${photo.file_name}`)}
        alt={photo.file_name}
        style={{ maxWidth: "100%" }}
      />
          <p>{new Date(photo.date_time).toLocaleString()}</p>
          {photo.comments &&
            photo.comments.map((comment) => (
              <p key={comment._id}>
                {comment.user?.first_name || "Unknown"}{" "}
                {comment.user?.last_name || "User"}: {comment.comment}
              </p>
            ))}
        </Box>
      ))}
    </>
  );
}

export default UserPhotos;
