import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, Name: 'Tommy',Age: "55" , RegisterID: "028765", Cost: "$0" ,Data: "24/11/2000 " , Email: 'theCommunityversion@gmail.com', Age: 14, Phone: '(020)1111557790' },
  { id: 2, Name: 'Jack',Age: "45", RegisterID: "145782",  Cost: "$0" , Data: "2/12/2001 " , Email: 'Communityversion@gmail.com', Age: 35, Phone: '(020)1018376651' },
  { id: 3, Name: 'Roze',Age: "74" , RegisterID: "265478",  Cost: "$0", Data: "21/6/2002 " , Email: 'theCommunityversion@gmail.com', Age: 40, Phone: '0(021)566789841' },
  { id: 4, Name: 'Ashraff',Age: "98" , RegisterID: "264789", Cost: "$0" , Data: "20/8/2004 " ,  Email: 'theCommunityversion@gmail.com', Age: 88, Phone: '(020)1183765413' },
  { id: 5, Name: 'Nissan',Age: "84" , RegisterID: "246206",  Cost: "$0", Data: "14/1/2006 " ,  Email: 'teCommunityversion@gmail.com', Age: 90, Phone: '(020)1019181726' },
  { id: 6, Name: 'Farouk',Age: "42" , RegisterID: "367289",  Cost: "$0" ,Data: "12/2/2008 " , Email: 'teCommunityversion@gmail.com', Age: 24, Phone: '(020)1112257791' },
  { id: 7, Name: 'Musilm',Age: "24" , RegisterID: "394627",  Cost: "$0" , Data: "24/4/1999 " , Email: 'heCommunityversion@gmail.com', Age: 55, Phone: '(020)1515267752' },
  { id: 8, Name: 'Ermak',Age: "14" , RegisterID: "293624", Cost: "$0" , Data: "23/3/1996 " , Email: 'theCommunityversion@gmail.com', Age: 70, Phone: '(020)1029384756' },
  { id: 9, Name: 'Gordal',Age: "30" , RegisterID: "935134",  Cost: "$0" , Data: "22/9/1900 " , Email: 'teCommunityversion@gmail.com', Age: 64, Phone: '(020)1111929576' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 60, headerAlign: 'center', align: 'center' },
  { field: 'RegisterID', headerName: 'Register ID', flex: 1, headerAlign: 'center', align: 'center' },
  { field: 'Age', headerName: 'Age',width : 44 , headerAlign: 'center', align: 'center' },
  { field: 'Name', headerName: 'Name', flex: 1, headerAlign: 'center', align: 'center' },
  { field: 'Phone', headerName: 'Phone Number', flex: 1, headerAlign: 'center', align: 'center' }, 
  { field: 'Email', headerName: 'Email', flex: 1, headerAlign: 'center', align: 'center' },
  { field: 'Cost' , headerName: 'Cost', flex: 1, headerAlign: 'center', align: 'center' },
 
  { field: 'Data' , headerName: 'Data', flex: 1, headerAlign: 'center', align: 'center' },
  
];

export default function Invoices() {
    const theme = useTheme();
  return (
    <>
         <Typography sx={{ color: theme.palette.info.main, fontSize: 24, fontWeight: 'bold' }}>
              INVOICES
            </Typography>
            <Typography sx={{ pb: 2 }}>List of Invoice Balance</Typography>
      
            <Box sx={{ height: 650, width: '98%', mx: 'auto' }}>
              <DataGrid
                checkboxSelection
                rows={rows}
                columns={columns}                
              />
            </Box>
    </>
  )
}
