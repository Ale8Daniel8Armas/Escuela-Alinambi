import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  InputGroupText,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ContactosPage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div
        className="section profile-content"
        style={{
          backgroundImage:
            "url(" + require("assets/img/Alinambi/Wallpaper.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          paddingTop: "0",
        }}
      >
        <Container>
          <div className="owner">
            <div className="name">
              <h4 className="title">
                Llamanos
                <br />
              </h4>
              <h6 className="description">+593 9679 709</h6>
            </div>
          </div>
        </Container>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Contáctanos</h2>
              <Form className="contact-form">
                <Row>
                  <Col md="6">
                    <label>Nombre</label>
                    <InputGroup>
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                      <Input placeholder="Nombre" type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>Correo</label>
                    <InputGroup>
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                      <Input placeholder="Correo" type="text" />
                    </InputGroup>
                  </Col>
                </Row>
                <label>Mensaje</label>
                <Input
                  placeholder="Cuentanos lo que sientes...."
                  type="textarea"
                  rows="4"
                />
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="danger" size="lg">
                      Enviar mensaje
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ContactosPage;
