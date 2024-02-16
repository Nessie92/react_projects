import React, { useEffect, useState } from 'react'

export const RandomColor = () => {
    const [typeOfColour, setTypeOfColour] = useState('hex')
    const [colour, setColour] = useState('#000000')

    function randomColourUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColour() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColour = '#'

        for (let i = 0; i < 6; i++) {
            hexColour += hex[randomColourUtility(hex.length)]
        }

        console.log(hexColour);
        setColour(hexColour)
    }
    function handleCreateRandomRgbColour() {
        const r = randomColourUtility(256)
        const g = randomColourUtility(256)
        const b = randomColourUtility(256)

        setColour(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if (typeOfColour === 'rbg') handleCreateRandomRgbColour()
        else handleCreateRandomHexColour()
    }, [typeOfColour])
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: colour
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginTop: '10px', 
                }}
            >
                <button
                    style={{
                        padding: '10px 20px',
                        background: '#ffffff',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '5px',
                        margin: '10px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setTypeOfColour('hex')}
                >
                    Create HEX Colour
                </button>
                <button
                    style={{
                        padding: '10px 20px',
                        background: '#ffffff',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '5px',
                        margin: '10px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setTypeOfColour('rgb')}
                >
                    Create RGB Colour
                </button>
                <button
                    style={{
                        padding: '15px 30px',
                        background: '#ffffff',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '8px',
                        margin: '20px',
                        cursor: 'pointer',
                    }}
                    onClick={
                        typeOfColour === 'hex' ? handleCreateRandomHexColour : handleCreateRandomRgbColour
                    }
                >
                    Generate Random Colour
                </button>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '10px',
                flexDirection: 'column',
                gap: '10px'
            }} >
                <h3>{typeOfColour === 'rgb' ? 'RGB COLOUR' : 'HEX COLOUR'}</h3>
                <h1>{colour}</h1>
            </div>
        </div>
    )
}
