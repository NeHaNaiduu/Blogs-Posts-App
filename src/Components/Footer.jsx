import React from 'react'
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>About</li>
        </ul><hr/>
        <p>
            <FaCopyright /> 2024 Company, Inc
        </p>
    </footer>
  )
}

export default Footer 