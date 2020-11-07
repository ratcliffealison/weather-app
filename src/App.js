
import './App.css';
import Footer from "./Footer.js"
import Weather from "./Weather.js"

function App() {
  return (
    <div className="App ">
      <div className="container">
      <Weather defaultCity="London"/>
     </div> 
     <Footer />
        </div>
  );
}

export default App;
