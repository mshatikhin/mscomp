// @flow

import React, {
    Component,
} from "react";
import styles from "./Slider.css";

type Props = {
    initialSlide: number;
    children: any[];
}

type State = {
    selectedSlide: number;
    slideWidth: number;
    autoplay: boolean;
}

class Slider extends Component {
    props: Props;
    state: State;
    sliderElement: Element;
    autoplayInterval: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            selectedSlide: 0,
            slideWidth: 0,
            autoplay: true
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.setSliderSize);
        this.setSliderSize();
        this.setAutoPlay();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setSliderSize);
    }

    prev = () => {
        const prevSlide = this.state.selectedSlide === 0 ? this.props.children.length - 1 : --this.state.selectedSlide;
        this.setState({
            selectedSlide: prevSlide
        })
    };

    next = () => {
        const nextSlide = this.state.selectedSlide === this.props.children.length - 1 ? 0 : ++this.state.selectedSlide;
        this.setState({
            selectedSlide: nextSlide
        })
    };

    getWidthSlider = (): number => {
        const slider = this.sliderElement;
        if (slider) {
            let computedStyle = getComputedStyle(slider);
            let width = computedStyle.width;
            return parseInt(width);
        }
        return 0;
    };

    setSliderSize = () => {
        this.setState({
            slideWidth: this.getWidthSlider()
        })
    };

    setAutoPlay = (stop: boolean = false) => {
        if (stop) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null
        } else if (this.autoplayInterval == null) {
            this.autoplayInterval = setInterval(this.next, 3000);
        }
    };

    render() {
        const marginLeft = this.state.selectedSlide * -this.state.slideWidth;
        return (
            <div className={styles.root}
                 ref={el => this.sliderElement = el}
                 onMouseDown={()=> this.setAutoPlay(true)}
                 onClick={()=> this.setAutoPlay(false)}
            >
                <div className={styles.slides} style={{ marginLeft: marginLeft }}>
                    {React.Children.map(this.props.children, (child) => <div
                        className={styles.imageWrap}>{child}</div>)}
                </div>
                <div className={`${styles.controlWrapper} ${styles.controlWrapperLeft}`} onClick={this.prev}>
                    <div className={`${styles.control} ${styles.leftControl}`}/>
                </div>
                <div className={`${styles.controlWrapper} ${styles.controlWrapperRight}`} onClick={this.next}>
                    <div className={`${styles.control} ${styles.rightControl}`}/>
                </div>
            </div>
        );
    }
}

export default Slider;