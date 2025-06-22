import { Typography, useTheme } from '@mui/material'
import React from 'react'
import GeogarphyChart from './GeogarphyChart';

export default function Geography() {
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
        Geogarphy Chart
      </Typography>
      <Typography sx={{ pb: 2 }}>
        Simple Geogarphy Chart
      </Typography>

       <GeogarphyChart/>
    
    </>
  )
}
