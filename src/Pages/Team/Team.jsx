import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';
import { rows } from './Data';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';


  

export default function Team() {
const theme = useTheme()


 const columns = [
  { field: 'id', headerName: 'id',  headerAlign: "center"  , align: "center" , width : 33},
  { field: 'name', headerName: 'name', flex: 1 , headerAlign: "center" , align: "center" },
  { field: 'Email', headerName: 'Email', flex: 1 , headerAlign: "center"  , align: "center"  },
  { field: 'Age', headerName: 'Age', flex: 1 , headerAlign: "center" , align: "center" },
  { field: 'Phone', headerName: 'Phone', flex: 1 , headerAlign: "center"  , align: "center"  },
  { field: 'Access', headerName: 'Access', flex: 1 , headerAlign: "center" , align: "center"
    , renderCell:( {row : { Access }}) => {
     return  <Box
      sx={{
      backgroundColor: Access === "Admin" ? theme.palette.primary.dark  : Access === "Manger" ? theme.palette.secondary.dark :" #3da58a"
      , p: "5px"
       , width: "99px"
       , margin: "auto"       
       , borderRadius:"3px"
       , display: "flex"
       ,justifyContent:"space-evenly",
       mt: 1
       }}>
      {Access === "Admin" && <AdminPanelSettingsOutlinedIcon fontSize='small' sx={{color:"white"}}/>} 
      {Access === "Manger" && <SecurityOutlinedIcon fontSize='small' sx={{color:"white"}}/>} 
      {Access === "User" && <LockOpenOutlinedIcon fontSize='small' sx={{color:"white"}}/>} 
      
    <Typography sx={{fontSize: "13px" , color: "white"}}>{Access}</Typography>      
    </Box>
  }
   },
];

  return (
    <>
    <Typography sx={{color: theme.palette.info.main ,fontSize: 24 , fontWeight:"bold"}}>TEAM</Typography>
    <Typography sx={{pb:2}}>Managing the Team Members</Typography>
     <div style={{ height: 650, width: '98%', margin: "auto" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </>
  )
}
