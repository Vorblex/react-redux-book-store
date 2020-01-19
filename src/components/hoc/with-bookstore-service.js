import React from 'react'
import { BookstoreServiceConsumer } from 'components/bookstore-service-context'

export default () => Wrapped => {
    return props => {
      return (
        <BookstoreServiceConsumer>
          { bookstoreService => {
            return  <Wrapped {...props} bookstoreService={bookstoreService} />
          }
          }
        </BookstoreServiceConsumer>
      )
  }
}