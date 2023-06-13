import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React from 'react'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import { Header } from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import SearchItem from '../../component/searchItem/SearchItem'
import "./list.css"

export const List = () => {
  const [calender, setCalender] = useState(false);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  console.log(destination);
  console.log(date)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">destination</label>
              <div > <FontAwesomeIcon icon={faMagnifyingGlass} className="searchbtn" /> <input type="text" placeholder={destination} />
              </div>
            </div>

            <div className="lsItem">
              <label htmlFor="">Check-In/Check-out Time</label>
              <span onClick={() => setCalender(!calender)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {calender && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
                className="dateClass" />}
            </div>

            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price per night</span>
                <input type="text"></input>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max price per night</span>
                <input type="text" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} value={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} value={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} value={options.room} />
              </div>
              <button className='Searchbtn'>Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>

    </div>
  )
}

