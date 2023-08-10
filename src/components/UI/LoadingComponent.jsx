import React from 'react';
import { Oval } from 'react-loader-spinner';
// import classes from './LoadingComponent.module.css' 

const LoadingComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: 'auto', 'zIndex': 10 }}>
            <Oval // Use the specific loader type
                color="#00BFFF"
                height={25}
                width={25}
            />
        </div>
    );
};

export default LoadingComponent;
