import Form from "./components/Form";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LuhnAlg from "./components/LuhnAlg";

function App() {
  return (
    <div className="App">
      <div className="head">< Header /></div>
      <div className="content">
        <LuhnAlg />
        {/*< Form />*/}</div>
      <div className="foo">< Footer /></div>
    </div>
  );
}

export default App;
