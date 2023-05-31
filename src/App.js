import React from 'react'
import "./index.scss";
import { MainPage, Contact, Team, SoftWareProject, PosSystem, Ecommerce, Clinic } from "./Pages";
import { NavBar, Footer } from "./components";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    const { t, i18n } = useTranslation();
    return (

        <Router>
            <div className='app-container'>
                <NavBar t={t} i18n={i18n} />
                <div className='app'>
                    <Routes>
                        <Route path='/' element={<MainPage t={t} />} />
                        <Route path='/contact' element={<Contact t={t} />} />
                        <Route path='/team' element={<Team t={t} />} />
                        <Route path='/software' element={<SoftWareProject t={t} />} />
                        <Route path='/pos' element={<PosSystem t={t} />} />
                        <Route path='/ecommerce' element={<Ecommerce t={t} />} />
                        <Route path='/clinic' element={<Clinic t={t} />} />
                    </Routes>
                </div>
                <Footer t={t} />
            </div>
        </Router>


    )
}

export default App;