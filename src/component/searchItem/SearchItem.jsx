import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./searchItem.css";

export default function SearchItem() {
    const navigate =useNavigate(); 
    const handleSearch=()=>
    {
    navigate('/hotels/abc')

    }

    return (
        <div className="siItem">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="searchImg" />
            <div className="siDesc">
                <h1 className="siTitle">Fairfield by Marriott Goa Anjuna
                </h1>
                <span className="siDistance">500 from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Compartement with air conditioning</span>
                <span className="siFeatures">Entire  studio  * 1 bathroom * 21 square m  1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">you can cancel it later so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9<FontAwesomeIcon beatFade icon={faStar} className="siStar" /></button>
                </div>
                <div className="siDetailsText">
                    <div className="siPrice">$123</div>
                    <div className="sipriceDesc">include taxes and fees</div>
                    <button className="siAvalability" onClick={handleSearch}>see Avaliability</button>
                </div>
            </div>

        </div>
    )
}
