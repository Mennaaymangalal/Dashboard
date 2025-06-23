import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import LineChart from '../Line/LineChart'
import DownloadIcon from '@mui/icons-material/Download';
import { transaction } from './data';

export default function Row2() {
  const theme = useTheme();

  return (
    <Stack direction="row" flexWrap="wrap" gap={2} mt={4}>
      <Paper
        sx={{
          flexGrow: 1,
          flexBasis: '500px',
          minWidth: '300px',
          maxWidth: '900px',
          p: 2,
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              fontWeight="bold"
              mb={1}
            >
              Revenue Generated
            </Typography>
            <Typography>$59,342.32</Typography>
          </Box>
          <IconButton>
            <DownloadIcon />
          </IconButton>
        </Stack>

        <LineChart isDashboard={true} />
      </Paper>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flexBasis: '350px',
          minWidth: '300px',
          height: '350px',
          flexGrow: 1
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="h6"
            color={theme.palette.secondary.main}
            fontWeight="bold"
          >
            Recent Transaction
          </Typography>
        </Paper>

        <Box>
                 <Paper sx={{ maxHeight: '290px', overflowY: 'auto'}}>
                  {transaction.map((item , index) => {
                 return  <Stack key={index} direction={'row'}  justifyContent={'space-between'} sx={{p:1.5 ,my: 1 , borderBottom:'1px solid grey' , boxShadow: 2} }>
                    <Box>
                    <Typography>
                        {item.txId}
                    </Typography>
                    <Typography sx={{fontSize:'13px'}}>
                        {item.user}
                    </Typography>
                    </Box>
                    
                    <Box>
                     <Typography>
                        {item.date}
                     </Typography>
                    </Box>

                    <Box>
                      <Typography color= {theme.palette.getContrastText(theme.palette.error.main)} sx={{backgroundColor: theme.palette.error.main , borderRadius: 2 , p: 1}}>
                         ${item.cost}
                      </Typography>
                    </Box>
                </Stack>
                }
                )}
                 </Paper>
                          
           
        </Box>
      </Box>
    </Stack>
  );
}
