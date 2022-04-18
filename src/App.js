import './App.css';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        
        <Footer/>
    </div>
  );
}

export default App;
