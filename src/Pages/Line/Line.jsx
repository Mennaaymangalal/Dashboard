import { Typography, useTheme } from '@mui/material';
import React from 'react'

export default function Line() {
   const theme = useTheme();
  return (
    <>
     <Typography
        sx={{
          color: theme.palette.info.main,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Line Chart
      </Typography>
      <Typography sx={{ pb: 2 }}>
       Simple Line Chart
      </Typography>
   
    </>
  )
}
