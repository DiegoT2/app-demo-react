import React from 'react'
import "materialize-css/dist/css/materialize.css";

function CartWidget() {
    return(
            <div class="grey darken-3 right-align">
                <a href=""  style={{marginRight: 1 + 'em'}}><i class="material-icons ">add_shopping_cart</i></a>
            </div>
    )
}

export default CartWidget;