import React, { useState } from "react";
import "../assets/css/Cookie.css";


export default function CookieCard() {
    const [open, setOpen] = useState(true);


    if (!open) return null;


    return (
        <div className="cookie-box">
            <div className="cookie-header">
                <h3>Cookie Preferences</h3>
                <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
            </div>


            <p className="cookie-desc">
                We use cookies to enhance your experience, analyze traffic, and ensure the
                website functions properly. You can accept or reject non-essential cookies.
            </p>


            <div className="cookie-actions">
                <button className="accept-btn">ACCEPT ALL</button>
                <button className="reject-btn">REJECT ALL</button>
            </div>
        </div>
    );
}