import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import Caoursel from "./components/Caoursel";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Caoursel />
        <Vision />
      </div>
      <Footer />
    </div>
  );
}

export default App;
