import React, { Component } from 'react';
import '../Styles/Products.css'


const ProductsItem = (props) => {
    return (
        <div className='products-item'>
            <img
            src = {props.img}/>
            <p>{props.p}</p>
        </div>
    )
};

export default function Products(props) {
    let itemElements = props.itemData.map ( item => <ProductsItem img = {item.img} p = {item.p} />);
        return (
            <div id='secondId' className='section_second'>
                <div className='container'>
                    <h1>Продукция</h1>
                    <div className='SectionProducts'>
                        {itemElements}
                    </div>
                </div>
            </div>
        );
};
