import React from 'react'
import Dragonball from './Dragonball'

class Finder extends React.Component {
  constructor(props) {
    super(props)
      
    // this.state = {
    //   unknownFighter: []
    // }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Finder.js
        <Dragonball />
      </div>
    )
  }
}

export default Finder