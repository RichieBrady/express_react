import {useState, useEffect} from 'react'
import reactLogo from "../assets/react.svg";
import viteLogo from '/vite.svg'

const Hero = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    useEffect(() => {
        console.log('Hello Hero');
    }, []);
    const getRandom = () => {
        fetch(`http://localhost:3000/random`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    const rand: number = result['random'];
                    setRandomNumber(rand);
                },
                (error) => {
                    console.log(error.message);
                }
            )
    }
    return (
        <>
            <div className="hero">
                <div className="logo-container">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>

                <h1>Vite + React</h1>
                <p className="read-the-docs">
                    Click on the button to get a random number between 1 and 100 from express api
                </p>
                <div className="card">
                    <button onClick={() => getRandom()}>
                        random number is {randomNumber}
                    </button>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </>
    )
}

export default Hero