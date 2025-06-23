import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import DownloadIcon from '@mui/icons-material/Download';


export default function Dashboard() {
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
           Dashboard
          </Typography>
          <Typography sx={{ pb: 2 }}>
           Welcome to your dashboard
          </Typography>

          <Box>
            <Box sx={{textAlign: 'end'}}>
            <Button variant='contained' color='primary' sx={{textTransform:'capitalize' , padding: '6px 8px'}}>
            <DownloadIcon sx={{pr:'5px' }} /> Downloads Reports
            </Button>
            </Box>
          <Row1/>
          <Row2/>
          <Row3/>
          </Box>
    
    </>
  )
}
