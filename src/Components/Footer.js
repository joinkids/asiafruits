import React, { Component } from 'react';
import foologo from '../img/LogoType2.png'

class Footer extends Component {
    render() {
        return (
            <div id='footerId' className='footer'>
                    <h1>Контакты</h1>
                    <div className='section_footer'>
                        <img 
                            src={foologo}
                            alt='logo'
                        />
                    </div>
                    <div className='blockTextF'>
                        <p>Отдел продаж: <br></br>+7 993 019 55 70</p>
                        <p>Бухгалтерия: <br></br>+7 983 311 34 49</p>
                    </div>
                    <div className='blockTextS'>
                        <p>aziya_frukt@mail.ru<br></br>asiafruits@inbox.ru</p>
                    </div>
            </div>    
        ); 
    }
}

export default Footer;