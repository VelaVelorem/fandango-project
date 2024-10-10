import { Form, Col, Container, Row, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import './CheckBoxes.css'

const CheckBoxes = ({seatCount, setSeatCount}) => {
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            if (seatCount < 25) {
               setSeatCount(count => count + 1) 
            } else {
                alert("Woops! You can only select up to 25 tickets.")
                event.target.checked = false;
            }
        } else {
            setSeatCount(count => count - 1)
        }
    }

    // const renderTooltip = (label) => (
    //     <Tooltip id={`tooltip-${label}`}>
    //         {label}
    //     </Tooltip>
    // );

    return (
        <Container className="checkBoxContainer mt-5">
            <Row>

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                    <div className="d-flex align-items-end">
                            <InputGroup.Checkbox data-toggle="tooltip" title="F10" aria-label="F10" className="checkBoxSeat" onChange={handleCheckboxChange} />
                            <InputGroup.Checkbox data-toggle="tooltip" title="F9" aria-label="F9" className="checkBoxSeat ms-3" onChange={handleCheckboxChange} />
                    </div>
                </Col>

                <Col xs="6" className="d-flex justify-content-evenly">
                    <div className="d-flex">
                        <InputGroup.Checkbox data-toggle="tooltip" title="F8" aria-label="F8" className="checkBoxSeat" onChange={handleCheckboxChange} />
                        <InputGroup.Checkbox data-toggle="tooltip" title="F7" aria-label="F7" className="checkBoxSeat ms-3" onChange={handleCheckboxChange} />
                        <InputGroup.Checkbox data-toggle="tooltip" title="F6" aria-label="F6" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="F5" aria-label="F5" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="F4" aria-label="F4" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="F3" aria-label="F3" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    </div>
                </Col>

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                    <div className="d-flex">
                        <InputGroup.Checkbox data-toggle="tooltip" title="F2" aria-label="F2" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="F1" aria-label="F1" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                        <InputGroup.Checkbox data-toggle="tooltip" title="E10" aria-label="E10" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="E9" aria-label="E9" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    </div>
                </Col>

                <Col xs="6" className="d-flex justify-content-evenly">
                    <div className="d-flex">
                        <InputGroup.Checkbox data-toggle="tooltip" title="E8" aria-label="E8" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="E7" aria-label="E7" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="E6" aria-label="E6" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="E5" aria-label="E5" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="E4" aria-label="E4" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="E3" aria-label="E3" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    </div>
                </Col>

                <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                    <div className="d-flex">
                        <InputGroup.Checkbox data-toggle="tooltip" title="E2" aria-label="E2" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="E1" aria-label="E1" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <InputGroup.Checkbox data-toggle="tooltip" title="D10" aria-label="D10" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="D9" aria-label="D9" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">
                    <InputGroup.Checkbox data-toggle="tooltip" title="D8" aria-label="D8" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="D7" aria-label="D7" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="D6" aria-label="D6" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="D5" aria-label="D5" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="D4" aria-label="D4" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="D3" aria-label="D3" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                    <InputGroup.Checkbox data-toggle="tooltip" title="D2" aria-label="D2" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="D1" aria-label="D1" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <InputGroup.Checkbox data-toggle="tooltip" title="C10" aria-label="C10" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="C9" aria-label="C9" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">
                    <InputGroup.Checkbox data-toggle="tooltip" title="C8" aria-label="C8" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="C7" aria-label="C7" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="C6" aria-label="C6" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="C5" aria-label="C5" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="C4" aria-label="C4" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="C3" aria-label="C3" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                    <InputGroup.Checkbox data-toggle="tooltip" title="C2" aria-label="C2" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="C1" aria-label="C1" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <InputGroup.Checkbox data-toggle="tooltip" title="B10" aria-label="B10" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="B9" aria-label="B9" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">
                    <InputGroup.Checkbox data-toggle="tooltip" title="B8" aria-label="B8" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="B7" aria-label="B7" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="B6" aria-label="B6" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="B5" aria-label="B5" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="B4" aria-label="B4" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="B3" aria-label="B3" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                    <InputGroup.Checkbox data-toggle="tooltip" title="B2" aria-label="B2" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="B1" aria-label="B1" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>
            </Row>

            <Row className="mt-5">

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                        <InputGroup.Checkbox data-toggle="tooltip" title="A10"aria-label="A10" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                        <InputGroup.Checkbox data-toggle="tooltip" title="A9" aria-label="A9" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>

            <Col xs="6" className="d-flex justify-content-evenly">
                <div className="d-flex">

                    <InputGroup.Checkbox data-toggle="tooltip" title="A8" aria-label="A8" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="A7" aria-label="A7" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="A6" aria-label="A6" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="A5" aria-label="A5" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="A4" aria-label="A4" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                    <InputGroup.Checkbox data-toggle="tooltip" title="A3" aria-label="A3" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>

                </div>
            </Col>

            <Col xs="3" sm="3" md="3" lg="3" className="d-flex justify-content-start">
                <div className="d-flex">
                <InputGroup.Checkbox data-toggle="tooltip" title="A2" aria-label="A2" className="checkBoxSeat" onChange={handleCheckboxChange}/>
                <InputGroup.Checkbox data-toggle="tooltip" title="A1" aria-label="A1" className="checkBoxSeat ms-3" onChange={handleCheckboxChange}/>
                </div>
            </Col>
            </Row>
        </Container>
    )
}

export default CheckBoxes;
