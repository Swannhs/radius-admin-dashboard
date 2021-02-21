import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import VoucherApi from "./VoucherApi";


function VoucherList() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <table className="table table-bordered" style={{fontSize: '20px'}}>
            <thead>
            <tr className='ct-grid-background border-primary'>
                <th>Group</th>
                <th>Plan</th>
                <th>Name</th>
            </tr>
            </thead>

            <tbody>
                <VoucherApi/>
            </tbody>
        </table>
    )
}

export default VoucherList;
