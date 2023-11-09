// import logo from './logo.svg';
import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from './components/Services';
import Home from "./components/Home";
import HomePageCustomerTestimonials from "./components/HomePageCustomerTestimonials";
import SliderGallery from './components/SliderGallery';
import Login from './components/Login';
import Register from './components/Register';
import Architect from './components/Architect';
import Rent from './components/Rent';
import Properties from './components/Rent/Properties';
import PropertyServices from './components/Rent/PropertyServices';
import PopularArchitects from './components/PopularArchitects';
import SingleArchitect from "./components/SingleArchitect";
import SideDashboard from './components/Customer/SideDashboard';
import CustProfile from './components/Customer/CustProfile';
import CustLogin from './components/Customer/CustLogin';
import CustRegister from "./components/Customer/CustRegister";
import CustPassword from './components/Customer/CustPassword';
import CustAddress from './components/Customer/CustAddress';
import CustAddAddress from './components/Customer/CustAddAddress';
import CustAccount from './components/Customer/CustAccount';
import CustWishlist from './components/Customer/CustWishlist';
import CustSubscription from './components/Customer/CustSubscription';
import CustPrevAppointment from './components/Customer/CustPrevAppointment';
import VendChangePass from './components/Vendor/VendChangePass';
import VendSideDashboard from './components/Vendor/VendSideDashboard';
import VendAddService from './components/Vendor/VendAddService';
import VendServices from './components/Vendor/VendServices';
import VendAddress from './components/Vendor/VendChangeAddress';
import VendAddAddress from './components/Vendor/VendAddAddress';
import VendPrevAppointment from './components/Vendor/VendPrevAppointments';
import VendProfile from './components/Vendor/VendProfile';
import VendLogin from './components/Vendor/VendLogin';
import VendRegister from './components/Vendor/VendRegister';



function App() {
  return (
      <>
      <Header/>
      {/* <Apps/> */}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Rent' element={<Rent/>} />
      <Route path='/PropertyServices' element={<PropertyServices/>} />
      <Route path='/Properties' element={<Properties/>} />
      <Route path='/SliderGallery' element={<SliderGallery/>} />
      <Route path='/PopularArchitects' element={<PopularArchitects/>} />
      <Route path='/CustLogin' element={<CustLogin/>} />
      <Route path='/CustRegister' element={<CustRegister/>} />
      <Route path='/VendLogin' element={<VendLogin/>} />
      <Route path='/VendRegister' element={<VendRegister/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/HomePageCustomerTestimonials' element={<HomePageCustomerTestimonials/>} />
      <Route path='/Architect' element={<Architect/>} />
      <Route path='/SingleArchitect' element={<SingleArchitect/>} />
      <Route path='/SideDashboard' element={<SideDashboard/>} />
      <Route path='/CustProfile' element={<CustProfile/>} />
      <Route path='/CustPassword' element={<CustPassword/>} />
      <Route path='/CustAddress' element={<CustAddress/>} />
      <Route path='/CustAddAddress' element={<CustAddAddress/>} />
      <Route path='/CustAccount' element={<CustAccount/>} />
      <Route path='/CustWishlist' element={<CustWishlist/>} />
      <Route path='/CustSubscription' element={<CustSubscription/>} />
      <Route path='/CustPrevAppointment' element={<CustPrevAppointment/>} />
      <Route path='/VendSideDashboard' element={<VendSideDashboard/>} />
      <Route path='/VendChangePass' element={<VendChangePass/>} />
      <Route path='/VendServices' element={<VendServices/>} />
      <Route path='/VendAddAddress' element={<VendAddAddress/>} />
      <Route path='/VendAddService' element={<VendAddService/>} />
      <Route path='/VendAddress' element={<VendAddress/>} />
      <Route path='/VendProfile' element={<VendProfile/>} />
      <Route path='/VendPrevAppointment' element={<VendPrevAppointment/>} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
