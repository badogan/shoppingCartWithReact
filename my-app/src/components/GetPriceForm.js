import React from 'react';

class GetPriceForm extends React.Component {

    state = {
        enteredOffer: null
    }

    handleEnteredOffer = (event) => {
        this.setState({
            enteredOffer: event.target.value
        })
    }

    componentDidMount(){
        this.setState({
            enteredOffer: this.props.offerIsForThisProduct.price
        })
    }

    render(){
        return(
            <form>
                <h2>How much would you like to pay?</h2>
                <label>Enter your offer: 
                    <input onChange={this.handleEnteredOffer} type='text' name='offer' placeholder={this.props.offerIsForThisProduct.price}></input>
                </label>
                <button onClick={()=>
                    this.props.onHandleOffer(this.props.offerIsForThisProduct,this.state.enteredOffer)
                    }>Submit my offer</button>
            </form>
        )
    }

}

export default GetPriceForm;

// GetPriceForm onHandleOffer={this.props.handleOffer} offerIsForThisProductId={id}
// handleOffer = (paintingId,offer)