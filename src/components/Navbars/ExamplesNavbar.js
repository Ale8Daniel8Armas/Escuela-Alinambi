import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const [quienesSomosOpen, setQuienesSomosOpen] = React.useState(false);
  const [ofertaEducativaOpen, setOfertaEducativaOpen] = React.useState(false);
  const [infoOpen, setInfoOpen] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <>
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        color-on-scroll="300"
        expand="lg"
        style={{
          backgroundColor:
            navbarColor === "navbar-transparent" ? "transparent" : "#9CC066",
          width: "100%",
          height: "90px",
          fontFamily: "'Montserrat', sans-serif",
          position: "fixed",
          top: 0,
          transition: "all 0.3s ease",
          zIndex: 1030,
        }}
      >
        <Container
          style={{
            paddingLeft: "10px",
            maxWidth: "100%",
          }}
        >
          <NavbarBrand
            to="/homePage"
            target="_blank"
            tag={Link}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginLeft: "-15px",
            }}
          >
            <img
              src={require("assets/img/Alinambi/LogoAlinambiT.png")}
              alt="Logo de Empresa"
              style={{
                maxHeight: "75px",
                width: "auto",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2px",
                marginLeft: "5px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: navbarColor === "navbar-transparent" ? "#98FF98" : "#FFFFFF",
                  lineHeight: "1.1",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Unidad Educativa
              </span>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1A9BD5",
                  lineHeight: "1.1",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Aliñambi
              </span>
            </div>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
            style={{
              border: "none",
              background: "transparent",
              padding: "5px",
            }}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar style={{ gap: "10px" }}>
              {" "}
              {/* Añadido gap entre items */}
              <NavItem>
                <UncontrolledDropdown
                  nav
                  isOpen={quienesSomosOpen}
                  onMouseEnter={() => setQuienesSomosOpen(true)}
                  onMouseLeave={() => setQuienesSomosOpen(false)}
                >
                  <DropdownToggle
                    data-toggle="dropdown"
                    href="/misionYvision-page"
                    id="quienesSomosNavbarDropdownMenu"
                    nav
                    style={{ padding: "8px 12px" }}
                  >
                    <h6
                      style={{
                        fontSize: "14px",
                        color: "#000000",
                        margin: 0,
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <b>Quienes Somos</b>
                    </h6>
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="quienesSomosNavbarDropdownMenu"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <DropdownItem to="/misionYvision-page" tag={Link}>
                      Mision - Vision
                    </DropdownItem>
                    <DropdownItem href="/historia-page">Historia</DropdownItem>
                    <DropdownItem href="/valores-page">
                      Valores y Compromiso
                    </DropdownItem>
                    <DropdownItem href="/docentes-page">
                      Nuestro Equipo
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              {/* Los demás NavItems siguen el mismo patrón */}
              <NavItem>
                <UncontrolledDropdown
                  nav
                  isOpen={ofertaEducativaOpen}
                  onMouseEnter={() => setOfertaEducativaOpen(true)}
                  onMouseLeave={() => setOfertaEducativaOpen(false)}
                >
                  <DropdownToggle
                    data-toggle="dropdown"
                    href="/admisiones-page"
                    id="ofertaEducativaNavbarDropdownMenu"
                    nav
                    style={{ padding: "8px 12px" }}
                  >
                    <h6
                      style={{
                        fontSize: "14px",
                        color: "#000000",
                        margin: 0,
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <b>Oferta Educativa</b>
                    </h6>
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="ofertaEducativaNavbarDropdownMenu"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <DropdownItem href="/admisiones-page">
                      Admisiones
                    </DropdownItem>
                    <DropdownItem href="/edInicial-page">
                      Educación Inicial
                    </DropdownItem>
                    <DropdownItem href="/edBasica-page">
                      Educación Básica
                    </DropdownItem>
                    <DropdownItem href="/planCurricular-page">
                      Plan Curricular
                    </DropdownItem>
                    <DropdownItem href="/actividades-page">
                      Actividades
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown
                  nav
                  isOpen={infoOpen}
                  onMouseEnter={() => setInfoOpen(true)}
                  onMouseLeave={() => setInfoOpen(false)}
                >
                  <DropdownToggle
                    data-toggle="dropdown"
                    href="/convenios-page"
                    id="infoNavbarDropdownMenu"
                    nav
                    onClick={(e) => e.preventDefault()}
                    style={{ padding: "8px 12px" }}
                  >
                    <h6
                      style={{
                        fontSize: "14px",
                        color: "#000000",
                        margin: 0,
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <b>Información</b>
                    </h6>
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="infoNavbarDropdownMenu"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <DropdownItem href="/convenios-page">
                      Convenios
                    </DropdownItem>
                    <DropdownItem href="/matricula-page">
                      Matricula
                    </DropdownItem>
                    <DropdownItem href="/cronogramas-page">
                      Cronogramas
                    </DropdownItem>
                    <DropdownItem href="/boletines-page">
                      Boletines
                    </DropdownItem>
                    <DropdownItem href="/fundacion-page">
                      Fundación
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/servicios-page"
                  tag={Link}
                  style={{ padding: "8px 12px" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#000000",
                      margin: 0,
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <b>Servicios</b>
                  </h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contactos-page"
                  tag={Link}
                  style={{ padding: "8px 12px" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#000000",
                      margin: 0,
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <b>Contactos</b>
                  </h6>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          position: "relative",
          width: "50%",
          height: "15vh", // Reducido de 25vh
          backgroundImage: `url('path-to-your-image.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
}

export default ExamplesNavbar;
