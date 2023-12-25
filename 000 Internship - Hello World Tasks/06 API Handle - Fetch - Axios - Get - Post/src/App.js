import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import AxiosFetch from './components/AxiosFetch';
import AxiosFetch2 from './components/AxiosFetch2';
import FetchStore from './components/FetchStore';
import StrapiAPI from './components/StrapiAPI';

function App() {

  return (
    <div className="App">
      {/* <FetchStore/> */}
      {/* <AxiosFetch/> */}
      {/* <AxiosFetch2/> */}
      <StrapiAPI/>
    </div>
  );
}

export default App;
