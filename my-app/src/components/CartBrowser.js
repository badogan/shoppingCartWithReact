import React from 'react';
import Cart from './Cart'

class CartBrowser extends React.Component {
    
    renderCart = () => 
        this.props.products.map(item=> 
            <Cart 
                key={item.id}
                product={item}
                onRemoveFromCart={this.props.onRemoveFromCart}
            />)
        
    
    render () {
        return (<>
            {this.props.products.length!==0
            ? <h1>{this.props.products.length} paintings</h1>
            : <h1>Cart empty</h1>
            }
            {this.renderCart()}
            </>)
    }

}

export default CartBrowser;