// @flow

import React, { Component } from "react";
import styles from "./About.css";

export default class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.about}>
                <div className={styles.card}>
                    <div className={styles.avatarWrapper}>
                        <img className={styles.avatar} src={require("./images/1.jpg")} width="300" height="300"/>
                    </div>
                    <article>
                        <p>
                            Привет, меня зовут Михаил, по профессии я программист, в основном занимаюсь frontend
                            разработкой в
                            компании СКБ&nbsp;Контур. Пишу различные веб-приложения и сайты.
                        </p>
                        <p>
                            В свободное время от работы я увлеченно занимаюсь фотографией, которая заняла в моей жизни
                            основополагающее место.
                            Я считаю, что фотография позволяет многим раскрыться изнутри, показать человеку таким, каким
                            он себя ощущает.
                            Фотография – это прекрасное средство самовыражения, позитивное и познавательное занятие.
                        </p>
                        <p>
                            Меня очень вдохновляет создание портретов, воплощение художественных/творческих образов и
                            различных фантазий в фотографиях.
                            Особенно мне нравятся пленэрные съёмки: скалы, реки и леса, а также мистическое и
                            интригующее.
                            Буду рад увидеть вас через объектив моей фотокамеры!
                        </p>
                        <p>
                            Также я люблю путешествовать, живу я на Урале, в Екатеринбурге.
                            Поэтому львиная доля путешествий приходится на ближайшие достопримечательности: Свердловская
                            область, Челябинская область, Башкирия, Пермский край.
                            Я обожаю ощущение жизни, когда сердце бьётся по-настоящему, тебя обдувает ветер и ты
                            смотришь вдаль на бескрайние просторы природы.
                        </p>
                    </article>
                    <div className={styles.contacts}>
                        Если желаете со мной поработать (как модель/визажист/дизайнер), сообщите мне:
                        <ul className={styles.contactList}>
                            <li>
                                <a href="//vk.me/id2069565">
                                    <img src={require("./images/vk.png")}/>
                                    <span className={styles.contactListText}>Mikhail Shatikhin</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+7(912)043-98-27">
                                    <img src={require("./images/phone.png")}/>
                                    <span className={styles.contactListText}>+7 (912) 043-98-27</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
