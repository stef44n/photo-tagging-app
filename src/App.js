// import logo from './logo.svg';
import "./styles/App.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import ash from "./assets/ash.png";
import tom from "./assets/tom.png";
import johnny from "./assets/johnny-bravo.png";
import fullPicture from "./assets/picture.jpg";

function App() {
    function myTest(event) {
        console.log(event);
        console.log(event.target.x);
        console.log(event.target.y);
        console.log(event.nativeEvent);
        console.log(event.nativeEvent.x);
        console.log(event.nativeEvent.y);
    }

    return (
        <div className="App">
            <Header />
            {/* <header className="App-header"> */}
            <img
                src={ash}
                className="ash"
                alt="ash"
                width="100px"
                hidden={true}
            />
            <img
                src={tom}
                className="tom"
                alt="tom"
                width="100px"
                hidden={true}
            />
            <img
                src={johnny}
                className="johnny-bravo"
                alt="johnny-bravo"
                width="100px"
                hidden={true}
            />
            <p>
                Timer - <code>start when picture loads</code>
            </p>
            <p>picture</p>
            <p>Tom, Ash, Bravo</p>
            {/* </header> */}
            <button>NEW GAME</button>
            <br />
            <img
                src={fullPicture}
                className="background"
                alt="background"
                // width="1500px"
                // width="100%"
                // hidden={true}
                useMap="#pictureMap"
                onClick={myTest}
            />
            <map name="pictureMap">
                <area alt="ash" shape="rect" coords="64, 4218, 146, 4325" />
                <area alt="tom" shape="rect" coords="2729, 5249, 2836, 5399" />
                <area
                    alt="johnny-bravo"
                    shape="rect"
                    coords="1385, 3057, 1468, 3195"
                />
            </map>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
