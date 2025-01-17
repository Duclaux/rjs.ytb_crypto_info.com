import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
  Navbar,
  Hompage,
  Cryptocurrencies,
  Exchanges,
  CryptoDetails,
  News
} from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>

        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route exact path='/' element={<Hompage/>} />
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                <Route exact path='/exchanges' element={<Exchanges/>} />
                <Route exact path='/crypto:coinId' element={<CryptoDetails/>}/>
                <Route exact path='/news' element={<News/>}/>
              </Routes>
            </div>
          </Layout>
        </div>

        <div className='footer'></div>
    </div>
  )
}

export default App