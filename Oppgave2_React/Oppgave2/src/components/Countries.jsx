import './countries.css'

import { useEffect, useState } from "react"

export default function USA () {
    const [weather, setWeather] = useState("Sol")
    const [degrees, setDegree] = useState(34)

    const [nok, setNok] = useState(0)
    const [usd, setUsd] = useState(0)

    


    function nokToUSD() {
        setUsd(nok * 0.093)
    }

    return(
        <>

            <h1>USA</h1>

            <div className='USA'>
                
                <div className='weather'>
                    
                    <p>Været i USA er {weather} og gradene er {degrees}C</p>
                </div>

                <div className='exchange'>
                    <form>  
                        <label> Skriv inn Nok
                            <input
                                type="text"
                                value={nok}
                                onChange={(e) => setNok(e.target.value)}
                            />
                        </label>
                    </form>
                
                    <button onClick={nokToUSD}></button>
                    <p>Antallet i dollar er {usd}</p>
                </div>

            </div>
        </>
    )
}

