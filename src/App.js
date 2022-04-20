import './App.css';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'

//Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//Pages
import Consent from './pages/Consent/Consent';
import Survey from './pages/Survey/Survey';
import Error from './pages/Error/Error';
import ChangeMind from './pages/ChangeMind/ChangeMind';
import Finish from './pages/Finish/Finish';

//Redux Selectors:
import { captchaMode } from './redux/selectors/selectors';
//Import React-Redux
import {  useSelector } from "react-redux";
function App() {
  const setCaptChaMode = useSelector(captchaMode)

  console.log(setCaptChaMode)
  return (
    <div className="App">
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Consent/>} />
              <Route path='/changemind' element={<ChangeMind/>} />
      
                  <Route path='survey' element={<Survey/>} />
       
              <Route path='/finish' element={<Finish/>} />
              <Route path='*' element={<Error/>} />
            </Routes>
          <Footer/>
        </Router>
       
    </div>
  );
}

export default App;
