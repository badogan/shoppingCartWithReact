import React from 'react'
import GetPriceForm from './GetPriceForm'

class Product extends React.Component {

    state = {
        showPriceForm: false
    }

    handlePriceForm = () => {
        this.setState({
            showPriceForm: true
        })
    }

    render(){
        const {title, artist, image} = this.props.product
        return(
            <div>
                <h3>Title: {title}</h3>
                <h4>Artist: {artist.name}</h4>
                <img src={image}></img>
                <button onClick={()=>this.props.onAddToCart(this.props.product)}>Add to cart</button>
                <button onClick={this.handlePriceForm}>Will be add to cart- now offer input and update</button>
                {this.state.showPriceForm? <GetPriceForm onHandleOffer={this.props.onHandleOffer} offerIsForThisProduct={this.props.product}/> :null}
            </div>
        )
    }

}

export default Product;