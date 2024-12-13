import Header from './components/Header/Header';

import './index.css';
import Company from './pages/Company/Company';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Company />} />
      </Routes>
    </>
  );
}

export default App;
