import React from 'react';
import Description from '02-modules/01-description/Description';
import Services from '02-modules/02-services/Services';
import styleNames from './main.module.css';
import Header from '02-modules/00-header/Header';


const Main = ({DataMain}) => {
    return (
        <div className={`${styleNames.page} page`}>
            <Header DataHeader={DataMain.Header}/>
            <Description DataDescription={DataMain.Description}/>
            <Services DataServices={DataMain.Services}/>
        </div>
    )
}

export default Main;