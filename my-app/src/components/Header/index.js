import { useState } from 'react'
import  styles  from './Header.module.scss'

const Header = ( {onToggleCart, cartItems, onUpdateFiltredItems, onFiltredItemsByCategory} ) => {

    const [isOpenCatalog, setIsOpenCatalog] = useState(false)

    const onToggleOpenCatalog = () => {
        setIsOpenCatalog(prev => !prev)
    }

    return (
        <header>
            <nav>
                <div className="container">
                    <div className={styles.navbarWrapper}>
                        <div>
                            <img className={styles.logo} src="/img/logo.png" alt="logo" />
                        </div>

                        <div className={styles.controlWrapper}>
                            <div className={styles.catalogBtn}>
                                <button onClick ={onToggleOpenCatalog}>
                                    <img src="/img/catalog.svg" alt="" />
                                    <span className={styles.catalogBtnText}>Каталог</span>
                                </button>

                                <div 
                                onMouseLeave={onToggleOpenCatalog}
                                style = { isOpenCatalog ? { display: 'block' } : {display: 'none'} } 
                                className={styles.catalog}>
                                    <ul 
                                    onClick={(e) => onFiltredItemsByCategory(e.target)}
                                    className={styles.catalogList}>
                                        <li>Все товары</li>
                                        <li>Игровая приставка</li>
                                        <li>Периферия для ПК</li>
                                        <li>Игры и софт</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.search}>
                                <div className={styles.searchWrapper}>
                                    <input onChange={(e) => onUpdateFiltredItems(e.target.value)} className={styles.input} type="text" />
                                </div>

                                <button className={styles.searchBtn}>
                                    <img src="/img/search.svg" alt="" />
                                </button>
                            </div>
                        </div>

                        <div onClick = {onToggleCart} className={styles.cart}>
                                <span className={styles.counter}>{cartItems.length}</span>
                                <img src="/img/cart.svg" alt="" />
                                <p>Корзина</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header