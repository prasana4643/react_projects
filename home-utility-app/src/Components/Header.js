import React from 'react';
import logo from "../Images/logo.svg";

export default function Header() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />&nbsp;
                        Kayra - Home Utility App
                    </a>
                </div>
            </nav>
        </div>
    )
}
