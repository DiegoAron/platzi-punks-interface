import { Route, Routes } from 'react-router-dom';
import Home from './views/home/index.js';
import Avatars from './views/avatars'
import Avatar from './views/avatar'
import MainLayout from './layouts/main';

function App() {
  return (
    <>
    <MainLayout>
    <Routes>
    <Route path="/" exact element={<Home />}/>
    <Route path="/avatars" exact element={<Avatars/>} />
    <Route path="/avatars/:tokenId" exact element={<Avatar/>} /> 
   
    </Routes>
    </MainLayout>
    </>
  );
}

export default App;