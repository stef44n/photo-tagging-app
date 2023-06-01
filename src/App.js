// import logo from './logo.svg';
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <header className="App-header"> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
            {/* </header> */}
            <button>NEW GAME</button>
            <Footer />
        </div>
    );
}

export default App;
