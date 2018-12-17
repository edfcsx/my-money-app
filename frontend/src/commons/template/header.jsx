import React from 'react'

export default props => (
    <header className='main-header'>
        <a href="/#/" className='logo'>
            <span className='logo-mini'><b>My</b>M</span>
            <span className='logo-lg'>
                <i className='fa fa-money'><b>My</b> Money</i>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href='javascript:;' className='sidebar-toggle' data-toggle='offcanvas'> </a>
        </nav>
    </header>
)