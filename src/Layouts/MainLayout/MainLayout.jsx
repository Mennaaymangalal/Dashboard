import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from '../../Components/TopBar/TopBar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/SideBar/SideBar';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




export default function MainLayout() {
  
  const [open, setOpen] = React.useState(false);

   const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />      
        {/* topBar */}
      <TopBar handleDrawerOpen={handleDrawerOpen} open={open}/>

       {/* sideBar */}
       <SideBar handleDrawerClose={handleDrawerClose} open={open} DrawerHeader={DrawerHeader}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        
       {/* Outlet */}
        <Outlet/>

      </Box>
    </Box>
  );
}
