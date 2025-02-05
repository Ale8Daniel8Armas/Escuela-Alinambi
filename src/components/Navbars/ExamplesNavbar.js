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
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  //nav items dropdown
  //Nav items
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
      {/* Navbar */}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        color-on-scroll="300"
        expand="lg"
        style={{
          backgroundColor:
            navbarColor === "navbar-transparent" ? "transparent" : "#9CC066",
          marginTop: "-25px",
          width: "100%",
          marginBottom: "-15px",
        }}
      >
        <Container
          style={{
            paddingLeft: "15px",
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
              gap: "20px",
              marginLeft: "-30px",
            }}
          >
            <img
              src={require("assets/img/Alinambi/LogoAlinambi.png")}
              alt="Logo de Empresa"
              style={{
                maxHeight: "120px",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "4px",
                marginLeft: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "#E3EAB2",
                  lineHeight: "1.2",
                }}
              >
                Unidad Educativa
              </span>
              <span
                style={{
                  fontSize: "29px",
                  fontWeight: "700",
                  color: "#1A9BD5",
                  lineHeight: "1.2",
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
            <Nav navbar>
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
                  >
                    <h6
                      style={{
                        fontSize: "15px",
                        color: "#000000",
                      }}
                    >
                      <b>Quienes Somos</b>
                    </h6>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="quienesSomosNavbarDropdownMenu">
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
                  >
                    <h6
                      style={{
                        fontSize: "15px",
                        color: "#000000",
                      }}
                    >
                      <b>Oferta Educativa</b>
                    </h6>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="ofertaEducativaNavbarDropdownMenu">
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
                    href="..."
                    id="infoNavbarDropdownMenu"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <h6
                      style={{
                        fontSize: "15px",
                        color: "#000000",
                      }}
                    >
                      <b>Información</b>
                    </h6>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="infoNavbarDropdownMenu">
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
                <NavLink to="/servicios-page" tag={Link}>
                  <i className="nc-icon nc-layout-11" />
                  <b
                    style={{
                      fontSize: "15px",
                      color: "#000000",
                    }}
                  >
                    Servicios
                  </b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contactos-page" tag={Link}>
                  <i className="nc-icon nc-layout-11" />
                  <b
                    style={{
                      fontSize: "15px",
                      color: "#000000",
                    }}
                  >
                    Contactos
                  </b>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      {/* Imagen de fondo para mover el navbar arriba como encabezado */}
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "25vh",
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
