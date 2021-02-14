import React, {Component} from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import DataLimit from "./DataLimit";
import TimeLimit from "./TimeLimit";

class CreateVoucherUi extends Component {
    state = {
        data: {
            user_id: '63',
            id: '',
            name: 'Test',
            data_limit_enabled: false,
            data_reset: 'daily',
            data_amount: 1,
            data_unit: 'mb',
            data_cap: 'hard',
            time_limit_enabled: false,
            time_reset: 'daily',
            time_amount: 1,
            time_unit: 'min',
            time_cap: 'hard',
            speed_limit_enabled: false,
            speed_upload_amount: 1,
            speed_upload_unit: 'kbps',
            speed_download_amount: 1,
            speed_download_unit: 'kbps'
        },

        checkboxData: false,
        checkboxTime: false,
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.data)
    }

    // onDataHandle = () => {
    //     const data = {
    //         user_id: '63',
    //         id: '',
    //         name: 'Test',
    //         data_limit_enabled: false,
    //         data_reset: 'daily',
    //         data_amount: 1,
    //         data_unit: 'mb',
    //         data_cap: 'hard',
    //         time_limit_enabled: false,
    //         time_reset: 'daily',
    //         time_amount: 1,
    //         time_unit: 'min',
    //         time_cap: 'hard',
    //         speed_limit_enabled: false,
    //         speed_upload_amount: 1,
    //         speed_upload_unit: 'kbps',
    //         speed_download_amount: 1,
    //         speed_download_unit: 'kbps'
    //     }
    //
    // }

    render() {
        return (
            <>
                <Form.Group controlId="formBasicEmail">
                    {/*<Form.Check type="checkbox" label="Add Multiple" />*/}
                    <div className='box-text'>
                        <input type='checkbox'/>
                        <span className='p-3'>Add Multiple</span>
                    </div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Col xs="auto" className="w-50 p-3">
                        <Form.Label>Owner</Form.Label>
                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                            Preference
                        </Form.Label>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Col xs='auto' className='w-50 p-3'>
                        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            className="mr-sm-2"
                            aria-describedby="passwordHelpBlock"
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Container className='w-100 d-flex'>
                        <Col xs={6}>
                            <h4>Data Limit</h4>
                            <label className="switch">
                                <input type="checkbox"
                                       onChange={event => {
                                           this.setState({
                                               checkboxData: event.target.checked
                                           })
                                       }}
                                />
                                <span className="slider round"/>
                            </label>
                            {this.state.checkboxData ? <DataLimit/> : null}
                        </Col>

                        <Col xs={6}>
                            <h4>Time Limit</h4>
                            <label className="switch">
                                <input type="checkbox"
                                       onChange={event => {
                                           this.setState({
                                               checkboxTime: event.target.checked
                                           })
                                       }}
                                />
                                <span className="slider round"/>
                            </label>
                            {this.state.checkboxTime ? <TimeLimit/> : null}
                        </Col>

                    </Container>
                </Form.Group>
                <Col xs='auto' className='w-25 p-3'>
                    <Button variant="success" type="submit" onClick={this.onFormSubmit}>
                        Generate
                    </Button>
                </Col>
            </>
        );
    }
}

export default CreateVoucherUi;
