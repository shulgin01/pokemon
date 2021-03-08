import React from 'react';

const Property = props => {
    return (
        <div className="pokemon__params-row">
            <div className="pokemon__params-label">
                {props.property}
            </div>
            <div className="pokemon__params-dotes">

            </div>
            <div className="pokemon__params-value">
                {props.value}
            </div>
        </div>
    );
};

export default Property;