import Card from '../Card'
import  styles  from './Cart.module.scss'

const Cart = ( {cartItems, isOpenCart, onToggleCart, onDeleteItemToCart} ) => {
    
    const closeCartOnOverlay = (target) => {
        if (target.className.substr(0, 4) === 'Cart'){
            onToggleCart()
        }
    } 
    
    const totalPrice = cartItems.reduce( (sum, obj) => obj.price + sum, 0)

    return (


        <div onClick = {(e) => closeCartOnOverlay(e.target)} style ={ isOpenCart ? {display: 'flex'} : {display: 'none'}} className={styles.cart}>
            <div className={styles.body}>
                <h2>Корзина</h2>
                <p>Общая сумма заказа: <span>{totalPrice}</span> руб</p>

                <div className={styles.cartWrapper}>
                    {cartItems.length === 0 ? <h2>Ваша корзина пока пуста</h2> : (

                        cartItems.map((item, i )=> (
                            <Card
                            key={i} 
                            item = {item}
                            onDeleteItemToCart = {onDeleteItemToCart}
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