import Card from '../Card'
import  styles  from './Cart.module.scss'

const Cart = ( {cartItems, isOpenCart, onToggleCart} ) => {
    return (

        <div style ={ isOpenCart ? {display: 'flex'} : {display: 'none'}} className={styles.cart}>
            <div className={styles.body}>
                <h2>Корзина</h2>
                <p>Общая сумма заказа: <span>16444</span> руб</p>

                <div className={styles.cartWrapper}>
                    {cartItems.length === 0 ? <h2>Ваша корзина пока пуста</h2> : (

                        cartItems.map(item => (
                            <Card 
                            item = {item}
                            inCart = {true}/>
                        ))
                    )}
                </div>

                <button>Оформить заказ</button>
                
                <div onClick = {onToggleCart} className={styles.cartClose}><img src="/img/close.svg" alt="Close" /></div>
            </div>
        </div>

    )
}

export default Cart