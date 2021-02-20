import React, {Component} from 'react';
import RadiusApi from "../../../radius-api/RadiusApi";
import Cookies from "universal-cookie/lib";
import {AiFillEdit} from "react-icons/all";
import {Modal} from "react-bootstrap";
import {Button} from "semantic-ui-react";

class EditUser extends Component {
    state = {
        data: {
            id: '',
            username: '',
            language: 4_4,

            // password: '',
            // name: '',
            // surname: '',
            // phone: '',
            // email: '',
            // address: '',
            // active: 'active',
            // wl_active: "wl_active",
            // wl_header: "RADIUSdesk",
            // wl_h_bg: "ffffff",
            // wl_h_fg: "005691",
            // wl_footer: "RADIUSdesk",
            // wl_img_active: "wl_img_active",
            // wl_img_file: "logo.png",
            // cmp_admins: "on",
            // cmp_realms: "on",
            // cmp_permanent_users: "on",
            // cmp_vouchers: "on",
            // cmp_profiles: "on",
            // cmp_radius: "on",
            // cmp_login_pages: "on",
            // cmp_wizards: "on",
            // wl_img_file_upload: "(binary)"
        },
        show: false,
    }


    handleClose = () => {
        this.setState({show: false})
    }

    handleShow = () => {
        this.setState({show: true})

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

    onEditUser = () => {

        const data = this.state.data

        const cookies = new Cookies;
        RadiusApi.post('/cake3/rd_cake/access-providers/edit.json', data, {
            params: {
                token: cookies.get('Token')
            }
        })
            .then(response => {
                response.data.success ? this.handleClose() : alert('Username already taken')
            })

    }


    handleChange = event => {
        this.setState({
            data: {
                id: this.props.editId,
                username: event.target.value,
            }
        })
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
                                   value={this.state.data.username}
                                   onChange={event => this.handleChange(event)}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="ui button success" onClick={this.onEditUser}>
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
