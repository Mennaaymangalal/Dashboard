import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "rust",
    label: "rust",
    value: 144,
    color: "hsl(289, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 106,
    color: "hsl(346, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 89,
    color: "hsl(282, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 416,
    color: "hsl(86, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 317,
    color: "hsl(11, 70%, 50%)",
  },
];
export default function Card({ Icon, text1, text2, Increase, schema }) {
    const theme = useTheme()
  return (
    <>
      <Paper
        sx={{
          minWidth: "300px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Stack gap={1}>
          {Icon}
          <Typography>{text1}</Typography>
          <Typography>{text2}</Typography>
        </Stack>

        <Stack alignItems={'center'}>
          <Box sx={{ height: "80px", width: "80px" }}>
            <ResponsivePie /* or Pie for fixed dimensions */
             margin={{ top: 0, right: 0, bottom: 15, left: 0 }}            
              data={data}
              theme={{
           
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: theme.palette.background.default,
            },
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: theme.palette.background.default,
                },
              },
              ticks: {
                line: {
                  stroke: "THEME.PALETTE.DIVIDER",
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: theme.palette.background.default,
                },
              },
            },
            grid: {
              line: {
                stroke: "#dddddd",
                strokeWidth: 1,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: theme.palette.background.default,
                },
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.background.default,
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill:theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: theme.palette.background.default,
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: theme.palette.text.primary,
                outlineWidth: 2,
                outlineColor: theme.palette.background.default,
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: theme.palette.background.default,
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: theme.palette.background.default,
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: theme.palette.background.default,
                outlineOpacity: 1,
              },
            },
            tooltip: {
              wrapper: {},
              container: {
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
           colors={{ scheme: schema }}
              innerRadius={0.7}
              padAngle={0.6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              enableArcLinkLabels={false}             
              enableArcLabels={false}
             
            />
          </Box>
          <Typography>{Increase}</Typography>
        </Stack>
      </Paper>
    </>
  );
}
