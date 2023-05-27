import { useEffect, useRef, useState } from "react";

const CountdownComponent = ({nb, onDone}) => {
    // Define a state containing the timer
    const [timeRemaining, setTimeRemaining] = useState(30)
    // Define a ref because we don't need it for render, it's equal to the timeRemaining state
    const timerRef = useRef(null)

    // Repeat this function every time the nb or onDone props change
    useEffect(() => {
        // Set the timer to 30s
        setTimeRemaining(30)

        // Delete the current interval contain in the timerRef
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
        
        // Define a new timer and store the id of the setInteral
        timerRef.current = setInterval(() => {
            // Set a new timeRemaining with one second being removed
            setTimeRemaining((prevTime) => {
                if (prevTime - 1 === 0) {
                    // If the timer reach zero we clear the timer and trigger the onDone function
                    clearInterval(timerRef.current)
                    onDone()
                }
                return prevTime - 1
            })
        }, 1000)
        
        // Cleanup function to stop any timer when the component is umounted
        return () => {
            clearInterval(timerRef.current)
        }
        
    }, [nb, onDone])

    return <div className={`timerDisplay ${timeRemaining < 5 ? "red" : "white"}`}>{timeRemaining}s</div>
}

export default CountdownComponent;