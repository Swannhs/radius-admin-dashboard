import React from "react";
import 'reactjs-popup/dist/index.css';
import VoucherApi from "./VoucherApi";
import {Link} from "react-router-dom";


function VoucherList() {
    return (

        <>
            <div className="ui grid">

                <div className="ui text-right floated column">
                    <Link to='/admin/voucher/create'>
                        <button className='ui button primary'>
                            New
                        </button>
                    </Link>
                </div>
            </div>

            <table className="table table-bordered text-center mt-3" style={{fontSize: '20px'}}>
                <thead>
                <tr className='ct-grid-background border-primary'>
                    <th>
                        <h4 className='text-center'>
                            Name
                        </h4>
                    </th>

                    {/*<th className='d-none d-sm-block'>*/}
                    {/*    <h4 className='text-center'>*/}
                    {/*        More*/}
                    {/*    </h4>*/}
                    {/*</th>*/}

                    <th>
                        <h4 className='text-center'>
                            Group
                        </h4>
                    </th>
                    <th>
                        <h4 className='text-center'>
                            Plan
                        </h4>
                    </th>
                    <th>
                        <h4 className='text-center'>
                            Action
                        </h4>
                    </th>


                </tr>
                </thead>
                <VoucherApi/>
                {/*<tr>*/}
                {/*    <td>Test</td>*/}
                {/*    <td>Test</td>*/}
                {/*    <td>Test</td>*/}
                {/*</tr>*/}
            </table>
        </>

    )
}

export default VoucherList;
