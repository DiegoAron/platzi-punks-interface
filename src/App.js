import { Route, Routes } from 'react-router-dom';
import Home from './views/home/index.js';
import Punks from './views/punks'
import MainLayout from './layouts/main';

function App() {
  return (
    <>
    <MainLayout>
    <Routes>
    <Route path="/" exact element={<Home />}/>
    <Route path="/punks" element={<Punks/>} />
    </Routes>
    </MainLayout>
    </>
  );
}

export default App;