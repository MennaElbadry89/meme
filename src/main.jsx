
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'swiper/css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { DisplayContextProvider } from './context/DisplayContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { WishListContextProvider } from './context/WishListContext.jsx'
import { PlaceOrderContextProvider } from './context/PlaceOrderContext.jsx'



createRoot(document.getElementById('root')).render(
      <AuthContextProvider>
        <DisplayContextProvider>
            <CartContextProvider>
                <WishListContextProvider>  
                    <PlaceOrderContextProvider>
                             <App />
                    </PlaceOrderContextProvider>            
                </WishListContextProvider>
            </CartContextProvider>
         </DisplayContextProvider>
     </AuthContextProvider>
  

)
