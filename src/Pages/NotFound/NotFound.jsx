import { Box, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Box textAlign={"center"}mt={20}>
        <Typography>404 ERROR</Typography>
        <Typography>Page Not Found</Typography>
      </Box>
    </>
  );
}
