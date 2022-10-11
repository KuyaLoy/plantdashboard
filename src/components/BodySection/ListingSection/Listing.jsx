import React from "react";
import './listing.scss';
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import img from "../../../assets/plants-base1.png";

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listing</h1>
                <button className="btn flex">See All
                <BsArrowRightShort className="icon" />
                </button>
            </div>


            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className="icon" />
                    <img src={img} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
            </div>
        </div>
    )
}

export default Listing;