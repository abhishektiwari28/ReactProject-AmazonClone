import './App.css'
import Header from './components/Header'
import './components/Header.css'
import Home from './components/Home'
import './components/Home.css'
import Checkout from './components/Checkout'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import CheckoutNext from './components/CheckoutNext'
import Orders from './components/Orders'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
         
        <Routes>
          <Route path="/login" element={ 
            <>
              <Login />
            </> 
          } />

          <Route path="/orders" element={ 
            <>
              <Header />
              <Orders />
            </> 
          } />

          <Route path="/check" element={ 
            <>
              <Header />
              <CheckoutNext />
            </> 
          } />

          <Route path="/checkout" element={ 
            <>
              <Header />
              <Checkout />
            </> 
          } />

          <Route path="/" element={ 
            <>
              <Header />
              <Home /> 
            </> 
          } />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
