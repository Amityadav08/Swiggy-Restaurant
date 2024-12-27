
import './App.css'
import  Header from './components/Header' 
import Body from './components/Body';
import {createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu'


function AppLayout() {
  
  return (
    <>
     <Header/>
      <Outlet/>
     <Footer/>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    Children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About/>
      },{
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/>,
  },


]);

export default AppLayout;
