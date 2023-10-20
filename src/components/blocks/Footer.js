import React from 'react'
import ArrowIcon from '../icons/ArrowIcon';
import { 
    line,
    email,
    contact,
    container,
    emailContainer,
    contactContainer
} from './footer.module.css'

function Footer() {

    const d = new Date()
    let year = d.getFullYear();

    return (
        <div className={container}>
            <div className={contactContainer}>
                <div className={contact} >
                    <h2>
                        Contact
                        </h2>

                        For inquiries, please email me at:

                    <div className={emailContainer} id="contact">
                        <div className={email}>
                            kevin.delahunt<wbr />@kevd.design
                        </div>
                    </div>
                    
                </div>

                
            </div>
            

            <aside>
                <div className={line}></div>
                ©{year} - Kevin Delahunt
            </aside>

        </div>
    )
}

export default Footer