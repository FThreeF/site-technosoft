import React from 'react';
import styleNames from './sliderTest.module.css';
import SliderBlock from "04-elements/02-blocks/01-sliderBlock/SliderBlock";




import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderTest extends Component {

    state = {
        activeSlide: 0,
        activeSlide2: 0
    };



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
    render() {
        const settings = {
            className: styleNames.wrapper,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),

            vertical: true,
            verticalSwiping: true,
        };



        return (
            <div>
                <h2>SliderTest</h2>
                <p>
                    <strong>{this.state.activeSlide}</strong>
                </p>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <SliderBlock color='pink'>SliderBlock</SliderBlock>
                    </div>
                    <div>
                        <SliderBlock color='teal'>One</SliderBlock>
                    </div>
                    <div>
                        <SliderBlock color='yellow'>Two</SliderBlock>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                    <button className={styleNames.button} onClick={this.previous}>
                        Previous
                    </button>
                    <button className={styleNames.button} onClick={this.next}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}