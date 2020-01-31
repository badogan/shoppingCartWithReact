import React from 'react';
import './App.css';
import ProductBrowser from './components/ProductBrowser';
import CartBrowser from './components/CartBrowser'
import paintings from './data/paintings' //It is an array of objects

class App extends React.Component {

  state = {
    paintingsAvailable: paintings,
    paintingsInCart: []
  }

  componentDidMount(){
    this.addPriceForEachPaintingAndUpdateState()
  }


  addPriceForEachPaintingAndUpdateState = () => {
    this.setState({
      paintingsAvailable: this.state.paintingsAvailable.map(item=> {return { ...item, price:100}})
    })
  }

  addPaintingToCart = paintingReceived => {
    // Part-1: Remove from the available paintings
    let indexOfPaintingReceived = this.state.paintingsAvailable.indexOf(paintingReceived)  
    let updated_paintingsAvailable = [...this.state.paintingsAvailable]
    updated_paintingsAvailable.splice(indexOfPaintingReceived,1)
    this.setState({
      paintingsAvailable: updated_paintingsAvailable
    })
    // Part-2: Add to the cart
    let currentPaintingsInCart = [...this.state.paintingsInCart]
    currentPaintingsInCart.push(paintingReceived) //New one added
    this.setState({
      paintingsInCart: currentPaintingsInCart
    })
    
  }

  removePaintingFromCart = paintingReceivedToBeRemoved => {
    // Part-1: Remove from the cart
    let indexOfPaintingReceivedToBeRemoved = this.state.paintingsInCart.indexOf(paintingReceivedToBeRemoved)
    let updated_Cart = [...this.state.paintingsInCart]
    updated_Cart.splice(indexOfPaintingReceivedToBeRemoved,1)
    this.setState({
      paintingsInCart: updated_Cart
    })
    // Part-2: Add to available paintings
    let currentAvailablePaintings = [...this.state.paintingsAvailable]
    currentAvailablePaintings.push(paintingReceivedToBeRemoved)
    this.setState({
      paintingsAvailable: currentAvailablePaintings
    })
  }

  handleOffer = (painting,offer) => {
    let indexOfTargetPainting = this.state.paintingsAvailable.indexOf(painting)
    debugger
    this.setState({
      ...this.state,
      paintingsAvailable: this.state.paintingsAvailable.map((item,index)=>(index!==indexOfTargetPainting)? item :{...item,price:offer})
    })
    debugger
  }

  render() {
    return (
      <>
      <div className='initialContainer'>
        
        <div className='availablePaintingsContainer'>
        <h1>Available To Buy</h1>
          <ProductBrowser onHandleOffer={this.handleOffer} products={this.state.paintingsAvailable} onAddToCart={this.addPaintingToCart}/>
        </div>
        
        <div className='addedToCartPaintingsContainer'>
          <h1>Cart Contents</h1>
          <CartBrowser products={this.state.paintingsInCart} onRemoveFromCart={this.removePaintingFromCart}/>
        </div>
      </div>
      </>
    );
  }

}

export default App;
