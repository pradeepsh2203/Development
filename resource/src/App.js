import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
         <Header/>
         <div width='100px' height='100px'></div>
         <Vision />
    </div>
         <Footer/>
    </div>
  );
}

export default App;
