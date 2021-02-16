import React, {Component} from 'react';
import {Form, Radio} from "semantic-ui-react";

class DataLimit extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Form>
                    <Form.Field>
                        Selected value: <b>{this.state.value}</b>
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Choose this'
                            name='radioGroup'
                            value='this'
                            checked={this.state.value === 'this'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Or that'
                            name='radioGroup'
                            value='that'
                            checked={this.state.value === 'that'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                </Form>

                {/*<Form.Group controlId="formBasicRangeCustom">*/}
                {/*    <Form.Label>Range</Form.Label>*/}
                {/*    <Form.Control type="range" custom />*/}
                {/*</Form.Group>*/}
            </>
        );
    };

}


export default DataLimit;
