import React from 'react';
import {Form} from "react-bootstrap";

const DataLimit = () => {
    return (
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                           value="option1" checked/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Never
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                           value="option2"/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Daily
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                           value="option3"/>
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        Weekend
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4"
                           value="option4"/>
                    <label className="form-check-label" htmlFor="exampleRadios4">
                        Monthly
                    </label>
                </div>

                <Form.Group controlId="formBasicRangeCustom">
                    <Form.Label>Range</Form.Label>
                    <Form.Control type="range" custom />
                </Form.Group>
            </div>
    );
};

export default DataLimit;
