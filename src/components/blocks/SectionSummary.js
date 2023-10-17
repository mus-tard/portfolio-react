import React from 'react'
import { 
    container
} from './sectionSummary.module.css'

function SectionSummary( {summary} ) {
    return (
        <div className={container}>
            {summary}
        </div>
    )
}

export default SectionSummary