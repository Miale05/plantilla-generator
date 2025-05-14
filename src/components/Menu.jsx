import React from "react";

const Menu = () => {
    return ( 
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="navbar-brand fw-bold text-light">TTCC - PLANTILLA GENERATOR</h1>
                <div className="collapse navbar-collapse text-center" id="navbarMenu">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-sm-4 mt-4 mt-sm-0">
                        <a className="nav-link fw-bold text-light" href="/">INICIO</a>
                    </li>
                    <li className="nav-item me-sm-4 mt-3 mt-sm-0">
                        <a className="nav-link fw-bold text-light" href="autos">DOCUMENTACIÓN</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    );
}
 
export default Menu;