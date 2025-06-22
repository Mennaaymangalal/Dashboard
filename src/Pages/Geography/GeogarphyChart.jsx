import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import {geo} from './WorldCountries'


const data = [
  {
    "id": "AFG",
    "value": 986781
  },
  {
    "id": "AGO",
    "value": 974390
  },
  {
    "id": "ALB",
    "value": 8418
  },
  {
    "id": "ARE",
    "value": 942873
  },
  {
    "id": "ARG",
    "value": 948168
  },
  {
    "id": "ARM",
    "value": 810496
  },
  {
    "id": "ATA",
    "value": 849223
  },
  {
    "id": "ATF",
    "value": 355635
  },
  {
    "id": "AUT",
    "value": 996366
  },
  {
    "id": "AZE",
    "value": 669242
  },
  {
    "id": "BDI",
    "value": 747583
  },
  {
    "id": "BEL",
    "value": 387629
  },
  {
    "id": "BEN",
    "value": 588669
  },
  {
    "id": "BFA",
    "value": 39683
  },
  {
    "id": "BGD",
    "value": 798185
  },
  {
    "id": "BGR",
    "value": 997180
  },
  {
    "id": "BHS",
    "value": 492627
  },
  {
    "id": "BIH",
    "value": 174121
  },
  {
    "id": "BLR",
    "value": 213223
  },
  {
    "id": "BLZ",
    "value": 78872
  },
  {
    "id": "BOL",
    "value": 221353
  },
  {
    "id": "BRN",
    "value": 177049
  },
  {
    "id": "BTN",
    "value": 598053
  },
  {
    "id": "BWA",
    "value": 529803
  },
  {
    "id": "CAF",
    "value": 777796
  },
  {
    "id": "CAN",
    "value": 502488
  },
  {
    "id": "CHE",
    "value": 870960
  },
  {
    "id": "CHL",
    "value": 728197
  },
  {
    "id": "CHN",
    "value": 837141
  },
  {
    "id": "CIV",
    "value": 652212
  },
  {
    "id": "CMR",
    "value": 455542
  },
  {
    "id": "COG",
    "value": 53322
  },
  {
    "id": "COL",
    "value": 187080
  },
  {
    "id": "CRI",
    "value": 776789
  },
  {
    "id": "CUB",
    "value": 704003
  },
  {
    "id": "-99",
    "value": 167305
  },
  {
    "id": "CYP",
    "value": 719488
  },
  {
    "id": "CZE",
    "value": 916508
  },
  {
    "id": "DEU",
    "value": 731887
  },
  {
    "id": "DJI",
    "value": 395453
  },
  {
    "id": "DNK",
    "value": 967286
  },
  {
    "id": "DOM",
    "value": 501931
  },
  {
    "id": "DZA",
    "value": 743466
  },
  {
    "id": "ECU",
    "value": 248510
  },
  {
    "id": "EGY",
    "value": 814524
  },
  {
    "id": "ERI",
    "value": 325541
  },
  {
    "id": "ESP",
    "value": 685153
  },
  {
    "id": "EST",
    "value": 425613
  },
  {
    "id": "ETH",
    "value": 446883
  },
  {
    "id": "FIN",
    "value": 484758
  },
  {
    "id": "FJI",
    "value": 302226
  },
  {
    "id": "FLK",
    "value": 76001
  },
  {
    "id": "FRA",
    "value": 572006
  },
  {
    "id": "GAB",
    "value": 796822
  },
  {
    "id": "GBR",
    "value": 826290
  },
  {
    "id": "GEO",
    "value": 344401
  },
  {
    "id": "GHA",
    "value": 118124
  },
  {
    "id": "GIN",
    "value": 639778
  },
  {
    "id": "GMB",
    "value": 655777
  },
  {
    "id": "GNB",
    "value": 152153
  },
  {
    "id": "GNQ",
    "value": 458331
  },
  {
    "id": "GRC",
    "value": 92378
  },
  {
    "id": "GTM",
    "value": 377890
  },
  {
    "id": "GUY",
    "value": 1310
  },
  {
    "id": "HND",
    "value": 610996
  },
  {
    "id": "HRV",
    "value": 213883
  },
  {
    "id": "HTI",
    "value": 206141
  },
  {
    "id": "HUN",
    "value": 451899
  },
  {
    "id": "IDN",
    "value": 601876
  },
  {
    "id": "IND",
    "value": 467495
  },
  {
    "id": "IRL",
    "value": 502421
  },
  {
    "id": "IRN",
    "value": 801282
  },
  {
    "id": "IRQ",
    "value": 317570
  },
  {
    "id": "ISL",
    "value": 746560
  },
  {
    "id": "ISR",
    "value": 429595
  },
  {
    "id": "ITA",
    "value": 831816
  },
  {
    "id": "JAM",
    "value": 270793
  },
  {
    "id": "JOR",
    "value": 430963
  },
  {
    "id": "JPN",
    "value": 81307
  },
  {
    "id": "KAZ",
    "value": 591831
  },
  {
    "id": "KEN",
    "value": 700115
  },
  {
    "id": "KGZ",
    "value": 131948
  },
  {
    "id": "KHM",
    "value": 304641
  },
  {
    "id": "OSA",
    "value": 817700
  },
  {
    "id": "KWT",
    "value": 870101
  },
  {
    "id": "LAO",
    "value": 380112
  },
  {
    "id": "LBN",
    "value": 448034
  },
  {
    "id": "LBR",
    "value": 3631
  },
  {
    "id": "LBY",
    "value": 764196
  },
  {
    "id": "LKA",
    "value": 123010
  },
  {
    "id": "LSO",
    "value": 755335
  },
  {
    "id": "LTU",
    "value": 368139
  },
  {
    "id": "LUX",
    "value": 598462
  },
  {
    "id": "LVA",
    "value": 863071
  },
  {
    "id": "MAR",
    "value": 959538
  },
  {
    "id": "MDA",
    "value": 225274
  },
  {
    "id": "MDG",
    "value": 803881
  },
  {
    "id": "MEX",
    "value": 860357
  },
  {
    "id": "MKD",
    "value": 82147
  },
  {
    "id": "MLI",
    "value": 263436
  },
  {
    "id": "MMR",
    "value": 983195
  },
  {
    "id": "MNE",
    "value": 378274
  },
  {
    "id": "MNG",
    "value": 452618
  },
  {
    "id": "MOZ",
    "value": 227057
  },
  {
    "id": "MRT",
    "value": 84421
  },
  {
    "id": "MWI",
    "value": 362581
  },
  {
    "id": "MYS",
    "value": 569358
  },
  {
    "id": "NAM",
    "value": 286017
  },
  {
    "id": "NCL",
    "value": 736142
  },
  {
    "id": "NER",
    "value": 764220
  },
  {
    "id": "NGA",
    "value": 269303
  },
  {
    "id": "NIC",
    "value": 716949
  },
  {
    "id": "NLD",
    "value": 104290
  },
  {
    "id": "NOR",
    "value": 825175
  },
  {
    "id": "NPL",
    "value": 389010
  },
  {
    "id": "NZL",
    "value": 180406
  },
  {
    "id": "OMN",
    "value": 432433
  },
  {
    "id": "PAK",
    "value": 349052
  },
  {
    "id": "PAN",
    "value": 948656
  },
  {
    "id": "PER",
    "value": 214012
  },
  {
    "id": "PHL",
    "value": 982736
  },
  {
    "id": "PNG",
    "value": 510062
  },
  {
    "id": "POL",
    "value": 789097
  },
  {
    "id": "PRI",
    "value": 981772
  },
  {
    "id": "PRT",
    "value": 81308
  },
  {
    "id": "PRY",
    "value": 551150
  },
  {
    "id": "QAT",
    "value": 911085
  },
  {
    "id": "ROU",
    "value": 572606
  },
  {
    "id": "RUS",
    "value": 452812
  },
  {
    "id": "RWA",
    "value": 192985
  },
  {
    "id": "ESH",
    "value": 616781
  },
  {
    "id": "SAU",
    "value": 512983
  },
  {
    "id": "SDN",
    "value": 44977
  },
  {
    "id": "SDS",
    "value": 732290
  },
  {
    "id": "SEN",
    "value": 159248
  },
  {
    "id": "SLB",
    "value": 371528
  },
  {
    "id": "SLE",
    "value": 257398
  },
  {
    "id": "SLV",
    "value": 268999
  },
  {
    "id": "ABV",
    "value": 73626
  },
  {
    "id": "SOM",
    "value": 953445
  },
  {
    "id": "SRB",
    "value": 241847
  },
  {
    "id": "SUR",
    "value": 297315
  },
  {
    "id": "SVK",
    "value": 657173
  },
  {
    "id": "SVN",
    "value": 185649
  },
  {
    "id": "SWZ",
    "value": 938678
  },
  {
    "id": "SYR",
    "value": 302077
  },
  {
    "id": "TCD",
    "value": 250529
  },
  {
    "id": "TGO",
    "value": 818310
  },
  {
    "id": "THA",
    "value": 585582
  },
  {
    "id": "TJK",
    "value": 904558
  },
  {
    "id": "TKM",
    "value": 681496
  },
  {
    "id": "TLS",
    "value": 942629
  },
  {
    "id": "TTO",
    "value": 538119
  },
  {
    "id": "TUN",
    "value": 302080
  },
  {
    "id": "TUR",
    "value": 317221
  },
  {
    "id": "TWN",
    "value": 871317
  },
  {
    "id": "TZA",
    "value": 677755
  },
  {
    "id": "UGA",
    "value": 456666
  },
  {
    "id": "UKR",
    "value": 981027
  },
  {
    "id": "URY",
    "value": 367822
  },
  {
    "id": "USA",
    "value": 255212
  },
  {
    "id": "UZB",
    "value": 137903
  },
  {
    "id": "VEN",
    "value": 865825
  },
  {
    "id": "VNM",
    "value": 293237
  },
  {
    "id": "VUT",
    "value": 637612
  },
  {
    "id": "PSE",
    "value": 930097
  },
  {
    "id": "YEM",
    "value": 940441
  },
  {
    "id": "ZAF",
    "value": 666364
  },
  {
    "id": "ZMB",
    "value": 143423
  },
  {
    "id": "ZWE",
    "value": 519035
  },
  {
    "id": "KOR",
    "value": 508941
  }
]
export default function GeogarphyChart() {
    const theme = useTheme();
  return (
    <>
     <Box height={"75vh"} sx={{border: `1px solid ${theme.palette.text.primary}` , borderRadius:"5px" }}>
         <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        data={data}
        projectionScale={140}
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
        features= {geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
       colors="spectral"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -50,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
    </Box> 
    </>
  )
}
