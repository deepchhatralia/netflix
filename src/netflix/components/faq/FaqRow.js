import React, { useState } from 'react'
import './faq.css'

function FaqRow({ title, desc }) {
    const [faqOpen, setFaqOpen] = useState(false)

    return (
        <div className="faq-row">
            <div className="faq-header" onClick={() => setFaqOpen(val => !val)}>
                <h4>{title}</h4>
                {faqOpen ?
                    <i class="fas fa-times"></i> : <i className="fas fa-plus"></i>}
            </div>
            {faqOpen ?
                <div className="faq-section">
                    <p>{desc}</p>
                </div> : null}
        </div>
    )
}

export default FaqRow
