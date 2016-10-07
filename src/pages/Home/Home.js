// @flow

import styles from "./Home.css";
import {Component} from "react";
import Slider from "react-slick";

const images = [
    require("./images/1.jpg"),
    require("./images/2.jpg"),
    require("./images/3.jpg"),
    require("./images/4.jpg"),
    require("./images/5.jpg"),
    require("./images/6.jpg"),
    require("./images/7.jpg"),
    require("./images/8.jpg"),
    require("./images/9.jpg"),
    require("./images/10.jpg"),
    require("./images/11.jpg"),
    require("./images/12.jpg"),
    require("./images/13.jpg"),
    require("./images/14.jpg"),
    require("./images/15.jpg"),
    require("./images/16.jpg"),
    require("./images/17.jpg"),
    require("./images/18.jpg"),
    require("./images/19.jpg"),
    require("./images/20.jpg"),
    require("./images/21.jpg"),
];

const bestImages = [ 0, 1, 7, 9, 14, 15, 16, 18 ];

function getRandomArbitary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Landing = () => <div className={styles.landing}>
    <div className={styles.wrapper}>
        <div className={styles.header}>
            Желаете примерить на себе интересный образ или просто замечательных фотографий? Записывайтесь на фотосессию!
        </div>
        <div className={styles.center}>
            <a target="blank" className={styles.btnRequest} href="//vk.me/id2069565">Записаться!</a>
        </div>
    </div>
</div>;

type IState = {
    showLanding: boolean;
}

export default class Home extends Component {
    state: IState;

    constructor() {
        super();
        this.state = {
            showLanding: false
        }
    }

    render() {
        const initSlide = bestImages[getRandomArbitary(1, bestImages.length)];
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: initSlide
        };

        return (
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <Slider {...settings}>
                        {images.map(( img, index ) => <div key={index} className={styles.imgWrap}>
                            <img src={img} className={styles.img} onLoad={this.onLoad}/>
                        </div>)}
                    </Slider>
                </div>
                {this.state.showLanding && <Landing />}
            </div>
        );
    }

    onLoad = () => {
        !this.state.showLanding && this.setState({
            showLanding: true
        })
    }
}
