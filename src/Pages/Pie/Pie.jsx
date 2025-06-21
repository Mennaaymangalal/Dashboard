import { Typography, useTheme } from '@mui/material'
import React from 'react'

export default function Pie() {
   const theme = useTheme()
  return (
    <>
        <Typography
        sx={{
          color: theme.palette.info.main,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Pie Chart
      </Typography>
      <Typography sx={{ pb: 2 }}>Simple Pie Chat </Typography>
    </>
  )
}
