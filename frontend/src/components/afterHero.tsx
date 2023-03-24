import {useState, useEffect} from 'react'
const AfterHero = () => {
    // const [randomNumber, setRandomNumber] = useState(0);
    useEffect(() => {
        console.log('Hello Hero');
    }, []);
    // const getRandom = () => {
    //     fetch(`http://localhost:3000/random`, {
    //         method: 'GET',
    //     })
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 const rand: number = result['random'];
    //                 setRandomNumber(rand);
    //             },
    //             (error) => {
    //                 console.log(error.message);
    //             }
    //         )
    // }
    return (
        <>
            <div className="after-hero">

            </div>
        </>
    )
}

export default AfterHero