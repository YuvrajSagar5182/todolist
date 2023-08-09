import React from 'react';
import { Oval } from 'react-loader-spinner';
// import classes from './LoadingComponent.module.css' 

const LoadingComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Oval // Use the specific loader type
                color="#00BFFF"
                height={30}
                width={30}
            />
        </div>
    );
};

export default LoadingComponent;
