import '../commons/template/dependencies'
import React from 'react'
import Routes from './routes'

import Header from '../commons/template/header'
import Sidebar from '../commons/template/sidebar'
import Footer from '../commons/template/footer'

export default props => (
    <div className='wrapper'>
        <Header/>
        <Sidebar/>
            <div className='content-wrapper'>
                <Routes/>
            </div>
        <Footer/>
    </div>
)