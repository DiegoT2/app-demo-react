import React, {useState, useEffect, createContext} from "react"

export  const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState(0)
    let   [total, setTotal] = useState()

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
        }else{
            return true
        }
    }

    const addItem = (item, contador, id ) => {
        if(isInCart(id)){
            const products = cartList.find(product => product.id === id)
            const newCant = products.amount + contador
            const newProduct =  {
                id: products.id,
                name: products.titulo,
                image: products.imagen,
                price: products.precio,
                stock: products.stock,
                amount: newCant
            } 
            const oldCart = cartList.filter(item => item.id != id)  
            const newCart = [...oldCart, newProduct]
            setCartList(newCart)
        }else{
            const newItem = {
                id:  item.id,
                name: item.titulo,
                image: item.imagen,
                price: item.precio,
                stock: item.stock,
                amount: contador
            }
            setCartList([...cartList, newItem])
        }
    }

    const removeItem = (id) => {
        const newCart = cartList.filter(p => p.id != id)
        setCartList(newCart) 
    }

    let clearCart = () => {
        setCartList([])
        setQuantity(0)
    }

    return (
        <CartContext.Provider 
            value={{ cartList, addItem, removeItem, quantity, clearCart, total}}>
            {children}
        </CartContext.Provider>
    )}

export default CartProvider