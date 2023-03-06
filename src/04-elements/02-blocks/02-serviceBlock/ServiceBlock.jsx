import React from 'react';
import ButtonMain from '04-elements/01-button/01-buttonMain/ButtonMain';
import styleNames from './serviceBlock.module.css';

const ServiceBlock = ({DataService, Image}) => {
    console.log(DataService.image)
    return (
        <div className={styleNames.block}>
            <h1 className={styleNames.title}>{DataService.title}</h1>
            <p className={styleNames.text}>{DataService.text}</p>
            <img className={styleNames.image} src={DataService.image} alt="" />
            <ButtonMain className={styleNames.button}>Подробней</ButtonMain>
        </div>
    )
}

export default ServiceBlock;