import React from 'react'
import Header from './Component/Header/Headers'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Shop from './Component/Shop/Shop'
import Product from './Component/Product/Product'
import Headers  from './Component/Header/Headers'

const App = () => {
  let router = createBrowserRouter([
    { path:'/',element :(<>
      <Headers/>,
      <Home/>

      

      </>),

  },
    { path:'/about',element :(<>
      <Headers/>,
      <About/>

      

      </>),

  },
    { path:'/shop',element :(<>
      <Headers/>,
      <Shop/>

      

      </>),

  },
    { path:'/product',element :(<>
      <Headers/>,
      <Product/>

      

      </>)

  },

])
  return (
   <>
  <RouterProvider router = {router} />

   </>
  )
}

export default App