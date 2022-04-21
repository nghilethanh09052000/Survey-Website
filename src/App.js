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
import Submit from './pages/Submit/Submit';
import Finish from './pages/Finish/Finish';

//Redux Selectors:
import { captchaMode , 
  questionMode ,
  submitMode

} from './redux/selectors/selectors';
//Import React-Redux
import {  useSelector } from "react-redux";
function App() {
  const setCaptChaMode = useSelector(captchaMode)
  const setQuestionMode = useSelector(questionMode)
  const setSubmitMode = useSelector(submitMode)
  return (
    <div className="App">
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Consent/>} />
              <Route path='/changemind' element={<ChangeMind/>} />
              {//Check if a captcha has been created 
                setCaptChaMode.captchaCheck &&
                  <Route path='survey' element={<Survey/>} />
                
              }
              {// Check if user has answered all the question
                setQuestionMode.question ===3 &&
                <Route path='/submit' element={<Submit/>} />
              }
              {
                //Check if submitting is successfull
                setSubmitMode.isSubmit &&
                <Route path='/finish' element={<Finish/>} />
              }
              
              <Route path='*' element={<Error/>} />
            </Routes>
          <Footer/>
        </Router>
       
    </div>
  );
}

export default App;
