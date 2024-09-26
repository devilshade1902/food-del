import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Delivery from './pages/Delivery';
import Dineout from './components/Dineout/Dineout';
import Caticon_res from './components/Caticon_res/Caticon_res';
import Restmenu from './components/Restmenu/Restmenu';
import Brandicon_res from './components/brandicon_res/Brandicon_res';
import Footer from './components/footer/Footer';
import Categoryrest from './components/categoryrest/Categoryrest';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Delivery/>}/>
        <Route path='/dineout' element={<Dineout/>}/>
        <Route path='/restaurants' element={<Caticon_res/>}>
          <Route path=':categoryname' element={<Caticon_res/>}/>
        </Route>
            <Route path='/catrest' element={<Categoryrest/>}/>
        <Route path='/bestrestaurants' element={<Restmenu/>}>
          <Route path=':restaurantId' element={<Restmenu/>}/>
        </Route>
        <Route path='/brands' element={<Brandicon_res/>}>
          <Route path=':brandname' element={<Brandicon_res/>}/>
        </Route>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
