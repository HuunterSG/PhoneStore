//  AGREGAR SIN FALTA IMAGEN PARA ACOMPAÑAR EL TEXTO
import React from "react";

const Welcome = ()=>{
    return(
        <section id="home">
            <h2 className="title-welcome">Bienvenidos a Phone Store</h2>
            <section className="info-welcome">
                <div className="text-welcome-container">
                    <p className="text-welcome">
                        Aquí encontraras la solución a tu problema. Gracias a nuestra experiencia en el rubro podrás 
                        consultarnos sobre el problema que tenga tu equipo. 
                        Además de que encontrarás tips para el cuidado de tu dispositivo. <br/><br/>
                        Si tienes dudas no olvides que puedes comunicarte con nosotros desde nuestra sección de Contacto.
                        Donde con gusto te orientaremos y sacaremos las dudas sobre tu equipo en cuestión a reparar. <br/> <br/>
                        Así mismo si sos un local o estas emprendiendo en esto puedes contar con nosotros para que te hagamos
                        las reparaciones de manera confiable y segura.
                    </p>
                </div>
                <img  src={require("../assets/img/varias/CambioModulo.png")} alt="img-welcome" className="img-welcome"/>
            </section>
        </section>
    )
}

export default Welcome;