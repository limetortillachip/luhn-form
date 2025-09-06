import Form from "./components/Form";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="head">< Header /></div>
      <div className="content">< Form /></div>
      <div className="foo">< Footer /></div>
    </div>
  );
}

export default App;
