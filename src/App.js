// import logo from './logo.svg';
import "./styles/App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import ash from "./assets/ash.png";
import tom from "./assets/tom.png";
import johnny from "./assets/johnny-bravo.png";
import fullPicture from "./assets/picture.jpg";
import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [isLeaderboardVisible, setIsLeaderboardVisible] = useState(false);
    const [message, setMessage] = useState("HELLO");
    const [nameForHS, setNameForHS] = useState("");
    const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
    const [foundCharacters, setFoundCharacters] = useState({
        ash: false,
        tom: false,
        jb: false,
    });
    const [testData, setTestData] = useState([
        {
            name: "CONTROL",
            time: "03:30",
            date: "30 jan",
        },
        {
            name: "John Doe",
            time: "09:30",
            date: "2023-06-17",
        },
        {
            name: "Jane Smith",
            time: "02:45",
            date: "2023-06-18",
        },
        {
            name: "David Johnson",
            time: "11:15",
            date: "2023-06-19",
        },
        {
            name: "Sarah Williams",
            time: "06:00",
            date: "2023-06-20",
        },
        {
            name: "Michael Brown",
            time: "00:20",
            date: "2023-06-21",
        },
        {
            name: "Emily Taylor",
            time: "03:10",
            date: "2023-06-22",
        },
        {
            name: "Christopher Anderson",
            time: "12:45",
            date: "2023-06-23",
        },
    ]);

    const startTheGame = () => {
        setGameStarted(true);
    };

    const handleStopTimer = () => {
        setIsTimerRunning(false);
    };

    const handleImageClick = (event) => {
        let imageXcoord = event.pageX; //
        let pageY = event.pageY; // Page (From top of the page all the way to the bottom of the page)
        let targetOffTop = event.target.offsetTop; //
        let imageYcoord = pageY - targetOffTop; //
        // const { clientX, clientY } = event;
        setDropdownPosition({ x: imageXcoord, y: imageYcoord });
        setIsDropdownVisible(!isDropdownVisible);
        // console.log(clientX, clientY);
        console.log(pageY);
        console.log(imageXcoord, imageYcoord);
        setSelectedItem(null);
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
        } // "64, 4218, 146, 4325"
        else if (
            dropdownPosition.x >= 2729 &&
            dropdownPosition.x <= 2836 &&
            dropdownPosition.y >= 5249 &&
            dropdownPosition.y <= 5399 &&
            item === "Tom"
        ) {
            tomFunc();
        } // "2729, 5249, 2836, 5399"
        else if (
            dropdownPosition.x >= 1385 &&
            dropdownPosition.x <= 1468 &&
            dropdownPosition.y >= 3057 &&
            dropdownPosition.y <= 3195 &&
            item === "Johnny Bravo"
        ) {
            jbFunc();
        } // "1385, 3057, 1468, 3195"
        else {
            // setSelectedItem(null);
            setMessage("Not quite, keep looking");
        }

        console.log(item);
        return item;
    };

    function ashFunc() {
        // console.log("Found Ash!");
        if (foundCharacters.ash === false) {
            console.log("You have now found ASH for the first time");
            setMessage("You found ASH!");
            setFoundCharacters((prevData) => {
                return {
                    ...prevData,
                    ash: true,
                };
            });
            // GAME OVER
            if (foundCharacters.tom === true && foundCharacters.jb === true) {
                console.log("ALL CHARACTERS FOUND");
            }
        } else {
            console.log("You already found Ash");
            setMessage("You already found Ash");
        }
    }

    function tomFunc() {
        // console.log("Found Tom!");
        if (foundCharacters.tom === false) {
            console.log("You have now found TOM for the first time");
            setMessage("You found TOM!");
            setFoundCharacters((prevData) => {
                return {
                    ...prevData,
                    tom: true,
                };
            });

            if (foundCharacters.ash === true && foundCharacters.jb === true) {
                console.log("ALL CHARACTERS FOUND");
            }
        } else {
            console.log("You already found Tom");
            setMessage("You already found Tom");
        }
    }

    function jbFunc() {
        // console.log("Found JB!");
        if (foundCharacters.jb === false) {
            console.log("You have now found JOHNNY BRAVO for the first time");
            setMessage("You found JOHNNY BRAVO!");
            setFoundCharacters((prevData) => {
                return {
                    ...prevData,
                    jb: true,
                };
            });

            if (foundCharacters.ash === true && foundCharacters.tom === true) {
                console.log("ALL CHARACTERS FOUND");
            }
        } else {
            console.log("You already found Johnny Bravo");
            setMessage("You already found Johnny Bravo");
        }
    }

    const handleChange = (event) => {
        setNameForHS(event.target.value);
        console.log(event.target.value);
        // console.log(event.target.valueAsDate);
        // console.log(event.target.valueAsDate.toDateString());
    };

    const addToLeaderboard = () => {
        // connect everything here
        //settestdata ...prev, {name, time, date}
        const currentDate = `${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}`;
        const newEntry = {
            name: nameForHS,
            time: document.querySelector("#time").textContent,
            date: currentDate,
        };

        setTestData((prevData) => {
            return [...prevData, newEntry];
        });

        setIsLeaderboardVisible(true);
    };

    const sortedTestData = testData.sort((a, b) => {
        const [minutesA, secondsA] = a.time.split(":");
        const [minutesB, secondsB] = b.time.split(":");
        const timeNumberA =
            parseInt(minutesA, 10) * 60 + parseInt(secondsA, 10);
        const timeNumberB =
            parseInt(minutesB, 10) * 60 + parseInt(secondsB, 10);
        return timeNumberA - timeNumberB;
    });

    useEffect(() => {
        if (
            foundCharacters.ash === true &&
            foundCharacters.tom === true &&
            foundCharacters.jb === true
        ) {
            handleStopTimer();
        }
    }, [foundCharacters]);

    return (
        <div className="App">
            {!gameStarted && <Header />}
            {isDropdownVisible && isTimerRunning && (
                <div
                    hidden={!isDropdownVisible}
                    style={{
                        // color: "red",
                        position: `absolute`,
                        left: `${dropdownPosition.x - 27}px`,
                        top: `${dropdownPosition.y - 27}px`,
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
            )}

            {gameStarted && (
                <div className="timer-wrapper">
                    <div className="timer">
                        <Timer isTimerRunning={isTimerRunning} />
                    </div>
                    <div className="timer-images">
                        <img
                            src={ash}
                            className="ash horizontal-bar"
                            alt="ash"
                            // hidden={true}
                            style={{
                                border: foundCharacters.ash
                                    ? "solid seagreen"
                                    : "none",
                            }}
                        />
                        <img
                            src={tom}
                            className="tom horizontal-bar"
                            alt="tom"
                            style={{
                                border: foundCharacters.tom
                                    ? "solid seagreen"
                                    : "none",
                            }}
                        />
                        <img
                            src={johnny}
                            className="johnny-bravo horizontal-bar"
                            alt="johnny-bravo"
                            style={{
                                border: foundCharacters.jb
                                    ? "solid seagreen"
                                    : "none",
                            }}
                        />
                    </div>
                </div>
            )}

            {!isTimerRunning && (
                <div className="wrapper">
                    <div className="highScore-form">
                        <p>
                            You found all characters in{" "}
                            {document
                                .querySelector("#time")
                                .textContent.substring(0, 2) !== "00" &&
                                `${document
                                    .querySelector("#time")
                                    .textContent.substring(0, 2)}
                            minutes and `}
                            {document
                                .querySelector("#time")
                                .textContent.substring(3)}{" "}
                            seconds.
                        </p>
                        <p>Submit your time to the leaderboard!</p>
                        <div className="fieldset">
                            <label htmlFor="nameHS">Name:</label>
                            <input
                                className="nameInput"
                                type="text"
                                placeholder="Add your name"
                                onChange={handleChange}
                                name="nameHS"
                                value={nameForHS}
                                minLength={1}
                                maxLength={10}
                                pattern="^((?!kkk).)*$"
                            ></input>
                            <p>{document.querySelector("#time").textContent}</p>
                        </div>
                        <button onClick={addToLeaderboard}>SUBMIT</button>
                    </div>
                </div>
            )}

            {!gameStarted && (
                <div className="wrapper">
                    <div className="onStart">
                        <h2>Can you find these characters?</h2>
                        <div className="onStart-figures">
                            <figure>
                                <figcaption>Ash</figcaption>
                                <img
                                    src={ash}
                                    className="ash"
                                    alt="ash"
                                    height="150px"
                                    // hidden={true}
                                />
                            </figure>
                            <figure>
                                <figcaption>Tom</figcaption>
                                <img
                                    src={tom}
                                    className="tom"
                                    alt="tom"
                                    height="150px"
                                    // hidden={true}
                                />
                            </figure>
                            <figure>
                                <figcaption>Johnny Bravo</figcaption>
                                <img
                                    src={johnny}
                                    className="johnny-bravo"
                                    alt="johnny-bravo"
                                    height="150px"
                                    // hidden={true}
                                />
                            </figure>
                        </div>
                        {/* </header> */}
                        <button onClick={startTheGame}>NEW GAME</button>
                    </div>
                </div>
            )}

            {gameStarted && (
                <img
                    src={fullPicture}
                    className="background"
                    alt="background"
                    useMap="#pictureMap"
                    // onClick={handleImageClick}
                    onClick={(e) => {
                        handleImageClick(e);
                    }}
                />
            )}
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
                    onClick={(e) => {
                        handleImageClick(e);
                    }}
                />
                <area
                    alt="johnny-bravo"
                    shape="rect"
                    coords="1385, 3057, 1468, 3195"
                    onClick={(e) => {
                        handleImageClick(e);
                    }}
                />
            </map>

            {!isDropdownVisible && selectedItem && (
                <div className="message-wrapper">
                    <h1 className="message">{message}</h1>
                </div>
            )}

            {isLeaderboardVisible && (
                <div className="wrapper">
                    <div className="leaderboard">
                        <h1>Leaderboard</h1>
                        <table>
                            <tr>
                                <th>Place</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Date</th>
                            </tr>
                            {/* REPLACE WITH DATA FROM FIREBASE */}
                            <tr>
                                <td>3</td>
                                <td>Me</td>
                                <td>02:00</td>
                                <td>21/12/21</td>
                            </tr>

                            {sortedTestData.map((player) => (
                                <tr key={player.name + player.time}>
                                    <td>
                                        position {testData.indexOf(player) + 1}
                                    </td>
                                    <td>{player.name}</td>
                                    <td>{player.time}</td>
                                    <td>{player.date}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
