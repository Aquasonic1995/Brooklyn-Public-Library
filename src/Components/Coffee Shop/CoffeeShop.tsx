import React from 'react';
import s from './CoffeeShop.module.scss'
import {coffeeTea, dessertsCakes} from "../../Redux/store";

function CoffeeShop() {
    return (
        <section className={s.coffee_shop} id="coffee-shop">
            <h2>Coffee Shop</h2>
            <p>In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly
                conversation.
                you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you
                can try desserts from bakery.</p>
            <div className={s.menu}>
                <div className={s.name}><span>Coffee & Tea</span>
                    {coffeeTea.map((item,i) => (
                            <div className={s.container} key={i}>
                                <div className={s.title}>{item.title}</div>
                                <div className={s.number}>${item.price}</div>
                            </div>

                    ))}
                </div>

                <div className={s.name}>
                    <div className={s.wrapper}>
                        <span>Desserts & Cakes</span>
                        {dessertsCakes.map((item,i) => (
                                <div className={s.container_2} key={i}>
                                    <div className={s.title}>{item.title}</div>
                                    <div className={s.line}></div>
                                    <div className={s.number}>{item.price}</div>
                                </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default CoffeeShop;