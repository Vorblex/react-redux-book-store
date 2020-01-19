import React from 'react'
import { BookstoreServiceConsumer } from 'components/bookstore-service-context'

export default mapMethodsToProps => Wrapped => props => {
  return (
    <BookstoreServiceConsumer>
      { bookstoreService => {
        return  <Wrapped {...props} {...mapMethodsToProps(bookstoreService)} />
      }
      }
    </BookstoreServiceConsumer>
  )
}