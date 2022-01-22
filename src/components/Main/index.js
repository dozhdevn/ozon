
import Card from '../Card'
import styles from './Main.module.scss'

const Main = ( {filteredItems, onAddItemToCart, onChecked, onFilteredByPrice, minValue, maxValue} ) => {

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
                                <input onChange = { (e) => onFilteredByPrice(e.target.value, maxValue)} id ="min" type="text" />
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="max">до</label>
                                <input onChange = { (e) => onFilteredByPrice(minValue, e.target.value)} id ="max" type="text" />
                            </div>
                        </form>

                        <div className={styles.filterCheck}>
                            <input onInput = {(e) => onChecked(e.target.checked)} type="checkbox" />
                            <span>Акция</span>
                        </div>
                    </div>
                    <div className={styles.products}>
                            
                            {
                                filteredItems.map((item, i) => (
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