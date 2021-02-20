import React, {Component} from 'react';

class EditUi extends Component {
    componentDidMount() {
        console.log(this.props.match.params.test)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default EditUi;
