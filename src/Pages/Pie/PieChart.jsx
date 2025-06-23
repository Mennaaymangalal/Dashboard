import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsivePie } from '@nivo/pie'


export default function PieChart({isDashboard = false}) {
    const theme = useTheme()
    const data = [
  {
    "id": "stylus",
    "label": "stylus",
    "value": 450,
    "color": "hsl(248, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 140,
    "color": "hsl(94, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 124,
    "color": "hsl(114, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 342,
    "color": "hsl(73, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 55,
    "color": "hsl(146, 70%, 50%)"
  }
]
  return (
    <>
     <Box height={isDashboard ? "280px" :"75vh"}>
      <ResponsivePie /* or Pie for fixed dimensions */
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
        margin={isDashboard? { top: 10, right: 5, bottom: 10, left: 5 } : { top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={isDashboard ? 0.7 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor= {theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={isDashboard? false : true}
        arcLabelsSkipAngle={10}
        enableArcLinkLabels={isDashboard? false : true}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={isDashboard ? [] : [
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
     </Box> 
    </>
  )
}
