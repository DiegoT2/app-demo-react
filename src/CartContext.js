import React, {useState, useEffect} from 'react'

//me trae el Provider y el Consumer
export  const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState()

    useEffect(()=>{
        let tot =  0;
        let totals = cartList.map( p => p.price * p.amount)
        totals.map(p => tot = tot+p )
        setTotal(tot)

        const cartQuantity = cartList.length
        setQuantity(cartQuantity)

    }, [cartList])


    const isInCart = (id) => {
        const item = cartList.find( p => p.id === id)
        if(item === undefined){
            return false
        }
    }

    const addItem = (product, contador, id ) => {
        if(isInCart(id)){
            const products = cartList.find(p => p.id === id)
            const newCant = products.amount + contador
            const newProduct =  {
                id: products.id,
                name: products.name,
                image: products.image,
                price: products.price,
                amount: newCant
            } 

            const oldCart = cartList.filter(product => product.id != id)  
            const newCart = [...oldCart, newProduct] // me quedo con oldCart y sumo newProduct a la lista

            setCartList(newCart)
        }else{
            const newItem = {
                id:  product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                amount: contador
            }
            setCartList([...cartList, newItem])
        }
    }

    const removeItem = (id) => {
        const newCart = cartList.filter(p => p.id != id)
        setCartList(newCart) 
    }

    const clearCart = () => {
        setCartList([])
        setQuantity(0)
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, quantity, clearCart, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider