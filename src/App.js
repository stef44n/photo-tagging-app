// import logo from './logo.svg';
import "./styles/App.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import ash from "./assets/ash.png";
import tom from "./assets/tom.png";
import johnny from "./assets/johnny-bravo.png";
import fullPicture from "./assets/picture.jpg";
import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
    const [foundCharacters, setFoundCharacters] = useState({
        ash: false,
        tom: false,
        jb: false,
    });

    const handleImageClick = (event) => {
        let imageXcoord = event.pageX; //
        let pageY = event.pageY; // Page (From top of the page all the way to the bottom of the page)
        let targetOffTop = event.target.offsetTop; //
        let imageYcoord = pageY - targetOffTop; //
        // const { clientX, clientY } = event;
        setDropdownPosition({ x: imageXcoord, y: imageYcoord });
        setIsDropdownVisible(!isDropdownVisible);
        // console.log(clientX, clientY);
        console.log(imageXcoord, imageYcoord);
        // console.log(dropdownPosition);
    };

    const handleDropdownSelect = (item) => {
        setSelectedItem(item);
        // console.log(selectedItem);
        console.log(dropdownPosition);
        setIsDropdownVisible(false);

        if (
            dropdownPosition.x >= 64 &&
            dropdownPosition.x <= 146 &&
            dropdownPosition.y >= 4218 &&
            dropdownPosition.y <= 4325 &&
            item === "Ash"
        ) {
            // console.log("ASH has been successfully found");
            ashFunc();
        } //"64, 4218, 146, 4325"
        console.log(item);
        return item;
    };

    // function myTest(event) {
    //     let imageCoords = event.target.getBoundingClientRect(); //
    //     let pageY = event.pageY; // Page (From top of the page all the way to the bottom of the page)
    //     let targetOffTop = event.target.offsetTop; //
    //     let imageYcoord = pageY - targetOffTop; //
    //     console.log(event);
    //     console.log(`--------------------`);
    //     console.log(`event.pageX = ${event.pageX}`);
    //     console.log(`exact image Y-coord = ${imageYcoord}`); // GOOD
    //     console.log(imageCoords); // Distance from target/image to top of page
    //     console.log("NOT QUITE, keep going!");
    // }

    function ashFunc() {
        console.log("Found Ash!");
    }

    function tomFunc() {
        console.log("Found Tom!");
    }

    function jbFunc() {
        console.log("Found JB!");
    }

    useEffect(() => {}, []);

    return (
        <div className="App">
            <Header />
            <div
                hidden={!isDropdownVisible}
                style={{
                    // color: "red",
                    position: `absolute`,
                    left: `${dropdownPosition.x - 27}px`,
                    top: `${dropdownPosition.y + 207 - 27}px`,
                    width: "50px",
                    height: "50px",
                    // backgroundColor: "red",
                    backgroundColor: "rgb(255 255 255 / 20%)",
                    borderRadius: "100%",
                    border: "dashed white 2px",
                }}
            >
                <div
                    hidden={!isDropdownVisible}
                    style={{
                        position: `relative`,
                        left: `${27}px`,
                        top: `${27}px`,
                    }}
                >
                    {isDropdownVisible && (
                        <Dropdown onSelect={handleDropdownSelect} />
                    )}
                </div>
            </div>

            {/* {selectedItem && <p>You selected: {selectedItem}</p>} */}

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
                onClick={handleImageClick}
            />
            <map name="pictureMap">
                <area
                    alt="ash"
                    shape="rect"
                    coords="64, 4218, 146, 4325"
                    onClick={(e) => {
                        handleImageClick(e);
                        // ashFunc();
                    }}
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
