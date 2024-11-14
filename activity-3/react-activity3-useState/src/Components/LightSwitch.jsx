import React, { useState } from 'react';


const LightSwitch = () => {
    const [isLightOn, setLight] = useState(false);

    const toggler = () => {
        setLight(!isLightOn);
    }
    return (
        <div className="container">
            <div className={isLightOn ? 'mainDivLight' : 'mainDivDark'}>
                <h1>{isLightOn ? 'The light is ON' : 'The light is OFF'}</h1>
                <button onClick={toggler} style={{ padding: '10px', fontSize: '16px' }}>
                    {isLightOn ? 'Turn Off' : 'Turn On'}
                </button>
            </div>
        </div>
    );
}

export default LightSwitch;
