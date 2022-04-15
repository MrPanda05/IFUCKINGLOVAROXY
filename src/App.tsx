import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Slides from './components/Slides/Slides';
import Test from './screens/Test';
import './index.css';
import { Helmet } from 'react-helmet-async';

type Roxy = {
  text: string
}

interface Gay {
  text: string
}
//Using interface
const Teste:React.FC<Gay> = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  )
}
//Using type
const Test2 = ({ text }: Roxy) => {
  return (
    <div>
      {text}
    </div>
  )
}
const App = () => {
  return (
    <div className="App">
      <div>
        <Helmet>
          <title>I love Roxy</title>
        </Helmet>
      </div>
      {/* <Teste text={'123'}/>
      <Test2 text='Gaywboser'/> */}
      <Header />
      <Slides />
      <Routes>
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
