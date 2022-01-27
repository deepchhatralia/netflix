import React from 'react'
import './footer.css'

function Footer({ ...restprops }) {
    return (
        <footer {...restprops}>
            <small style={{ display: "block", fontSize: "16px" }} className="mb-4">Questions? Call 000-800-040-1843</small>
            <section className="footer-container">
                <div>
                    <span><span><a href="/#">FAQ</a></span></span>
                    <span><a href="/#">Media Center</a></span>
                    <span><a href="/#">Ways to Watch</a></span>
                    <span><a href="/#">Cookie Preferences</a></span>
                </div>
                <div>
                    <span><a href="/#">Help Center</a></span>
                    <span><a href="/#">Investor Relations</a></span>
                    <span><a href="/#">Terms to Use</a></span>
                    <span><a href="/#">Corporate Information</a></span>
                </div>
                <div>
                    <span><a href="/#">Account</a></span>
                    <span><a href="/#">Jobs</a></span>
                    <span><a href="/#">Privacy</a></span>
                    <span><a href="/#">Contact Us</a></span>

                </div>
                <div>
                    <span><a href="/#">Speed Test</a></span>
                    <span><a href="/#">Legal Notices</a></span>
                    <span><a href="/#">Only on Netflix</a></span>
                </div>
            </section>
        </footer>
    )
}

export default Footer