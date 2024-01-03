import React from 'react'
import './NavBar.scss'

function NavBar() {
    return (
        <div className='navBar'>
            <div className="wrapper">
                <span>WEBDEV</span>
                <div className="social">
                    <a href='/'><img src={require('../../Imagess/gitHub.jpg')} alt='' /></a>
                    <a href='/'><img src={require('../../Imagess/instagram.jpg')} alt='' /></a>
                    <a href='/'><img src={require('../../Imagess/linedin.jpg')} alt='' /></a>

                </div>
            </div>


        </div>
    )
}

export default NavBar