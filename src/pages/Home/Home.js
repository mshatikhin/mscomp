// @flow

const styles = require("./Home.css");
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
        <h2>
            Желаете примерить на себе интересный образ или просто замечательных фотографий? Записывайтесь на фотосессию!</h2>
        <div className={styles.center}>
            <a target="blank" className={styles.btnRequest} href="//vk.me/id2069565">Записаться!</a>
        </div>
    </div>
</div>;

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        const initSlide = bestImages[getRandomArbitary(1, bestImages.length)];
        const settings = {
            infinite: true,
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
                            <img src={img} className={styles.img}/>
                        </div>)}
                    </Slider>
                </div>
                <Landing />
            </div>
        );
    }
}
