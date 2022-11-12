import React from 'react'
import {
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Button,
    CardTitle,
    CardSubtitle,
    Label,
    Input
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumbs from "../../components/Common/Breadcrumb"


export default () => {
    return <React.Fragment>
        <div className="page-content">
            <Breadcrumbs title="System" breadcrumbItem="Profile Users" />
            <Card>
                <CardBody>
                    <CardTitle>
                        <div style={{ fontSize: '18px' }}><i className="bx bx-user" style={{ paddingRight: '8px' }}></i>Add New Admin User</div>
                    </CardTitle>
                    <AvForm className="needs-validation">
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label htmlFor="validationCustom01">First name</Label>
                                    <AvField
                                        name="firstname"
                                        placeholder="First name"
                                        type="text"
                                        errorMessage="Enter First Name"
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="validationCustom01"
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label htmlFor="validationCustom02">Last name</Label>
                                    <AvField
                                        name="lastname"
                                        placeholder="Last name"
                                        type="text"
                                        errorMessage="Enter Last name"
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="validationCustom02"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <AvField
                                        className="mb-3"
                                        name="email"
                                        label="E-Mail  "
                                        placeholder="Enter Valid Email"
                                        type="email"
                                        errorMessage="Invalid Email"
                                        validate={{
                                            required: { value: true },
                                            email: { value: true },
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3">
                                    <AvField
                                        className="mb-3"
                                        name="number"
                                        label="Phone Number  "
                                        placeholder="Enter Only number"
                                        type="number"
                                        errorMessage="Enter Only Number"
                                        validate={{
                                            required: { value: true },
                                            pattern: {
                                                value: "^[0-9]+$",
                                                errorMessage: "Only Numbers",
                                            },
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Button color="primary" type="submit">
                            Submit
                        </Button>
                    </AvForm>

                </CardBody>
            </Card>
        </div>

    </React.Fragment>
}