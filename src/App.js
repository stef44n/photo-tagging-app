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
        // let clientX = event.clientX; // Window area
        let imageCoords = event.target.getBoundingClientRect(); //
        // let clientY = event.clientY; // Window area (Like screen but starts from top of the web page - not screen)
        // let offsetY = event.currentTarget.offsetY; //
        // let screenY = event.screenY; // Screen area (Physical monitor screen - always same at cursor position)
        let pageY = event.pageY; // Page (From top of the page all the way to the bottom of the page)
        // let targetY = event.target.y; //
        let targetOffTop = event.target.offsetTop; //
        // let nativeEventY = event.nativeEvent.y; //
        let imageYcoord = pageY - targetOffTop; //
        console.log(event);
        // console.log(`event.clientX = ${clientX}`);
        console.log(`--------------------`);
        // console.log(`event.clientY = ${clientY}`);
        // console.log(`event.offsetY = ${offsetY}`);
        // console.log(`event.screenY = ${screenY}`);
        // console.log(`event.pageY = ${pageY}`);
        console.log(`event.pageX = ${event.pageX}`);
        // console.log(`event.target.y = ${targetY}`);
        // console.log(`event.target.offsetTop = ${targetOffTop}`);
        // console.log(`event.nativeEvent.y = ${nativeEventY}`);
        // console.log(`exact image Y-coord = ${pageY - screenY}`);
        // console.log(`exact image Y-coord = ${pageY - targetOffTop}`); // GOOD
        console.log(`exact image Y-coord = ${imageYcoord}`); // GOOD
        // console.log(event.target.x);
        // console.log(event.target.y); // Distance from target/image to top of page
        console.log(imageCoords); // Distance from target/image to top of page
        // console.log(event.nativeEvent);
        // console.log(event.nativeEvent.x);
        // console.log(event.nativeEvent.y); // Distance from top of page to cursor
        console.log("MISSED, keep going!");
    }

    function ashFunc() {
        console.log("Found Ash!");
    }

    function tomFunc() {
        console.log("Found Tom!");
    }

    function jbFunc() {
        console.log("Found JB!");
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
                <area
                    alt="ash"
                    shape="rect"
                    coords="64, 4218, 146, 4325"
                    onClick={ashFunc}
                />
                <area
                    alt="tom"
                    shape="rect"
                    coords="2729, 5249, 2836, 5399"
                    onClick={tomFunc}
                />
                <area
                    alt="johnny-bravo"
                    shape="rect"
                    coords="1385, 3057, 1468, 3195"
                    onClick={jbFunc}
                />
            </map>

            {/* <Footer /> */}
        </div>
    );
}

export default App;
