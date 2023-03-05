import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from "./router/home/Home"
import Cart from "./router/cart/Cart"
import Like from "./router/like/Like"
import Footer from './components/footer/Footer';
import Admin from './router/admin/Admin'
import SingleRoute from './router/singleroute/SingleRoute';
import { useSelector } from 'react-redux';
import Skrol from './components/skrol.js/Skrol';


function App() {
  const auth = useSelector(s=> s.auth)






  return (
<div className="App">
  {/* <Subheader/> */}
  <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/information/:id'element={<SingleRoute/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/like'element={<Like/>}/>

        {
          auth ?
          <Route path='/' element={<Navigate replace to={'/admin'}/>}/>
          :
          <Route path='/admin' element={<Navigate replace to={'/'}/>}/>
        }

        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
      <Skrol/>
      <Footer/>
    </div>
  );
}

export default App;
