import { Routes, Route } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='our_projects' element={<Projects />} />
        <Route path='gallery' element={<Slider />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='*' element={
          <div>
            <p>There is not that Page</p>
          </div>
        } />
      </Routes>
    </div>



  );
}

export default App;
