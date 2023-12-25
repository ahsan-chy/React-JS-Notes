import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './store/store';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App" >
      <Provider store={store}>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
  
      </Provider>
    </div>
  );
}

export default App;
