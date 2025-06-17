
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import { ThemeProvider,  createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
 
  const router = createBrowserRouter([
    {path:"/" , element: <MainLayout/> , children:[
      {index: true , element:<Dashboard/>}
    ]}
  ])

  return (
    <>
     <ThemeProvider theme={theme}>
     <CssBaseline /> 
     <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
    </>
  )
}

export default App
