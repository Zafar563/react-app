import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../Header/header'
import '../../Components/app/App.css'
const App = () => {
  return (
      <div  className='app'>
        <div className="container">
          <Header/>
          <Footer/>
        </div>
      </div>
  )
}

export default App

