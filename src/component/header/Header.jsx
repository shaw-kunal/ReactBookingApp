import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';






export const Header = (props) => {
    const navigate = useNavigate();

    const [destination, setDestination] = useState('');
    const [calender, setCalender] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOption] = useState(false);

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });


    const handleOption = (name, operation) => {

        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSerch = (e) => {
        navigate("/hotels", { state: { destination, date, options } })

    }
    return (

        <div className="header">
            <div className={props.type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rental</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flight</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>

                </div>
                {props.type !== "list" && <> <h1 className="headerTitle">A lifetime of discount ? it's genuine</h1>
                    <p className="headerDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ratione?</p>
                    <button className='headerBtn '>Sign in/Register</button>


                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input
                                type="text"
                                placeholder='where are you going'
                                className='headerSearchInput'
                                onChange={e => setDestination(e.target.value)} />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className=" headerIcon" />
                            <span onClick={() => setCalender(!calender)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {calender && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                                className="dateClass"/>
                            }
                        </div>
                        <div className="headerSearchItem" >
                            <FontAwesomeIcon icon={faPerson} className=" headerIcon" />
                            <span className="headerSearchText" onClick={() => setOpenOption(!openOption)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>

                            {openOption &&
                                <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCount">
                                            <button disabled={options.adult <= 0}
                                                className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className="optionCountNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Child</span>
                                        <div className="optionCount">
                                            <button disabled={options.children <= 0}
                                                className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                            <span className="optionCountNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCount">
                                            <button disabled={options.room <= 0}
                                                className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                            <span className="optionCountNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>

                                        </div>
                                    </div>
                                </div>}

                        </div>
                        <div className="headerSearchItem">
                            <button className="headerBtn" onClick={handleSerch}>Search</button>
                        </div>
                    </div> </>}





            </div>
        </div>

    )
}













/* for data we use react-date-range website
command: yarn  add react-date-range
        yarn add data-fns
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
        


*/













