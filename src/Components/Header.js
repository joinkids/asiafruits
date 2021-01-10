import React, { Component } from 'react';
import logo from '../img/Logo_Type2 1.png'
import fruit from '../img/main_img_fruit2.png'


class Header extends Component {
    render() {
        return (
            <div className='section_first'>
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ul className="menu__box">
                            <li><a className="menu__item" href="/">Главная</a></li>
                            <li><a className="menu__item" href="/">Продукция</a></li>
                            <li><a className="menu__item" href="/">Где купить</a></li>
                            <li><a className="menu__item" href="/">Контакты</a></li>
                        </ul>
                        <div className='image-block'>
                            <img 
                                src={logo}
                                alt='logo'
                            />
                        </div>
                    </div>
                    <div className='nav'>
                            <div className='list-block'>
                            <ul>
                                <li><a href='#'>Главная</a></li>
                                <li><a href='#secondId'>Продукция</a></li>
                            </ul>
                            </div>
                            <div className='image-block'>
                                <img 
                                    src={logo}
                                    alt='logo'
                                />
                            </div>
                            <div className='list-block'>
                            <ul>
                                <li><a href='#thirdId'>Где купить</a></li>
                                <li><a href='#footerId'>Контакты</a></li>
                            </ul>
                            </div>
                    </div>
                    <div className='main-menu'>
                                <p> <img src={fruit} alt='fruit-img'/>
                                Компания Asia Fruits была основана в 2005г. 
                                Экспортирует фрукты и овощи из Китая, Вьетнама, 
                                Камбоджи, Турции, Ирана, Узбекистана, Казахстана,
                                Киргизии, Азербайджана, Молдавии. 
                                <br></br>
                                <br></br>
                                Для доставки компания использует автотранспорт, 
                                железнодорожный транспорт, авиа транспорт и 
                                контейнерные перевозоки. 
                                <br></br>
                                <br></br>
                                Прекрасно понимая значимость свежих плодов в 
                                питании, мы взяли на себя эту сложную и 
                                ответственную миссию, положив в основу своей 
                                деятельности безупречную свежесть предлагаемой 
                                продукции и честность по отношению к партнерам. </p>   
                    </div>
                    
            </div>
            
        );
    }
}

export default Header;