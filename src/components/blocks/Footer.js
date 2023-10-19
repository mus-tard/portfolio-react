import React from 'react'
import ArrowIcon from '../icons/ArrowIcon';
import { 
    contact,
    container
} from './footer.module.css'

function Footer() {

    const d = new Date()
    let year = d.getFullYear();

    return (
        <div className={container}>
            <div className={contact} id="contact">
        
                kevin.delahunt@kevd.design
            </div>

            <aside>©{year} - Kevin Delahunt</aside>

            <ArrowIcon
                fill="var(--white)"
                width="50px"
            />
        </div>
    )
}

export default Footer