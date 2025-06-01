import './App.css'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Startframework from './components/Startframework/Startframework'



let x = createBrowserRouter([
  {path:"", element: <Layout/>, children:[
    {index:true , element:<Startframework/>},
    {path:'about' , element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact", element:<Contact/>},
  ]},
])

function App() {
  

  return (
    <>
     <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App


