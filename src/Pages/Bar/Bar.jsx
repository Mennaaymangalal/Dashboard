import React from "react";
import { Typography, useTheme } from "@mui/material";
import BarChart from "./BarChart"; 

export default function BarChartWrapper() {
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
        Bar Chart
      </Typography>
      <Typography sx={{ pb: 2 }}>
        The minimum wage in Germany, France and Spain (EUR/month)
      </Typography>

      <BarChart />
    </>
  );
}
