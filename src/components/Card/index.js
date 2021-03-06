import styles from './Card.module.scss'

const Card = ( {item, onAddItemToCart, onDeleteItemToCart,  inCart = false} ) => {

    return (
        <div className={styles.Card}>
            {item.sale && <span className={styles.sale}>🔥Hot Sale🔥</span>}
            <div className={styles.imgWrapper}>
                <div className={styles.img} style = { {backgroundImage: `url(${item.img})`} }></div>
            </div>

            <div className={styles.cardBody}>
                <p>{item.price} ₽</p>
                <h5>{item.title}</h5>
                {inCart ? <button onClick = { () => onDeleteItemToCart(item)} className={styles.btnCard}>Убрать из корзины</button> : 
                <button onClick = {() => onAddItemToCart(item)} className={styles.btnCard}>В корзину</button>}
            </div>
        </div>
    )
}

export default Card