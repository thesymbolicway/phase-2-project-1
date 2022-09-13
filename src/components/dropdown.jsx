import React from 'react';

function DropDown({options, raiseChange}) {
    return (
        <select onChange={raiseChange}>
            {options.map((option, i) => <option key={i} value={option.id}>{option.name}</option>)}
        </select>
    );
}

export default DropDown;