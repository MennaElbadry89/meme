
import './Navbar.css'
import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { GiHighHeel } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';
import { cartContext } from '../../context/CartContext';
import { wishListContext } from '../../context/WishListContext';


function Navbar (){

const {currentUser , loadingDisplayCurrentUser , logout} = useContext(authContext)

const {cartIdes} = useContext(cartContext)
const totalQuantityOfCart = Object.values(cartIdes).reduce((a , b)=>{
  return a + b
} , 0)
console.log(totalQuantityOfCart)

const {wishListItems} = useContext(wishListContext)
console.log(wishListItems)
const totalQuantityOfWishList = wishListItems.length
    

return(
    <div className='Navbar'>
    <nav className="navbar navbar-expand-lg">
     <div className="container-fluid">
    <Link to={'/'} className="navbar-brand">
    <b style={{color:'var(--secondry-color)'}}>Meme</b> Store <BsHandbagFill style={{color: 'red'}}/><GiHighHeel style={{color: 'orange'}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <CiMenuFries/>
    </button>
    
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-lg-0 mx-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={"about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={"shop"}>Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={"contact"}>Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"products"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"bags"}>Bag <BsHandbagFill style={{color: 'brown'}}/></Link></li>
            <li><Link className="dropdown-item" to={"shoes"}>Shoes <GiHighHeel />  </Link></li>
            <li><Link className="dropdown-item" to={"clothes"}>Clothes <GiAmpleDress /> </Link></li>
          </ul>
        </li>
      </ul>

    <div className='cart flex'>
     
     { 
     loadingDisplayCurrentUser?
     <div>
     <div className='spinner text-light border'style={{width : '15px' , height: '15px'}} ></div>
      <span className='ms-2'>Loading</span>
     </div>
     :
     !loadingDisplayCurrentUser && !currentUser ?
    <button className='authHandler'>
      <Link  to={'register'}>Register</Link>
      <Link  to={'login'}>Login</Link>
    </button>
    :
    <div className="nav-item dropdown">
    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Welcome : <span style={{color: 'var(--secondry-color)'}}>{currentUser.firstName}</span>
    </button>
     <ul className="dropdown-menu p-2">
    <li ><Link to={'/profile'} className="btn btn-info d-block w-100" >Profile</Link></li>
    <li ><Link to={'/orders'} className="btn btn-info d-block w-100 my-1" style={{background: "var(--secondry-color)"}}>Orders</Link></li>
    <li ><button className="btn btn-danger d-block w-100 mt-1" onClick={logout}
     data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</button></li>

    </ul>
   </div>
    }
     <div>
    <Link to={'wishlist'}> < FaHeart className='icon' /> </Link>
    <sub >{currentUser && (totalQuantityOfWishList)}</sub>
    </div>

    <div>
    <Link to={'cart'}> <FaShoppingCart className='icon'/></Link>
    <sub >{currentUser && (totalQuantityOfCart)}</sub>
    </div>
    </div>

    </div> 
  </div>
</nav>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Alert !!</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure to logout? 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Confirm</button>
      </div>
    </div>
  </div>
</div>


</div>

    )
}

export default Navbar