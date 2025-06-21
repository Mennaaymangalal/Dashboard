import React from 'react'
import { ResponsiveBar } from "@nivo/bar";
import { data } from "./data";
import { Box, useTheme } from '@mui/material';

export default function BarChart() {
     const theme = useTheme();
  return (
    <>
      
      <Box height="75vh">
        <ResponsiveBar
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
          keys={["Spain", "France", "Germany"]}
          indexBy="year"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: "paired" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisBottom={{ legend: "Year", legendOffset: 40 }}
          axisLeft={{
            legend: "Salary (EUR/month)",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 2,
              symbolSize: 20,
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </Box>
    </>
  )
}
