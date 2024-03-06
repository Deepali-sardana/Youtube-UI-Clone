import {BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { AppContext } from './Context/ContextApi';
import Header from './Components/Header';
import Feed from './Components/feed';
import VideoDetails from './Components/VideoDetails';
import SearchResult from './Components/SearchResult';
function App() {
  return (
    <>
    <AppContext>
      <BrowserRouter>
      <div className='flex flex-col h-full'>
      <Header/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
      
      </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
    </>
  );
}

export default App;
