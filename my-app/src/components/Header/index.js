import  styles  from './Header.module.scss'

const Header = ( {onToggleCart} ) => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className={styles.navbarWrapper}>
                        <a href="#">
                            <img className={styles.logo} src="/img/logo.png" alt="logo" />
                        </a>

                        <div className={styles.catalogBtn}>
                            <button>
                                <span className="catalogBtnText">Каталог</span>
                            </button>

                            <div style = { {display: 'none'} } className={styles.catalog}>
                                <ul className={styles.catalogList}>
                                    <li>Игровая приставка</li>
                                    <li>Переферия для ПК</li>
                                    <li>Игры и софт</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.search}>
                            <div className={styles.searchWrapper}>
                                <input className={styles.input} type="text" />
                            </div>

                            <button className={styles.searchBtn}>
                                <img src="/img/search.svg" alt="" />
                            </button>
                        </div>

                        <div onClick = {onToggleCart} className={styles.cart}>
                                <span className={styles.counter}>1</span>
                                <span className={styles.icon}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="nonzero" d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h5.133L21.82 18.496A4 4 0 0 1 17.85 22H6.149a4 4 0 0 1-3.969-3.504L.867 8H6V6zm6 2a1 1 0 0 1 0 2H3.133l1.03 8.248A2 2 0 0 0 6.149 20h11.704a2 2 0 0 0 1.984-1.752L20.867 10H16V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h4z"></path>
                                </svg> */}
                                </span>
                                <p>Корзина</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header