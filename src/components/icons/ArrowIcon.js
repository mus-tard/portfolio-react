import * as React from "react"
import { container } from "./arrowIcon.module.css"
function ArrowIcon({width, fill, flip}) {
    
    const rotate = {
        transform: flip ? "rotate(180deg)" : "rotate(0deg)"
    }

    return (
        <div style={rotate} className={container}>
            <svg width={width||"100%"} height="100%" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3641 0.00683594L12.3559 14.9995L4.7854 14.9954C2.14386 14.994 0.00116231 12.8489 0.00259999 10.2074L0.00555089 4.78552C0.00698857 2.14397 2.15202 0.00127793 4.79356 0.00271562L12.3641 0.00683594Z" fill={fill||"#4F5AD0"}/>
            <path d="M20.7837 10.9735C21.3274 11.3411 27.415 7.77064 27.3638 7.41469C27.3125 7.05875 21.3731 3.75065 20.7896 4.01502C20.2041 4.27886 20.2419 10.6064 20.7857 10.974L20.7837 10.9735Z" fill={fill||"#4F5AD0"}/>
        </svg></div>
    )
}

export default ArrowIcon

