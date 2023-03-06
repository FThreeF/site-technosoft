import React from 'react';
import styleNames from './header.module.css';

const Header = ({DataHeader}) => {
    return (
        <div className={`${styleNames.wrapper} wrapper`}>
            <dir className={styleNames.group}>
                <img className={styleNames.logo} src={DataHeader.logo} alt="" />
                <button className={styleNames.button}>
                    <div className={styleNames.line}></div>
                    <div className={styleNames.line}></div>
                    <div className={styleNames.line}></div>
                </button>
            </dir>
            <div className={styleNames.title}>{DataHeader.title}</div>
            <div className={styleNames.contact}>{DataHeader.contact}</div>
        </div>
    )
}

export default Header;