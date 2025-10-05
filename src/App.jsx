import {  createBrowserRouter , RouterProvider} from 'react-router-dom'
import { lazy , Suspense } from 'react'
import './App.css'
import LottiHandeler from '../src/assets/Lottifiles/LottiHandeler'
import toast, { Toaster } from 'react-hot-toast';

const Layout = lazy(()=> import('./layout/Layout/Layout'))
const Home = lazy(()=> import('./pages/Home/Home'))
const About = lazy(()=> import('./pages/About/About'))
const Shop = lazy(()=> import('./pages/Shop/Shop'))
const Shoes = lazy(()=> import('./pages/Shoes/Shoes'))
const SaleShoes = lazy(()=> import('./pages/Shoes/SaleShoes'))
const Clothes = lazy(()=> import('./pages/Clothes/Clothes'))
const SaleClothes = lazy(()=> import('./pages/Clothes/SaleClothes'))
const Bags = lazy(()=> import('./pages/Bags/Bags'))
const SaleBags = lazy(()=> import('./pages/Bags/SaleBags'))
const Contact = lazy(()=> import('./pages/Contact/Contact'))
const Cart = lazy(()=> import('./pages/Cart/Cart'))
const Wishlist = lazy(()=> import('./pages/Wishlist/Wishlist'))
const Regiser = lazy(()=> import('./common/auth/Regiser'))
const Login = lazy(()=> import('./common/auth/Login'))
const Profile = lazy(()=> import('./common/Profile/Profile'))
const Orders = lazy(()=> import('./pages/Orders/Orders'))


function App() {   
const router = createBrowserRouter([
  {
    path : '/',
    element : <Suspense fullback={<LottiHandeler status= 'main' />}><Layout/></Suspense>,
    children : [
      {index: true , element :
                <Suspense fullback={<LottiHandeler status= 'main' />}> <Home/></Suspense> },
      {path: 'about' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <About/></Suspense> },
      {path: 'shop' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Shop/></Suspense> },
      {path: 'bags' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Bags/></Suspense> },
      {path: 'saleBags' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <SaleBags/></Suspense> },
      {path: 'shoes' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Shoes/></Suspense> },
      {path: 'saleShoes' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <SaleShoes/></Suspense> },
      {path: 'clothes' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Clothes/></Suspense> },
      {path: 'saleClothes' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <SaleClothes/></Suspense> },
      {path: 'contact' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Contact/></Suspense> },
      {path: 'cart' , element :
                <Suspense fullback={<LottiHandeler status= 'cart' />}> <Cart/></Suspense> },
      {path: 'wishlist' , element :
                <Suspense fullback={<LottiHandeler status= 'wishlist' />}> <Wishlist/></Suspense> },
      {path: 'register' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Regiser/></Suspense> },
      {path: 'login' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Login/></Suspense> },
      {path: 'profile' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Profile/></Suspense> },
      {path: 'orders' , element :
                <Suspense fullback={<LottiHandeler status= 'page' />}> <Orders/></Suspense> }      
    ],
    errorElement : <LottiHandeler status= 'Err' />
  }
],
{basename: '/meme'}
)
return <>
< RouterProvider router={router}/>
< Toaster />
</>
}
export default App
