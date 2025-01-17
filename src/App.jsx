import React, { useCallback, useState } from 'react'
import Header from './Component/Header/Headers'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Shop from './Component/Shop/Shop'
import Product from './Component/Product/Product'
import Headers  from './Component/Header/Headers'

const App = () => {
 
  const [cartCount, setCartCount] = useState(0);

 
  const handleAddToCart = useCallback(() => {
    setCartCount((prev) => prev + 1);
  }, []); 


  

  let router = createBrowserRouter([
    { path:'/',element :(<>
      <Headers  cartCount={cartCount} />
      <Home/>

      

      </>),

  },
    { path:'/about',element :(<>
      <Headers cartCount={cartCount}/>
      <About/>

      

      </>),

  },
    { path:'/shop',element :(<>
      <Headers cartCount={cartCount}/>,
      <Shop/>

      

      </>),

  },
    { path:'/product',element :(<>
      <Headers cartCount={cartCount}/>,
      <Product  onAddToCart={handleAddToCart} />

      

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