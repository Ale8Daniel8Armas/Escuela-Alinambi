import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";

const ContactosPageHeader = () => {
  const pageHeader = useRef(null);
  const titleRef = useRef(null);
  
 useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
    }
  }, []);

  const backgroundImage = require("assets/img/Alinambi/letreroAlinambi.jpg");

  return (
    <div
      ref={pageHeader}
      style={{
        position: "relative",
        minHeight: "400px",
        width: "100%",
        overflow: "hidden"
      }}
    >
      {/* Imagen de fondo */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          zIndex: 0
        }}
      />

      {/* Overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 2
        }}
      />

      {/* Contenido */}
      <Container 
        style={{
          position: "relative",
          height: "100%",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          ref={titleRef}
          style={{
            textAlign: "center",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 1s ease"
          }}
        >
          <h1 
            style={{
              color: "#FFFFFF",
              fontSize: "5.0rem",
              fontWeight: "bold",
              marginTop: "115px",
              marginBottom: "1rem"
            }}
          >
            Contactos
          </h1>
          <div 
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#FFFFFF",
              margin: "0 auto"
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default ContactosPageHeader;