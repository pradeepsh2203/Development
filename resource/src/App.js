import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vision from './components/Vision';

function App() {
  return (
    <div className="App" >
         <Header/>
         <div width='100px' height='100px'></div>
         <Vision />
    </div>
  );
}

export default App;
