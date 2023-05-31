import React from 'react';
import { Home , About , Servies } from '../components';
const MainPage = ({t}) => {
    return (
        <>
        
        <Home t={t}/>
        <About t={t}/>
        <Servies t={t}/>
        </>
    )
}

export default MainPage