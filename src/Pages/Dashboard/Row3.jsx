import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import PieChart from '../Pie/PieChart'
import BarChart from '../Bar/BarChart'
import GeogarphyChart from '../Geography/GeogarphyChart'
export default function Row3() {
   const theme = useTheme()
  return (
    <>
      <Stack direction={'row'} gap={2} flexWrap={'wrap'} justifyContent={'space-between'} mt={3}>
        <Paper  sx={{minWidth:'350px' , width: '27%' , flexGrow: 1}}>
          <Typography variant='h6' sx={{color: theme.palette.secondary.main , fontSize: '20px' , fontWeight:'bold' , pt: 4 , pl: 4 , mb: 2 }}>
            Campagin
          </Typography>
           <PieChart isDashboard={true} />
           <Typography variant='h6' sx={{textAlign:'center', mt:5 ,lineHeight: 1.4, fontSize: 33}}>
            $48,352 revenue generated
           </Typography>
           <Typography variant='body2' sx={{textAlign:'center' , mb: 3}}>
            Includes extra misc expenditures and costs
           </Typography>
        </Paper>

         <Paper  sx={{minWidth:'350px' , width: '32%' , flexGrow: 1}}>
         <Typography variant='h6' sx={{color: theme.palette.secondary.main , fontSize: '20px' , fontWeight:'bold' , pt: 4 , pl: 4 , mb: 2 }}>
            Sales Quantity
          </Typography>
          <BarChart isDashboard={true} />
        </Paper>

         <Paper  sx={{minWidth:'350px' , width: '32%' , flexGrow: 1}}>
          <Typography variant='h6' sx={{color: theme.palette.secondary.main , fontSize: '20px' , fontWeight:'bold' , pt: 4 , pl: 4 , mb: 2 }}>
            Geogaphy Based Traffic
          </Typography>      
          <GeogarphyChart isDashboard={true}/>    
        </Paper>
      </Stack>
    </>
  )
}
