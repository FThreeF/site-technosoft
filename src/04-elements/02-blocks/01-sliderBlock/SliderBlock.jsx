import React from 'react';
import styleNames from './sliderBlock.module.css';

const SliderBlock = ({children, height, color, ...props}) => {
    return (
        <div style={{background: color, height: height}} className={styleNames.wrapper} {...props}>
           {children} 
        </div>
    )
}

export default SliderBlock;