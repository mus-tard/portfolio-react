import * as React from "react"
import 
    { 
        bar,
        lead,
        eraser,
        pencil,
        container,
        rectangle,

    } from "./hamIcon2.module.css"

function HamIcon2({width}) {

    return (
        <div className={container}>
            <div className={bar}></div>
            <div className={pencil}>
                <div className={eraser}>
                    <svg width="100%" height="100%" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.59738 0.995117L6.59303 8.99512L2.55345 8.99292C1.14394 8.99215 0.000610215 7.84758 0.00137711 6.43807L0.00295118 3.54499C0.00371808 2.13548 1.14829 0.992152 2.5578 0.992919L6.59738 0.995117Z" fill="#4F5AD0"/>
                    </svg>
                </div>
                <div className={rectangle}></div>
                <div className={lead}>
                    <svg width="100%" height="100%" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.0943 4.97802C1.40501 5.18806 4.88365 3.14782 4.85434 2.94442C4.82503 2.74102 1.43112 0.850677 1.09768 1.00175C0.763101 1.15251 0.784734 4.76827 1.09544 4.97832L1.0943 4.97802Z" fill="#4F5AD0"/>
                    </svg>
                </div>

            </div>
            <div className={bar}></div>
            
        </div>
    )
}

export default HamIcon2


