import React from 'react';

class Cart extends React.Component {

    
    render(){
        return(
            <div>
                <h3>Title: {this.props.product.title}</h3>
                <h4>Artist: {this.props.product.artist.name}</h4>
                <img src={this.props.product.image}></img>
                <button onClick={()=>this.props.onRemoveFromCart(this.props.product)}>Remove from cart</button>
            </div>
        )
    }
}

export default Cart;