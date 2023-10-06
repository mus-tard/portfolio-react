import React from 'react'
import { 
    container
 } from './pencil.module.css'

function Pencil() {
    return (
        <div className={container}>
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 74 8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M6.59741 0.00146484L6.59306 8.00146L2.55348 7.99927C1.14397 7.9985 0.000640732 6.85392 0.00140763 5.44441L0.0029817 2.55134C0.00374859 1.14183 1.14832 -0.00149992 2.55783 -0.000733027L6.59741 0.00146484Z" 
                    fill="#4F5AD0"
                />
                <rect 
                    x="14.5974" 
                    width="47.4026" 
                    height="8" 
                    fill="#4F5AD0"
                />
                <path 
                    d="M70.2398 5.98485C70.5505 6.1949 74.0291 4.15465 73.9998 3.95125C73.9705 3.74785 70.5766 1.85751 70.2432 2.00858C69.9086 2.15935 69.9302 5.77511 70.2409 5.98516L70.2398 5.98485Z" 
                    fill="#4F5AD0"
                />
            </svg>

        </div>
    )
}

export default Pencil