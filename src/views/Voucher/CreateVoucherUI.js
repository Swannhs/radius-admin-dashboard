import React, {Component} from 'react';
import {Button, Col, Container, Form} from "react-bootstrap";
import DataLimit from "./DataLimit";
import TimeLimit from "./TimeLimit";
import GetOwner from "./GetOwner";

class CreateVoucherUi extends Component {
    state = {
        user_id: 0,
        id: '',
        name: '',
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
        speed_download_unit: 'kbps',

    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state)
    }

    render() {
        return (
            <>
                <Form.Group controlId="formBasicEmail">
                    {/*<Form.Check type="checkbox" label="Add Multiple" />*/}
                    <Col xs="auto" className="w-50 p-3">
                        <div className='box-text'>
                            <input type='checkbox'/>
                            <span className='p-3'>Add Multiple</span>
                        </div>
                    </Col>
                </Form.Group>

                {/*------------------------------Get Owner ---------------------------*/}
                <GetOwner/>


                <Form.Group controlId="formBasicPassword">
                    <Col xs='auto' className='w-50 p-3'>
                        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            className="mr-sm-2"
                            aria-describedby="passwordHelpBlock"
                            value={this.state.name}
                            onChange={event => {
                                this.setState({name: event.target.value})
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Container className='w-100 d-flex'>
                        <Col xs={6}>
                            <h4>Data Limit</h4>
                            <label className="switch">
                                <input type="checkbox"
                                       value={this.state.data_limit_enabled}
                                       onChange={event => {
                                           this.setState({
                                               data_limit_enabled: event.target.checked
                                           })
                                       }}
                                />
                                <span className="slider round"/>
                            </label>
                            {this.state.data_limit_enabled ? <DataLimit/> : null}
                        </Col>

                        <Col xs={6}>
                            <h4>Time Limit</h4>
                            <label className="switch">
                                <input type="checkbox"
                                       onChange={event => {
                                           this.setState({
                                               time_limit_enabled: event.target.checked
                                           })
                                       }}
                                />
                                <span className="slider round"/>
                            </label>
                            {this.state.time_limit_enabled ? <TimeLimit/> : null}
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
