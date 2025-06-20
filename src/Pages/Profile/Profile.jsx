import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

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
const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
const mobileRegex = /^01[0-2,5]{1}[0-9]{8}$/;

export default function Profile() {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("doneee");
    handleClick();
  };

  console.log(watch("example"));

  const [open, setOpen] = React.useState(false);

  //  snackbar
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        component="form"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          {/* first name */}
          <TextField
            {...register("firstName", { required: true, minLength: 3 })}
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This Field is Required & min 3 Characters"
                : null
            }
            sx={{ flex: 1 }}
            label="First Name "
            variant="filled"
          />

          {/* last name */}
          <TextField
            {...register("lastName", { required: true, minLength: 3 })}
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This Field is Required & min 3 Characters"
                : null
            }
            sx={{ flex: 1 }}
            label="Last Name "
            variant="filled"
          />
        </Stack>
        {/* email field */}
        <TextField
          {...register("email", { required: true, pattern: emailRegex })}
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "Invalid email format. Please use a valid email address"
              : null
          }
          label="Email "
          variant="filled"
        />
        {/* phone field */}
        <TextField
          {...register("phone", { required: true, pattern: mobileRegex })}
          error={Boolean(errors.phone)}
          helperText={
            Boolean(errors.phone)
              ? "Enter a valid 11-digit Egyptian mobile number."
              : null
          }
          label="Contact Number "
          variant="filled"
        />
        <TextField label="Address 1 " variant="filled" />
        <TextField label="Address 2 " variant="filled" />
        <TextField select label="Role" defaultValue="User" variant="filled">
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "end" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Create New User
          </Button>
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
