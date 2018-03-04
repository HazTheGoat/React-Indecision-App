import React from 'react';
import Option from './option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll }>Remove All</button>
            { props.options.length === 0 && <p>Please add an option to get started</p>}
            { props.options.map((option, i) => <Option key={i} handleRemoveOption={ props.handleRemoveOption } index={i} option={option} />)}
        </div>
    )
}

export default Options;
