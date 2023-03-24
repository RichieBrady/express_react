import {useState, useEffect} from 'react'

const Navbar = () => {
    useEffect(() => {
        console.log('Hello Navbar');
    }, []);
    return (
        <>
            <div className="navbar">
                <div className="logo-container">
                    <a className="logo-placeholder" href="#" target="_blank">
                        Logo
                    </a>
                </div>
                <div className="nav-links-container">
                    <a href="#">
                        <span>Home</span>
                    </a>

                    <a href="#">
                        <span>Link 1</span>
                    </a>

                    <a href="#">
                        <span>Link 2</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar