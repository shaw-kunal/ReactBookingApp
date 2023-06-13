import React from 'react'
import "./featuredProperties.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

function FeatureProperties() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='carouselContainer'>
        
            <Carousel responsive={responsive} 
            >
         

                
                <div className='carouselItem'>
                    <img className='carouselImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
                    <div className='itemDesc'>
                        <ul><li className="cname">Aparthotel stare miasto</li>
                            <li className="ccity">Madrid</li>
                            <li className="cprice">startign from $120</li>
                        </ul><div className="crating">
                            <button className='carouselbtn'>8.9<FontAwesomeIcon icon={faStar} className="starIcon" /></button>
                            <span>Excellant</span>
                        </div>
                    </div>
                </div>
                <div className='carouselItem'>
                    <img className='carouselImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
                    <div className='itemDesc'>
                        <ul><li className="cname">Aparthotel stare miasto</li>
                            <li className="ccity">Madrid</li>
                            <li className="cprice">startign from $120</li>
                        </ul><div className="crating">
                            <button className='carouselbtn'>8.9<FontAwesomeIcon icon={faStar} className="starIcon" /></button>
                            <span>Excellant</span>
                        </div>
                    </div>
                </div>
                <div className='carouselItem'>
                    <img className='carouselImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" />
                    <div className='itemDesc'>
                        <ul><li className="cname">Aparthotel stare miasto</li>
                            <li className="ccity">Madrid</li>
                            <li className="cprice">startign from $120</li>
                        </ul><div className="crating">
                            <button className='carouselbtn'>8.9<FontAwesomeIcon icon={faStar} className="starIcon" /></button>
                            <span>Excellant</span>
                        </div>
                    </div>
                </div>
                <div className='carouselItem'>
                    <img className='carouselImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1" alt="" />
                    <div className='itemDesc'>
                        <ul><li className="cname">Aparthotel stare miasto</li>
                            <li className="ccity">Madrid</li>
                            <li className="cprice">startign from $120</li>
                        </ul><div className="crating">
                            <button className='carouselbtn'>8.9<FontAwesomeIcon icon={faStar} className="starIcon" /></button>
                            <span>Excellant</span>
                        </div>
                    </div>
                </div>
                <div className='carouselItem'>
                    <img className='carouselImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="" />
                    <div className='itemDesc'>
                        <ul><li className="cname">Aparthotel stare miasto</li>
                            <li className="ccity">Madrid</li>
                            <li className="cprice">startign from $120</li>
                        </ul><div className="crating">
                            <button className='carouselbtn'>8.9<FontAwesomeIcon icon={faStar} className="starIcon" /></button>
                            <span>Excellant</span>
                        </div>
                    </div>
                </div>
                <div className='carouselItem'>
                    <img className='carouselImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=73f8c029827076805ee781cdf818bb5e5e9b963227d74e4ebe071f3564ae4423&o=&s=1" alt="" />
                    <div className='itemDesc'>
                        <ul><li className="cname">Aparthotel stare miasto</li>
                            <li className="ccity">Madrid</li>
                            <li className="cprice">startign from $120</li>
                        </ul><div className="crating">
                            <button className='carouselbtn'>8.9<FontAwesomeIcon icon={faStar} className="starIcon" /></button>
                            <span>Excellant</span>
                        </div>
                    </div>
                </div>
                <div className='carouselItem'>
                    <img className='carouselImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" alt="" />
                    <div className='itemDesc'>
                        <ul><li className="cname">Aparthotel stare miasto</li>
                            <li className="ccity">Madrid</li>
                            <li className="cprice">startign from $120</li>
                        </ul><div className="crating">
                            <button className='carouselbtn'>8.9<FontAwesomeIcon icon={faStar} className="starIcon" /></button>
                            <span>Excellant</span>
                        </div>
                    </div>
                </div>

            </Carousel> </div>
    )
}

export default FeatureProperties