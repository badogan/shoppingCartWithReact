import React from  'react';
import Product from './Product'

const style = {color: 'red'}

class ProductBrowser extends React.Component {

    renderProducts = () => {
        return this.props.products.map(item =>
            <Product
                key={item.id}
                product={item}
                onAddToCart={this.props.onAddToCart}
                onHandleOffer={this.props.onHandleOffer}
            />
        )
    }

    render() {
        return (<>
            <h1 style={style}>{this.props.products.length} paintings</h1>
            {this.renderProducts()}
        </>)
    }
}

export default ProductBrowser