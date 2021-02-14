import React from 'react';

const TimeLimit = () => {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                       value="option1" checked/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Default radio
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                       value="option2"/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Second default radio
                    </label>
            </div>
        </div>
    );
};

export default TimeLimit;
