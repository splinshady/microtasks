import React, {useState} from 'react';

const OnOff = () => {

    const [on, setOn] = useState(false)

    const onStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '30px',
        border: '1px solid black',
        background: on ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '30px',
        border: '1px solid black',
        background: on ? 'white' : 'red',
        cursor: 'pointer',
    }
    const indicatorStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        background:  on ? 'green' : 'red',
        marginLeft: '10px',
    }

    return (
        <div>
            <h3>OnOff</h3>
            <span style={onStyle} onClick={() => {setOn(true)}}>on</span>
            <span style={offStyle} onClick={() => {setOn(false)}}>off</span>
            <span style={indicatorStyle}></span>
        </div>
    );
};

export default OnOff;