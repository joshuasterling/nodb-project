import React from 'react';
import Header from './components/Header'
import Finder from './components/Finder'
import FighterContainer from './components/FighterContainer'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chosenFighter: []
    }

  }


  render() {
    return (
      <div className='App'>
        <Header />
        <Finder />
        <FighterContainer />
        <Footer />
      </div>
    )
  }
}

export default App