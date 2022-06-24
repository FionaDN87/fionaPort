import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
// eslint-disable-next-line
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Work from './components/Work';
import Contact from './components/Contact';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CodeIcon from '@mui/icons-material/Code';
import ReplayIcon from '@mui/icons-material/Replay';
import HotelIcon from '@mui/icons-material/Hotel';

function App() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes basename="/fionaPort">
        <Route path='/fionaPort/Home' element={<Home/>} />
        <Route path='/fionaPort' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route exact path='/fionaPort/Resume' element={<Resume/>} />
        <Route exact path='/fionaPort/Contact' element={<Contact/>} />
        <Route exact path='/fionaPort/Work' element={<Work/>} />
      </Routes>
      <div className="sloganStyle"><LocalDiningIcon/> EAT 
                                    <HotelIcon/> SLEEP 
                                    <CodeIcon/> CODE 
                                    <ReplayIcon/> REPEAT</div>
    </div>
  );
}
export default App;
