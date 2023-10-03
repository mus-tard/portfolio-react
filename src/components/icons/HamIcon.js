import * as React from "react"
import {
    pencil,
    barTop,
    animate,
    barBottom,
    svgHamIcon
} from "./hamIcon.module.css"
function HamIcon({width, isOpen}) {

    return (
        <div className={isOpen && animate}>
            <svg 
                width={width||"100%"}
                height="100%" 
                viewBox="0 0 46 58" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className={svgHamIcon}>
                    <g className={barTop}>
                        <rect 
                            x="45.8545" 
                            y="16" 
                            width="45.8545" 
                            height="8" 
                            rx="4" 
                            transform="rotate(-180 45.8545 16)" 
                            fill="#4F5AD0"
                        />
                    </g>
                    <g className={pencil}>
                        <path 
                            d="M6.59738 24.9951L6.59303 32.9951L2.55345 32.9929C1.14394 32.9922 0.000610215 31.8476 0.00137711 30.4381L0.00295118 27.545C0.00371808 26.1355 1.14829 24.9922 2.5578 24.9929L6.59738 24.9951Z" 
                            fill="#4F5AD0"
                        />
                        <rect 
                            x="10.5974" 
                            y="24.9932" 
                            width="27.2571" 
                            height="8" 
                            fill="#4F5AD0"
                        />
                        <path 
                            d="M42.0943 30.978C42.405 31.1881 45.8836 29.1478 45.8543 28.9444C45.825 28.741 42.4311 26.8507 42.0977 27.0017C41.7631 27.1525 41.7847 30.7683 42.0954 30.9783L42.0943 30.978Z" 
                            fill="#4F5AD0"
                        />
                    </g>
                    <g className={barBottom}>
                        <rect 
                            x="45.8545" 
                            y="49.9854" 
                            width="45.8545" 
                            height="8" rx="4" 
                            transform="rotate(-180 45.8545 49.9854)" 
                            fill="#4F5AD0"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default HamIcon


