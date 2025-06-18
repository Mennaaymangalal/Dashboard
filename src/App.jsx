import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import { ThemeProvider,  createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Team from './Pages/Team/Team';
import Contacts from './Pages/Contacts/Contacts';
import Invoices from './Pages/Invoices/Invoices';
import Profile from './Pages/Profile/Profile';
import Calender from './Pages/Calender/Calender';
import Faq from './Pages/Faq/Faq';
import Bar from './Pages/Bar/Bar';
import Pie from './Pages/Pie/Pie';
import Line from './Pages/Line/Line';
import Geography from './Pages/Geography/Geography';


const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() { 
  const router = createBrowserRouter([
    {path:"/" , element: <MainLayout/> , children:[
      {index: true , element:<Dashboard/>},
      {path: "team" , element:<Team/>},
      {path: "contacts" , element:<Contacts/>},
      {path: "invoices" , element:<Invoices/>},
      {path: "profile" , element:<Profile/>},
      {path: "calender" , element:<Calender/>},
      {path: "faq" , element:<Faq/>},
      {path: "bar" , element:<Bar/>},
      {path: "pie" , element:<Pie/>},
      {path: "line" , element:<Line/>},
      {path: "geography" , element:<Geography/>},
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
