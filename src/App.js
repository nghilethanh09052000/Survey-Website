import './App.css';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
//Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Consent from './components/Consent/Consent';
import Survey from './components/Survey/Survey';
import Error from './components/Error/Error';
import ChangeMind from './components/ChangeMind/ChangeMind';


//Redux Selectors:
import { captchaMode } from './redux/selectors.js/selectors';
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
              {
                setCaptChaMode.captchaCheck &&
                  <Route path='survey' element={<Survey/>} />
              }
              
              <Route path='*' element={<Error/>} />
            </Routes>
          <Footer/>
        </Router>
       
    </div>
  );
}

export default App;
