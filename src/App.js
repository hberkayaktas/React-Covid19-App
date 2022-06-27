
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Chart from "./Components/Chart";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    <div>
     
      <Navbar/>
      <div className="container">
      <Main/>
      <Banner/>
      <Chart/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
