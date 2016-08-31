const styles = require("./About.css");
import {Component} from "react";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.about}>
                <div className={styles.card}>
                    <h1>About me</h1>
                    <img src={require("./images/1.jpg")} width="300" height="300"/>
                    <article>
                        <p>
                            Меня зовут Михаил, по профессии я программист, в основном занимаюсь frontend разработкой в
                            компании СКБ Контур. Пишу различные веб-приложения и сайты.
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
                            Буду рад увидеть вас через объектив моей фотокамеры!<br />
                        </p>
                        <p>
                            Также я люблю путешествовать, живу я на Урале, в Екатеринбурге.
                            Поэтому львиная доля путешествий приходится на ближайшие достопримечательности: Свердловская
                            область, Челябинская область, Башкирия, Пермский край.
                            Я обожаю ощущение жизни, когда сердце бьётся по-настоящему, тебя обдувает ветер и ты
                            смотришь вдаль на бескрайние просторы природы.
                        </p>
                        <div>
                            Если желаете со мной поработать, сообщите мне:
                            <ul className={styles.contactList}>
                                <li>vk: <a href="//vk.me/id2069565">Mikhail Shatikhin</a></li>
                                <li>facebook: <a href="//facebook.com/mshatikhin">Mikhail Shatikhin</a></li>
                                <li>instagram: <a href="//instagram.com/mshatikhin.photo">Mikhail Shatikhin</a></li>
                                <li>gmail: <a href="mailto:mshatikhin@gmail.com">mshatikhin@gmail.com</a></li>
                                <li>phone/whatsApp/telegram.: +7(912)043-98-27</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}
