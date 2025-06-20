import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, Name: 'Tommy',RegisterID: "028765",Address: "Torel " , City: "Cairo" ,  ZipCode: "1001" , Email: 'theCommunityversion@gmail.com', Age: 14, Phone: '(020)1111557790' },
  { id: 2, Name: 'Jack',RegisterID: "145782", Address: "Mashaya " , City: "Alex" , ZipCode: "000655" , Email: 'Communityversion@gmail.com', Age: 35, Phone: '(020)1018376651' },
  { id: 3, Name: 'Roze',RegisterID: "265478", Address: "El Bahr st " , City: "Dakhlya" , ZipCode: "1102" , Email: 'theCommunityversion@gmail.com', Age: 40, Phone: '0(021)566789841' },
  { id: 4, Name: 'Ashraff',RegisterID: "264789", Address: "Madinet Nasr " , City: "Sharqya" , ZipCode: "00556" ,  Email: 'theCommunityversion@gmail.com', Age: 88, Phone: '(020)1183765413' },
  { id: 5, Name: 'Nissan',RegisterID: "246206", Address: "October ", City: "London" , ZipCode: "44550" ,  Email: 'teCommunityversion@gmail.com', Age: 90, Phone: '(020)1019181726' },
  { id: 6, Name: 'Farouk',RegisterID: "367289", Address: "Obour " , City: "Paris" , ZipCode: "11550" , Email: 'teCommunityversion@gmail.com', Age: 24, Phone: '(020)1112257791' },
  { id: 7, Name: 'Musilm',RegisterID: "394627", Address: "Fisal " , City: "Mansoura" , ZipCode: "123987" , Email: 'heCommunityversion@gmail.com', Age: 55, Phone: '(020)1515267752' },
  { id: 8, Name: 'Ermak',RegisterID: "293624", Address: "West Elbalad " , City: "Ismaillia" , ZipCode: "2345" , Email: 'theCommunityversion@gmail.com', Age: 70, Phone: '(020)1029384756' },
  { id: 9, Name: 'Gordal',RegisterID: "935134", Address: "Elgalaa " , City: "Marrasy" , ZipCode: "5006" , Email: 'teCommunityversion@gmail.com', Age: 64, Phone: '(020)1111929576' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 60, headerAlign: 'center', align: 'center' },
  { field: 'RegisterID', headerName: 'Register ID', flex: 1, headerAlign: 'center', align: 'center' },
  { field: 'Name', headerName: 'Name', flex: 1, headerAlign: 'center', align: 'center' },
  { field: 'Phone', headerName: 'Phone Number', flex: 1, headerAlign: 'center', align: 'center' }, 
  { field: 'Email', headerName: 'Email', flex: 1, headerAlign: 'center', align: 'center' },
  { field: 'Address' , headerName: 'Address', flex: 1, headerAlign: 'center', align: 'center' },
   { field: 'City', headerName: 'City', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'ZipCode' , headerName: 'Zip Code', flex: 1, headerAlign: 'center', align: 'center' },
  
];

export default function Contacts() {
  const theme = useTheme();

  return (
    <>
      <Typography sx={{ color: theme.palette.info.main, fontSize: 24, fontWeight: 'bold' }}>
        CONTACTS
      </Typography>
      <Typography sx={{ pb: 2 }}>List of Contacts for Future Reference</Typography>

      <Box sx={{ height: 650, width: '98%', mx: 'auto' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          showToolbar 
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 300 },
            },
          }}
          sx={{
             '& .MuiDataGrid-columnHeaders': {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
            },
            '& .MuiDataGrid-cell': {
             
            },
            '& .MuiDataGrid-toolbarContainer': {
              justifyContent: 'flex-start',
            },
          }}
        />
      </Box>
    </>
  );
}
