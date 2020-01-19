import React, { Component } from 'react'
import withBookstoreService from 'components/hoc/with-bookstore-service'
// import {connect} from 'react-redux';
import BookListItem from 'components/book-list-item'

import './book-list.css'

class BookList extends Component {
  
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

    const { items } = this.state
    
    return (
      <ul className="Book-list">
        {
          items.map(({id, ...item}) => {
            return (
              <li key={id}><BookListItem {...item} /></li>
            )
          })
        }
      </ul>
    )
  }  
}

const mapMethodsToProps = ({getBooks}) => {
  return {
    getData: getBooks
  }
}

export default withBookstoreService(mapMethodsToProps)(BookList)
