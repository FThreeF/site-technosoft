import styleNames from './sliderDescription.module.css';
import Slider from "react-slick";
import SliderBlock from '04-elements/02-blocks/01-sliderBlock/SliderBlock';
import React, { Component } from "react";

export default class SliderDescription extends Component {


    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }




    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }


    state = {
        activeSlide: 0,
        activeSlide2: 0
    };
    render() {
        const settings = {
            className: styleNames.slider,
            arrows: false,
            infinite: true,
            speed: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        };
        return (
            <div className={styleNames.wrapper}>

                <Slider ref={c => (this.slider = c)} {...settings}>
                    {this.props.DataSliderDescription.Slider.map((el) =>
                        <div>
                            <SliderBlock key={el.id} className={styleNames.sliderBlock}>
                                <h2 className={styleNames.text}>{el.title}</h2>
                                <div className={styleNames.sliderGroup}>
                                    <p className={styleNames.text}>{el.text}</p>
                                    <div className={styleNames.signature}>{el.signature}</div>
                                </div>
                            </SliderBlock>
                        </div>
                    )}
                </Slider>

                <div className={styleNames.block}>
                    <div className={styleNames.arrow} onClick={this.previous}>&#8249;</div>
                    <p className={styleNames.number}>{this.state.activeSlide + 1}</p>
                    <div className={styleNames.progressBar}>
                        <div className={styleNames.progressBackground}></div>
                        <div className={styleNames.progressValue} style={{ width: ((100 / this.props.DataSliderDescription.Slider.length) * (this.state.activeSlide + 1)) + '%' }}></div>
                    </div>
                    <p className={styleNames.number}>{this.props.DataSliderDescription.Slider.length}</p>
                    <div className={styleNames.arrow} onClick={this.next}>&#8250;</div>
                </div>

            </div>
        );
    }
}