import { useState } from "react"

export default function Modal({ hidden, hiddenError, setHidden, setHiddenError }) {
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(!clicked)
        setHidden(false)
        setHiddenError(false)
    }

    return (
        <>
            <div className={`h-screen flex items-center justify-center ${!hidden ? 'hidden' : ''}`}>
                <h1 className="text-center text-3xl">Thank you! Form as been submitted.</h1>
            </div>

            <div className={`h-screen flex items-center justify-center ${!hiddenError ? 'hidden' : ''} ${clicked ? 'hidden' : ''}`}>
                <h1 className="text-center text-3xl">Error, Please try again.</h1>
                <p onClick={handleClick} className='cursor-pointer'>[x]</p>
            </div>
        </>
    )
}