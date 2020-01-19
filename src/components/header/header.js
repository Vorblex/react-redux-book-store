import React from 'react'
import WithBookstoreService from 'components/hoc/with-bookstore-service'

const Header = (props) => {

  const data =  props.getData()
  
  return (
    <div className="Header">
      <h1>Main themes</h1>
      {
        data.map(el => {
          return (
            <div key={el+1}>{el}</div>
          )
        })
      }
    </div>
  )
}

const mapMethodsToProps = ({getBooks}) => {
  return {
    getData: getBooks
  }
}

export default WithBookstoreService(mapMethodsToProps)(Header)