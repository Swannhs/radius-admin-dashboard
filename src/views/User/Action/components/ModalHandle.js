import React from 'react';
import {Button} from "semantic-ui-react";
import EditUi from "./EditUI";

const ModalHandle = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <EditUi
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ModalHandle;
