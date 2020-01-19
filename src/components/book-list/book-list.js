import React, { Component } from 'react'
import {connect} from 'react-redux'
import BookListItem from 'components/book-list-item'
import { withBookstoreService } from 'components/hoc'
import { booksLoaded } from '../../actions';

import './book-list.css'

class BookList extends Component {
  
  // state = {
  //   books: []
  // }

  componentDidMount() {

    const {bookstoreService, booksLoaded} =  this.props
    const data = bookstoreService.getBooks()
    
    booksLoaded(data)
  }

  render() {

    const { books } = this.props
    
    return (
      <ul className="Book-list">
        {
          books.map(({id, ...item}) => {
            return (
              <li key={id}><BookListItem {...item} /></li>
            )
          })
        }
      </ul>
    )
  }  
}

const mapStateToProps = ({books}) => {
  return {
    books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      booksLoaded: (newBooks) => {
        dispatch(booksLoaded(newBooks))
      }
    }
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList))
