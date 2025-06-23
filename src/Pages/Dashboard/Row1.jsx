
import React from 'react'
import Card from './Card'
import { Stack, useTheme } from '@mui/material'
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import PointOfSaleSharpIcon from '@mui/icons-material/PointOfSaleSharp';
import PersonAddAlt1SharpIcon from '@mui/icons-material/PersonAddAlt1Sharp';
import TrafficSharpIcon from '@mui/icons-material/TrafficSharp';

export default function Row1() {
    const theme = useTheme()
  return (
    <>
     <Stack direction={'row'} flexWrap={'wrap'} gap={1} justifyContent={{xs: 'center' , sm: 'space-between'}}>

     <Card Icon={<EmailSharpIcon sx={{fontSize: '23px'  ,color: theme.palette.secondary.main}}/>}  schema='set1'  text1={'12,361'} text2={'Emails Sent'}  Increase={'+14%'}/> 
     <Card Icon={<PointOfSaleSharpIcon sx={{fontSize: '23px'  ,color: theme.palette.secondary.main}}/>}  schema='category10' text1={'431,225'} text2={'Sales Obtained'}  Increase={'+21%'}/> 
     <Card Icon={<PersonAddAlt1SharpIcon sx={{fontSize: '23px'  ,color: theme.palette.secondary.main}}/>}  schema='dark2' text1={'32,441'} text2={'New Clients'}  Increase={'+5%'}/> 
     <Card Icon={<TrafficSharpIcon sx={{fontSize: '23px'  , color: theme.palette.secondary.main}}/>}  schema='paired' text1={'1,325,134'} text2={'Traffic Recieved'}  Increase={'+43%'}/>

     </Stack>
    </>
  )
}
