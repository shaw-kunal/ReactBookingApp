import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../../component/footer/Footer'
import { Header } from '../../component/header/Header'
import MailList from '../../component/mailList/MailList'
import Navbar from '../../component/navbar/Navbar'
import "./hotel.css"
export const Hotel = () => {
  const imgs = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    }
  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
       <div className="hotelContainer">
        <div className="hotelwrapper">
          <div className="hotelDesc">
            <div className="hotelDetails">
              <h1 className='hotelName'>Grand hotel</h1>
              <span><FontAwesomeIcon icon={faLocationDot} beat className='locationIcon' />Elton st 125 new york</span>
              <p className='hotellocation'>Excellent location-500 from center</p>
              <p className='hotelfeature'>Book a stay  over $114 at this property and geta free airport  taxi</p>
            </div>
            <div className="bookNow">
              <button>Reserve or Book Now!</button>
            </div>


          </div>
          <div className="hotelImages">
            {imgs.map(img => (
              <div className="hotelImgWrapper">
                <img src={img.src} alt="" className="hotelImg" />
              </div>


            ))}

          </div>
          <div className="hotelDetails">
            <div className="hotelDeatilsText">
              <h2>Stay in heart of India</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellat voluptates ad illo quam ab facilis explicabo, molestias ipsam libero fugit est nam veritatis repellendus illum aliquid officia excepturi a maxime qui aperiam exercitationem debitis? Possimus architecto, inventore sed ut dolores repellendus consequatur dolorum laudantium praesentium. Pariatur quas deserunt repellat, libero quo tempore cum. Perspiciatis incidunt eaque aut, quasi quia quis reiciendis maiores harum sapiente adipisci modi, dolores ratione nulla ipsa quam repellat temporibus. Sit nostrum non est quibusdam fugit, temporibus qui autem aut numquam nesciunt nemo natus tempora, in placeat ut praesentium unde assumenda expedita sunt labore inventore. Quam!</p>
            </div>
            <div className="hotelDeatilsprice">
              <p>Perfect for a 9-night stay!</p>
              <span> voluptates nisi ut provident placeat, quaerat, quas eligendi illo sunt? Alias possimus ut enim ipsum obcaecati hic facere ea dolorum reprehenderit odit.</span>
              <p className='price'><b>$9.42</b>(9 night)</p>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
          <MailList/>
      <Footer/>

        </div>
     
   
      </div>
      

    </div>
  )
}
