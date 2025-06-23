import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from '@mui/material'


const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 237
      },
      {
        "x": "helicopter",
        "y": 73
      },
      {
        "x": "boat",
        "y": 251
      },
      {
        "x": "train",
        "y": 150
      },
      {
        "x": "subway",
        "y": 269
      },
      {
        "x": "bus",
        "y": 178
      },
      {
        "x": "car",
        "y": 275
      },
      {
        "x": "moto",
        "y": 163
      },
      {
        "x": "bicycle",
        "y": 265
      },
      {
        "x": "horse",
        "y": 158
      },
      {
        "x": "skateboard",
        "y": 87
      },
      {
        "x": "others",
        "y": 214
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 290
      },
      {
        "x": "helicopter",
        "y": 55
      },
      {
        "x": "boat",
        "y": 125
      },
      {
        "x": "train",
        "y": 289
      },
      {
        "x": "subway",
        "y": 11
      },
      {
        "x": "bus",
        "y": 219
      },
      {
        "x": "car",
        "y": 249
      },
      {
        "x": "moto",
        "y": 150
      },
      {
        "x": "bicycle",
        "y": 19
      },
      {
        "x": "horse",
        "y": 53
      },
      {
        "x": "skateboard",
        "y": 163
      },
      {
        "x": "others",
        "y": 220
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 270
      },
      {
        "x": "helicopter",
        "y": 234
      },
      {
        "x": "boat",
        "y": 3
      },
      {
        "x": "train",
        "y": 68
      },
      {
        "x": "subway",
        "y": 213
      },
      {
        "x": "bus",
        "y": 263
      },
      {
        "x": "car",
        "y": 161
      },
      {
        "x": "moto",
        "y": 121
      },
      {
        "x": "bicycle",
        "y": 216
      },
      {
        "x": "horse",
        "y": 127
      },
      {
        "x": "skateboard",
        "y": 65
      },
      {
        "x": "others",
        "y": 127
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 96
      },
      {
        "x": "helicopter",
        "y": 24
      },
      {
        "x": "boat",
        "y": 58
      },
      {
        "x": "train",
        "y": 131
      },
      {
        "x": "subway",
        "y": 48
      },
      {
        "x": "bus",
        "y": 125
      },
      {
        "x": "car",
        "y": 88
      },
      {
        "x": "moto",
        "y": 226
      },
      {
        "x": "bicycle",
        "y": 276
      },
      {
        "x": "horse",
        "y": 59
      },
      {
        "x": "skateboard",
        "y": 26
      },
      {
        "x": "others",
        "y": 51
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 31
      },
      {
        "x": "helicopter",
        "y": 55
      },
      {
        "x": "boat",
        "y": 162
      },
      {
        "x": "train",
        "y": 135
      },
      {
        "x": "subway",
        "y": 196
      },
      {
        "x": "bus",
        "y": 57
      },
      {
        "x": "car",
        "y": 149
      },
      {
        "x": "moto",
        "y": 60
      },
      {
        "x": "bicycle",
        "y": 40
      },
      {
        "x": "horse",
        "y": 171
      },
      {
        "x": "skateboard",
        "y": 48
      },
      {
        "x": "others",
        "y": 270
      }
    ]
  }
]
export default function LineChart({isDashboard = false}) {
    const theme = useTheme()
  return (
    <>
    <Box height={isDashboard ? "280px" :"75vh"}>
       <ResponsiveLine /* or Line for fixed dimensions */
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
                strokeWidth: 0,
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="basis"
        axisBottom={{ legend: isDashboard? null : 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: isDashboard? null : 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />    
    </Box>  
    </>
  )
}
