import * as React from "react"
import ArrowIcon from "../icons/ArrowIcon"

import 
    { 
        container,
        ctaButton,
        backButton,
        buttonText,
        buttonStyle,

    } from "./button.module.css"


function Button({label, type, onClick}) {


    return (
        <div className={container}>
            <button onClick={onClick} className={`${type === "cta" ? ctaButton : backButton} ${buttonStyle}`}>
                <div className={buttonText}>
                    {label}
                </div>
                <ArrowIcon
                    width="57px"
                    fill= {type === "cta" ? "#848CED" : "#4F5AD0"}
                    flip= {type === "cta" ? null : true}
                />
            </button>
             
        </div>
    )
}

export default Button