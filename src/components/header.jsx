import React from "react";
import Logo from './logo';
import Links from './links';

export default function Header() {
    return(
        <div id="upper-page">
            <div id="header">
                <Logo />
                <Links />
            </div>
            <div className="text">
                <h1>Currency Converter</h1>
                <h3>Check live currency exchange rate</h3>
            </div>
        </div>
        
    )
}