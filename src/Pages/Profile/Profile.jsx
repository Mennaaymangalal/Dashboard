import { Box, Button, MenuItem, Stack, TextField, Typography, useTheme } from "@mui/material";
import React from "react";


const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
 
];

export default function Profile() {
  const theme = useTheme();
  return (
    <>
      <Typography
        sx={{
          color: theme.palette.info.main,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        CREATE USER
      </Typography>
      <Typography sx={{ pb: 2 }}>Create a New User Profile</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        component="form"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField sx={{ flex: 1 }} label="First Name " variant="filled" />
          <TextField sx={{ flex: 1 }} label="Last Name " variant="filled" />
        </Stack>
        <TextField label="Email " variant="filled" />
        <TextField label="Contact Number " variant="filled" />
        <TextField label="Address 1 " variant="filled" />
        <TextField label="Address 2 " variant="filled" />
        <TextField
          select
          label="Role"
          defaultValue="User"         
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{textAlign:"end"}}>
          <Button type="submit" variant="contained" sx={{textTransform:"capitalize"}}>Create New User</Button>
        </Box>
      </Box>
    </>
  );
}
