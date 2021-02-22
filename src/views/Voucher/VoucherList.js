import React from "react";
import 'reactjs-popup/dist/index.css';
import VoucherApi from "./VoucherApi";


function VoucherList() {
    return (
        <table className="table table-bordered" style={{fontSize: '20px'}}>
            <thead>
            <tr className='ct-grid-background border-primary'>
                <th>Name</th>
                <th>Group</th>
                <th>Plan</th>
            </tr>
            </thead>

            <tbody>
                <VoucherApi/>

            </tbody>
        </table>
    )
}

export default VoucherList;
