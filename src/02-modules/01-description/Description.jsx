import React from 'react';
import SliderDescription from '03-components/00-sliders/01-slider/SliderDescription';
import styleNames from './description.module.css';

const Description = ({DataDescription}) => {

    let DataTest = [
        "Молодая компания, не уступающая конкурентам во многих аспектах. Мы представляет широкий спектр услуг в сфере IT",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab tempore repellat maxime soluta dicta ullam reiciendis recusandae qui expedita.",
        "Тест Lorem ipsum dolor sit amet.",
        "Тест Lorem ipsum dolor sit amet.",
        "Тест Lorem ipsum dolor sit amet.",
    ]

    return (
        <div className={`${styleNames.wrapper} wrapper`}>
            <div className={`${styleNames.container} container`}>
                <div style={{ width: '820px' }}>
                    <p className={styleNames.subtitle}>{DataDescription.subtitleTop}</p>
                    <h1 className={styleNames.title}>{DataDescription.title}</h1>
                    <p className={styleNames.subtitle}>{DataDescription.subtitleBottom}</p>
                </div>
                <div>
                    <SliderDescription DataSliderDescription={DataDescription.SliderDescription}/>
                </div>
            </div>
        </div>
    )
}

export default Description;