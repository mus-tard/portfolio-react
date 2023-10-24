import React from 'react'
import Button from '../buttons/Button'
import { 
    email,
    contact,
    container,

    contactContainer
} from './footer.module.css'

function Footer() {

    const d = new Date()
    let year = d.getFullYear();

    function handleClick() {

        window.location = 'mailto:kevin.delahunt@kevd.design'
    }

    return (
        <div className={container}>
            <div className={contactContainer}>
                <div className={contact} >
                    <h2>
                        Contact
                        </h2>

                        For inquiries, please email me at:

                    <div id="contact">
                        <div className={email}>
                        kevin.delahunt<wbr />@kevd.design 
                        </div>
                        <Button
                            label="Open in email app"
                            type="cta"
                            onClick={handleClick}
                            
                        />
                    </div>
                    
                </div>

                
            </div>
            

            <aside>

                ©{year} - Kevin Delahunt
            </aside>

        </div>
    )
}

export default Footer