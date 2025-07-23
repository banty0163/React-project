import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import Github from './Components/Github/Github.jsx'
import Another from './Components/Github/Another.jsx'
import User from './Components/User/User.jsx'

// const router = createBrowserRouter([
//    {
//     path:'/',
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:'/about',
//       element:<About/>
//     },
//     {
//       path:'/contact',
//       element:<ContactUs/>
//     },
//     {
//       path:'/github',
//       element:<Github/>
//     }
//   ]
//    }


// ])

const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<ContactUs/>} />
      <Route
      
      path='github' 
      element={<Github/>} 
      />
      <Route path='user/:userId' element={<User/>} /> 
      {/* this userId is used to print the URL you mnentioned */}
      {/* <Route path='github/another' element={<Another/>} /> */}
      
     </Route>
   )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
