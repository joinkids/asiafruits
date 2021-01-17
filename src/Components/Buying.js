import React, { Component } from 'react';
import '../Styles/Buying.css'
import map from '../img/Map.jpg'
<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A036f856cb6cd4818357bc1ddbc287ebd690d0318ed2608846d92ae48b33b620b&amp;width=578&amp;height=330&amp;lang=ru_RU&amp;scroll=true"></script>


export default function Buying() {
        return (
            <div id='thirdId' className='section_third'>
                <div className='container'>
                    <h1>Где купить</h1>
                    <div className='SectionBuying'>
                        <div className='buying-text'>
                            <p>
                            Общество с ограниченной ответственностью "Азия-Фрукт" 
                            <br></br>
                            (ООО "Азия-Фрукт")
                            <br></br>
                            ИНН/КПП: 5404388300/540301001
                            <br></br>
                            Юридический и фактический адрес: 630088,
                            <br></br> 
                            г.Новосибирск ул.Сибиряков-Гвардейцев, 49/1, склад №19,  
                            офис 62, 71 
                            <br></br> 
                            р/сч 40702810223240002072 в ФИЛИАЛ 
                            <br></br> 
                            «НОВОСИБИРСКИЙ» АО «АЛЬФА-БАНК»
                            <br></br> 
                            БИК 045004774
                            </p>
                        </div>
                        <div className='map'>
                            <img 
                                src={map}
                                alt='logo'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
}
