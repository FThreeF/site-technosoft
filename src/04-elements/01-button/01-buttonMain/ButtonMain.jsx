import React from 'react';
import styleNames from './buttonMain.module.css';

const ButtonMain = ({ className, children, ...props }) => {

    return (
        <button{...props} className={`${styleNames.block} ${className}`}>
            {children}
            <div className={styleNames.groupArrow}>
                <div className={styleNames.line_1}></div>
                <div className={styleNames.line_2}></div>
                <div className={styleNames.arrow}>
                </div>
            </div>
        </button>
    )
}

export default ButtonMain;