import { Form, Col, Container, Row, InputGroup } from "react-bootstrap";
import './CheckBoxes.css'

const CheckBoxes = () => {
    return (
        <Container className="checkBoxContainer mt-5">
            <Row>

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                    <div className="d-flex align-items-end">
                        <InputGroup.Checkbox aria-label="F10" className="checkBoxSeat" />
                        <InputGroup.Checkbox aria-label="F9" className="checkBoxSeat ms-3" />
                    </div>
                </Col>

                <Col xs="6" className="d-flex justify-content-evenly">
                    <div className="d-flex">
                        <InputGroup.Checkbox aria-label="F8" className="checkBoxSeat" />
                        <InputGroup.Checkbox aria-label="F7" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="F6" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="F5" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="F4" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="F3" className="checkBoxSeat ms-3" />
                    </div>
                </Col>

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                    <div className="d-flex">
                        <InputGroup.Checkbox aria-label="F2" className="checkBoxSeat" />
                        <InputGroup.Checkbox aria-label="F1" className="checkBoxSeat ms-3" />
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                        <InputGroup.Checkbox aria-label="E10" className="checkBoxSeat" />
                        <InputGroup.Checkbox aria-label="E9" className="checkBoxSeat ms-3" />
                    </div>
                </Col>

                <Col xs="6" className="d-flex justify-content-evenly">
                    <div className="d-flex">
                        <InputGroup.Checkbox aria-label="E8" className="checkBoxSeat" />
                        <InputGroup.Checkbox aria-label="E7" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="E6" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="E5" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="E4" className="checkBoxSeat ms-3" />
                        <InputGroup.Checkbox aria-label="E3" className="checkBoxSeat ms-3" />
                    </div>
                </Col>

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                    <div className="d-flex">
                        <InputGroup.Checkbox aria-label="E2" className="checkBoxSeat" />
                        <InputGroup.Checkbox aria-label="E1" className="checkBoxSeat ms-3" />
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <InputGroup.Checkbox aria-label="D10" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="D9" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="D8" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="D7" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="D6" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="D5" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="D4" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="D3" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="D2" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="D1" className="checkBoxSeat ms-3" />
                </div>
            </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <InputGroup.Checkbox aria-label="C10" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="C9" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="C8" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="C7" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="C6" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="C5" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="C4" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="C3" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="C2" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="C1" className="checkBoxSeat ms-3" />
                </div>
            </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <InputGroup.Checkbox aria-label="B10" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="B9" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="B8" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="B7" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="B6" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="B5" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="B4" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="B3" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="B2" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="B1" className="checkBoxSeat ms-3" />
                </div>
            </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <InputGroup.Checkbox aria-label="A10" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="A9" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="A8" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="A7" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="A6" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="A5" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="A4" className="checkBoxSeat ms-3" />
                    <InputGroup.Checkbox aria-label="A3" className="checkBoxSeat ms-3" />
                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                    <InputGroup.Checkbox aria-label="A2" className="checkBoxSeat" />
                    <InputGroup.Checkbox aria-label="A1" className="checkBoxSeat ms-3" />
                </div>
            </Col>
            </Row>
        </Container>
    )
}

export default CheckBoxes;
