import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Footer from '../../component/footer/Footer'
import { Header } from '../../component/header/Header'
import MailList from '../../component/mailList/MailList'
import Navbar from '../../component/navbar/Navbar'
import "./hotel.css"
export const Hotel = () => {
const [slideNumber, setSlideNumber] = useState(0);
const [open, setopen] = useState(false);

const handleArrow=(p)=>{
  let newSlide ;
  if(p==="l")
  {
   newSlide = slideNumber==0 ? 5:slideNumber-1;
  }
  else{
    newSlide =( slideNumber==imgs.length-1)?0:slideNumber+1;
  }
  setSlideNumber(newSlide)

}
const handleImg=(i)=>{
  setopen(true);
  setSlideNumber(i);
}



  const imgs = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/72796725.jpg?k=65ab3bbd7f44346ad97a830ae89951b8cc5a4a164fd3a07bd3f28944fc01296e&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/437155596.webp?k=659f5e9d3c1a5549333a71182e2f06909d60be10f3e88b30356ccc1b2aba17e0&o=&s=1"
    },
    {
     src:"https://cf.bstatic.com/xdata/images/hotel/max300/282136945.webp?k=2f946ef37ad423cae516b82744484b54ddbe68293a623a11ab29fa0b58c41a2a&o="
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/445287292.webp?k=62f6c6ba4ef18b0c79c3fa2061e4a67cbb058035c8b0f4e2e74413ab659e9e1c&o="
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square600/462511446.webp?k=a7d5a3b097bcb47b2aa457717cc9c21f81c353d738439ed9c996b225b0c548cb&o="
    }
  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
       <div className="hotelContainer">
     {
      open && 
     <div className="slider">
     <FontAwesomeIcon icon={faCircleXmark} className='cross' onClick={()=>setopen(false)}/>
     <FontAwesomeIcon icon={faCircleArrowLeft}  className='arrow'onClick={()=>handleArrow("l")}/>
     <div className="sliderWrapper">
     <img src={imgs[slideNumber].src} alt="" className="sliderImg"  />
     </div>
     <FontAwesomeIcon icon={faCircleArrowRight}  className='arrow' onClick={()=>handleArrow("r")}/>

     </div>
     }

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
            {imgs.map((img ,i)=> (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleImg(i)} src={img.src} alt="" className="hotelImg" />
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
