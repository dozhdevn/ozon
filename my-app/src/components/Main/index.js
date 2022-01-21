import React, { useEffect, useState } from 'react';

import Card from '../Card'
import styles from './Main.module.scss'

const Main = ( {data, onAddItemToCart} ) => {

    return (
        <main>     
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.filter}>
                        <h3>Фильтр</h3>
                        <p>Цена</p>
                        <form>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="min">от</label>
                                <input id ="min" type="number" />
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="max">до</label>
                                <input id ="max" type="number" />
                            </div>
                        </form>

                        <div className="filterCheck">
                            <input type="checkbox" />
                            <span>Акция</span>
                        </div>
                    </div>
                    <div className={styles.products}>
                            
                            {
                                data.map((item, i) => (
                                    <Card
                                    key ={i}
                                    item={item}
                                    onAddItemToCart = {onAddItemToCart}/>
                                ))
                            }
                    </div>
                </div>
            </div>      
        </main>
    )
}

export default Main