import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <div class="landing">
                    <div class="container">
                        <h1>Желаете примерить на себе интересный образ или просто замечательных фотографий?Записывайтесь на фотосессию!</h1>
                        <a class="btn btn-request" href="/about">Записаться</a>
                    </div>
                </div>
                <div class="concept">
                    <div class="container">
                        <h1>Моя концепция</h1>
                        <ul class="concept__menu">
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Фотография должна быть такой, чтобы не стыдно было её напечатать</span>
                                </h3>
                            </li>
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Минимализм цвета и формы</span>
                                </h3>
                            </li>
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Фотография души</span>
                                </h3>
                            </li>
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Фотография как искусство</span>
                                </h3>
                            </li>
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Свет. Цвет. Форма.</span>
                                </h3>
                            </li>
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Фотография как способ узнать новое, почувствовать новое, создать невообразимое</span>
                                </h3>
                            </li>
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Фотография как способ привнести в реальность нереальное</span>
                                </h3>
                            </li>
                            <li class="concept__link">
                                <h3>
                                    <img class="concept__image" src="/Content/icons/arrow.png" width="32" height="32"/>
                                    <span class="concept__description">Эстетика прекрасного</span>
                                </h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;