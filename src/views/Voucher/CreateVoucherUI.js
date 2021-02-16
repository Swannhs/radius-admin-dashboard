import React, {Component} from 'react';
import DataLimit from "./DataLimit";
import TimeLimit from "./TimeLimit";
import GetOwner from "./GetOwner";
import {Col, Container, Form} from "react-bootstrap";

class CreateVoucherUi extends Component {
    state = {
        undefined: '',
        user_id: 0,
        id: '',
        name: '',
        available_to_siblings: '',
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
            <div className='container'>
                <div className='d-block p-3'>


                    <div className='w-25 d-inline p-3'>

                        {/* ---------------- Add Multiple Start --------------------  */}
                        <div className="ui toggle checkbox">
                            <input type="checkbox" name="public"
                                   value={this.state.undefined}
                                   onChange={event => {
                                       this.setState({
                                           undefined: event.target.checked ? 'on' : null
                                       })
                                   }}
                            />
                            <label>Add Multiple</label>
                        </div>
                    </div>

                    {/* ---------------- Add Multiple End --------------------  */}


                    {/* -------------------- Retrieving All Agent Start -------------------*/}
                    <div className='w-100'>
                        <GetOwner/>
                    </div>
                    {/* -------------------- Retrieving All Agent End -------------------*/}


                    {/* ---------------- Name Section Start --------------------  */}
                    <div className='d-block p-3 w-50'>
                        <h3 className='text-black-50 pr-5'>Name</h3>
                        <input type="text" className="form-control mr-sm-2" placeholder="Username"
                               aria-label="Username"
                               value={this.state.name}
                               onChange={event => {
                                   this.setState({name: event.target.value})
                               }}
                        />
                    </div>
                    {/* ---------------- Name Section End --------------------  */}


                    {/* ---------------- Available To Sub-Providers Start --------------------  */}
                    <div className='w-25 d-inline p-3'>
                        <div className="ui toggle checkbox">
                            <input type="checkbox" name="public"
                                   value={this.state.available_to_siblings}
                                   onChange={event => {
                                       this.setState({
                                           available_to_siblings: event.target.checked ? 'on' : null
                                       })
                                   }}
                            />
                            <label>Available To Sub-Providers</label>
                        </div>
                    </div>
                    {/* ---------------- Available To Sub-Providers End --------------------  */}


                </div>

                <div className='w-100 d-block mt-4'>
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
                </div>


            </div>



            //     <Form.Group>
            //         <Container className='w-100 d-flex'>
            //             <Col xs={6}>
            //                 <h4>Data Limit</h4>
            //                 <label className="switch">
            //                     <input type="checkbox"
            //                            value={this.state.data_limit_enabled}
            //                            onChange={event => {
            //                                this.setState({
            //                                    data_limit_enabled: event.target.checked
            //                                })
            //                            }}
            //                     />
            //                     <span className="slider round"/>
            //                 </label>
            //                 {this.state.data_limit_enabled ? <DataLimit/> : null}
            //             </Col>
            //
            //             <Col xs={6}>
            //                 <h4>Time Limit</h4>
            //                 <label className="switch">
            //                     <input type="checkbox"
            //                            onChange={event => {
            //                                this.setState({
            //                                    time_limit_enabled: event.target.checked
            //                                })
            //                            }}
            //                     />
            //                     <span className="slider round"/>
            //                 </label>
            //                 {this.state.time_limit_enabled ? <TimeLimit/> : null}
            //             </Col>
            //
            //         </Container>
            //     </Form.Group>
            //     <Col xs='auto' className='w-25 p-3'>
            //         <Button variant="success" type="submit" onClick={this.onFormSubmit}>
            //             Generate
            //         </Button>
            //     </Col>
            // </>
        );
    }
}

export default CreateVoucherUi;
