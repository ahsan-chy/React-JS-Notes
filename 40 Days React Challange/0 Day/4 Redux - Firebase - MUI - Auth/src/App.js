import './App.css';
import Footer  from './layout/Footer';
import Header from './layout/Header';
import Routers from './Routes/Routers';

function App() {
  return (
    <div>
      <Header/>
        <Routers/>
      <Footer/>
    </div>
  );
}

export default App;
