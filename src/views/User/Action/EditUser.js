import React, {Component} from 'react';
import RadiusApi from "../../../radius-api/RadiusApi";
import Cookies from "universal-cookie/lib";
import {AiFillEdit} from "react-icons/all";
import {Modal} from "react-bootstrap";
import {Button} from "semantic-ui-react";

class EditUser extends Component {
    state = {
        data: {
            parent_id: '0',
            username: '',
            password: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            address: '',
            language: "4_4",
            active: 'active',
        },
        show: false,
    }


    handleClose = () => {
        this.setState({show: false})
    }

    handleShow = () => {
        this.setState({show: true})
    }

    onEditUser = () => {
        const cookies = new Cookies;
        RadiusApi.post('/cake3/rd_cake/access-providers/edit.json', this.state, {
            params: {
                token: cookies.get('Token')
            }
        })
            .then(response => console.log(response))
    }


    componentDidMount() {
        const cookie = new Cookies;

        RadiusApi.get('/cake3/rd_cake/access-providers/view.json', {
            params: {
                ap_id: this.props.editId,
                token: cookie.get('Token')
            }
        })
            .then(response => {
                this.setState({
                    data: response.data.data
                })
            })
    }

    handleChange = event => {
        this.setState({
            data: {
                username: event.target.value
            }
        })
        console.log(this.state.data.username)
    }

    render() {
        return (
            <>
                <AiFillEdit onClick={this.handleShow}/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="ui input">
                            <input type="text"
                                   onChange={event => this.handleChange(event)}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui button success" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                        <Button className='ui button primary' onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default EditUser;
