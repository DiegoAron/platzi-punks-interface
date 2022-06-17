import { Route, Routes } from 'react-router-dom';
import Home from './views/home/index.js';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  );
}

export default App;