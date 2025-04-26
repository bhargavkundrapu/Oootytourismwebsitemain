import './App.css'
import Header from './components/Header';
import AllSections from './components/AllSections';
import Footer from './components/Footer';
import React from 'react';
import ContactUs from './components/ContactUs';
import PickUpDrop from './components/PickUpDrop';
import OotyPackagesDetailedSection from './components/OotyPackagesDetailedSection';
import PyakarPackagesDetailedSection from './components/PyakarPackagesDetailedSection';
import AvalanchePackagesDetailedSection from './components/AvalanchePackagesDetailedSection';
import MadhumalaiPackagesDetailedSection from './components/MadhumalaiPackagesDetailedSection';
import CoonorPackagesDetailedSection from './components/CoonorPackagesDetailedSection';
import GovtmusuemPackagesDetailedSection from './components/GovtmusuemPackagesDetailedSection';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
function App() {

  return (  
    <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route exact path='/' element={<AllSections/>}/>
          <Route exact path='/contact' element={<ContactUs/>}/>
          <Route exact path='/pickupdrop' element={<PickUpDrop/>}/>
          <Route exact path='/ootypackage' element={<OotyPackagesDetailedSection/>}/>
          <Route exact path='/pyakarpackage' element={<PyakarPackagesDetailedSection/>}/>
          <Route exact path='/madumalaipackage' element={<MadhumalaiPackagesDetailedSection/>}/>
          <Route exact path='/avalanchepackage' element={<AvalanchePackagesDetailedSection/>}/>
          <Route exact path='/coonoorpackage' element={<CoonorPackagesDetailedSection/>}/>
          <Route exact path='/govtmuseumpackage' element={<GovtmusuemPackagesDetailedSection/>}/>
        </Routes>
        
        <Footer/> 
        
    </BrowserRouter>
  )
}

export default App
