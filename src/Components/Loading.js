import React, { Component } from 'react'
import loding from './loding.gif'
export default class Loading extends Component {
  render() {
    return (
      <div className="container text-center">
            <img className='my-4' src={loding} alt="Loading....." />
      </div>
    )
  }
}
