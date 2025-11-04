import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define TopBar, a React component of Project 4.
 */

function TopBar() {
  const [contextText, setContextText] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const users = models.userListModel();
    const parts = path.split("/");

    const page = parts[1];
    const userId = parts[2];

    const user = users.find((u) => u._id === userId);

    if (user) {
      const name = `${user.first_name} ${user.last_name}`;
      if (page === "photos") setContextText(`Photos of ${name}`);
      else if (page === "users") setContextText(name);
      else setContextText("");
    } else {
      // Không tìm thấy user — reset context text
      setContextText("");
    }
  }, [location]);

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
          Phạm Tiến Phát
        </Typography>
        <Box>
          <Typography variant="h6" color="inherit">
            {contextText}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
