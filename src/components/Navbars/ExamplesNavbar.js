import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Iconos para indicar submenús

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
  Button,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const [quienesSomosOpen, setQuienesSomosOpen] = React.useState(false);
  const [ofertaEducativaOpen, setOfertaEducativaOpen] = React.useState(false);
  const [infoOpen, setInfoOpen] = React.useState(false);
  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWitdh < 1065
  );

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const toggleQuienesSomosOpen = () => {
    setQuienesSomosOpen(!quienesSomosOpen);
  };

  const toggleOfertaOpen = () => {
    setOfertaEducativaOpen(!ofertaEducativaOpen);
  };

  const toggleInfoOpen = () => {
    setInfoOpen(!infoOpen);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
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

    const handleResize = () => {
      setIsLargeScreen(window.innerWitdh < 1065);
    };

    window.addEventListener("scroll", updateNavbarColor);
    window.addEventListener("rezise", handleResize);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "0%",
          height: "14vh",
          backgroundColor: "#000000",
        }}
      >
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
            <Button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler burger-menu", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}
              style={{
                display: isLargeScreen ? "none" : "",
                border: "none",
                background: "transparent",
                padding: "5px",
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </Button>
            <Collapse
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
              navbar
              isOpen={navbarCollapse}
            >
              <Nav navbar style={{ gap: "20px" }}>
                <NavItem>
                  <NavbarBrand
                    to="/homePage"
                    target="_blank"
                    tag={Link}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginRight: "40px",
                    }}
                  >
                    <img
                      src={require("assets/img/Alinambi/LogoAlinambiT.png")}
                      alt="Logo de Empresa"
                      style={{
                        maxHeight: "65px",
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
                          fontSize: "20px",
                          fontWeight: "500",
                          color:
                            navbarColor === "navbar-transparent"
                              ? "#98FF98"
                              : "#FFFFFF",
                          lineHeight: "1.0",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Unidad Educativa
                      </span>
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "600",
                          color: "#1A9BD5",
                          lineHeight: "1.0",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Aliñambi
                      </span>
                    </div>
                  </NavbarBrand>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown
                    nav
                    isOpen={quienesSomosOpen}
                    toggle={toggleQuienesSomosOpen}
                  >
                    <DropdownToggle
                      nav
                      data-toggle="dropdown"
                      href="/misionYvision-page"
                      id="quienesSomosNavbarDropdownMenu"
                      style={{
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "14px",
                          color: "#000000",
                          marginTop: "30px",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        <b>Quienes Somos</b>
                      </h1>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="quienesSomosNavbarDropdownMenu"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        marginBottom: "-230px",
                      }}
                    >
                      <DropdownItem
                        to="/misionYvision-page"
                        tag={Link}
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Mision - Vision
                      </DropdownItem>
                      <DropdownItem
                        href="/historia-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Historia
                      </DropdownItem>
                      <DropdownItem
                        href="/valores-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Valores y Compromiso
                      </DropdownItem>
                      <DropdownItem
                        href="/docentes-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
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
                    toggle={toggleOfertaOpen}
                  >
                    <DropdownToggle
                      data-toggle="dropdown"
                      href="/admisiones-page"
                      id="ofertaEducativaNavbarDropdownMenu"
                      nav
                      style={{
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "14px",
                          color: "#000000",
                          marginTop: "30px",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        <b>Oferta Educativa</b>
                      </h1>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="ofertaEducativaNavbarDropdownMenu"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        marginBottom: "-270px",
                      }}
                    >
                      <DropdownItem
                        href="/admisiones-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Admisiones
                      </DropdownItem>
                      <DropdownItem
                        href="/edInicial-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Educación Inicial
                      </DropdownItem>
                      <DropdownItem
                        href="/edBasica-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Educación Básica
                      </DropdownItem>
                      <DropdownItem
                        href="/planCurricular-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Plan Curricular
                      </DropdownItem>
                      <DropdownItem
                        href="/actividades-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Actividades
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown
                    nav
                    isOpen={infoOpen}
                    toggle={toggleInfoOpen}
                  >
                    <DropdownToggle
                      data-toggle="dropdown"
                      href="/convenios-page"
                      id="infoNavbarDropdownMenu"
                      nav
                      style={{
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "14px",
                          color: "#000000",
                          marginTop: "30px",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        <b>Información</b>
                      </h1>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="infoNavbarDropdownMenu"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        marginBottom: "-260px",
                      }}
                    >
                      <DropdownItem
                        href="/convenios-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Convenios
                      </DropdownItem>
                      <DropdownItem
                        href="/matricula-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Matricula
                      </DropdownItem>
                      <DropdownItem
                        href="/cronogramas-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Cronogramas
                      </DropdownItem>
                      <DropdownItem
                        href="/boletines-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
                        Boletines
                      </DropdownItem>
                      <DropdownItem
                        href="/fundacion-page"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          backgroundColor: "#98FF98",
                        }}
                      >
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
                        marginTop: "30px",
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
                        marginTop: "30px",
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
      </div>
    </>
  );
}

export default ExamplesNavbar;
