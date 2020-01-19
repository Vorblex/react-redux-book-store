import React, { Component } from 'react'

import withBookstoreService from 'components/hoc/with-bookstore-service'

const CartPage = class extends Component {

  state = {
    items: []
  }

  componentDidMount() {

    const items =  this.props.getData()

    this.setState({
      items
    })
  }

  render() {

    // const { items } = this.state
    
    return (
      <div className="Cart-page">
        <h1>Cart Page</h1>
        {/* {
          items.map(el => {
            return (
              <div key={el.id}>
                { el.title } - Author: {el.author}
              </div>
            )
          })
        } */}
      </div>
    )
  }  
}

const mapMethodsToProps = ({getBooks}) => {
  return {
    getData: getBooks
  }
}

export default withBookstoreService(mapMethodsToProps)(CartPage)