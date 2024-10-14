import { useState } from "react"

export default function USA () {
    const [weather, setWeather] = useState("Sol")
    const [degree, setDegree] = useState(0)
    const [nok, setNok] = useState(0)
    const [usd, setUsd] = useState(0)


    function nokToUsd () {
        event.preventDefault();
        setUsd(nok * 10)
    }

    return(
        <>
            <h1>USA</h1>
            <p>Været er {weather} og det er {degree}°C grader </p>

            <form>
                <label>Skriv inn Nok
                    <input
                        type="text"
                        value={nok}
                        onChange={(e) => setNok(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={nokToUsd}></button>
            <p>Dollar er {usd}</p>
        </>
    )
}