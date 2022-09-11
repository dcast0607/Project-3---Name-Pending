import React, { useState } from 'react';
import Navtab from './navtab';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Home from './pages/home';



export default function PortfolioContainer(params) {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = (params) => {
        if (currentPage === 'Home') {
            return <Home userData={params.userData}/>;
        }
        if (currentPage === 'Projects') {
            return <Projects userData={params.userData}/>;
        }
        if (currentPage === 'Contact') {
            return <Contact userData={params.userData}/>;
        }
            return <Resume/>;
        };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='navBar' >
            <Navtab currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}



