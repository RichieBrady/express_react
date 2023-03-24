import {useState} from 'react'
import './App.css'
import {Navbar, Hero, AfterHero} from "./components";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero />
            <AfterHero />
        </div>
    )
}

export default App
