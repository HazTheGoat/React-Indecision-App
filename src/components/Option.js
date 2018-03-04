import React from 'react';

const Option = (props) => {
    return (
        <div>
            { props.option }
            <button onClick={() => {
                props.handleRemoveOption(props.index)
            }}>remove</button>
        </div>
    )
}

export default Option;
