// @flow

import React, {
    Component,
} from "react";
import styles from "./Slider.css";

type Props = {
    initialSlide: number;
}

type State = {
    selectedSlide: number;
}

class Slider extends Component {
    props: Props;
    state: State;

    constructor(props) {
        super(props);
        this.state = {
            selectedSlide: 0
        }
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

    render() {
        const slideWidth = 1080; //todo: width of slider
        const marginLeft = this.state.selectedSlide * -slideWidth;
        return (
            <div className={styles.root}>
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