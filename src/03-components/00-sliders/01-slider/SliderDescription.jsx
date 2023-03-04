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
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        };
        return (
            <div className={styleNames.wrapper}>
                <h2 className={styleNames.title}>{this.props.DataSliderDescription.title}</h2>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {this.props.DataSliderDescription.slider.map(text =>
                        <div>
                            <SliderBlock height={'160px'}>
                                <p className={styleNames.text}>{text}</p>
                            </SliderBlock>
                        </div>
                    )}
                </Slider>
                <div className={styleNames.block}>
                    <div className={styleNames.arrow} onClick={this.previous}>&#8249;</div>
                    <p className={styleNames.number}>{this.state.activeSlide + 1}</p>
                    <div className={styleNames.progressBar}>
                        <div className={styleNames.progressBackground}></div>
                        <div className={styleNames.progressValue} style={{ width: ((100 / this.props.DataSliderDescription.slider.length) * (this.state.activeSlide + 1)) + '%' }}></div>
                    </div>
                    <p className={styleNames.number}>{this.props.DataSliderDescription.slider.length}</p>
                    <div className={styleNames.arrow} onClick={this.next}>&#8250;</div>
                </div>
                <h3 className={styleNames.signature}>{this.props.DataSliderDescription.signature}</h3>

            </div>
        );
    }
}