const styles = require("./Home.css");
import {Component} from "react";
import Slider from 'react-slick';

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
  require("./images/20.jpg")
]

function getRandomArbitary(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: getRandomArbitary(1, images.length),
            arrows: false
          };
          return (
            <div className={styles.root}>
                <Slider {...settings}>
                  {images.map(img=> <div className={styles.imgWrap}>
                    <img src={img} className={styles.img} />
                  </div>)}
                </Slider>
            </div>
          );
      }
}
