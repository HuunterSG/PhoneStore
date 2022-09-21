import React from "react";
import {Link} from "react-scroll"

//  Agregar ruta a cada link para scrollear a cada seccion de la página
//  Revisar como cargar las img en los componentes de React


const Header = ( ) =>{
    return(
        <header className="header-cont">
            <div className="logo-container">
                <img  src={require("../assets/img/logo/LogoPhonestore.png")} alt="logo" className="logo"/>
            </div>
            <div className="nav">
                <Link to='home' spy={true} smooth={true} offset={-50} duration={500} className="nav-link">Inicio</Link>
                <Link className="nav-link">Nosotros</Link>
                <Link className="nav-link">Equipos</Link>
                <Link className="nav-link">Contacto</Link>
            </div>
        </header>
    )
}

export default Header;