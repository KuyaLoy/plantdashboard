import React from "react";
import './listing.scss';
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import imgBase1 from "../../../assets/plants-base1.png";
import imgBase2 from "../../../assets/plants-base2.png";
import imgBase3 from "../../../assets/plants-base3.png";
import imgBase4 from "../../../assets/plants-base4.png";

import userProfile1 from "../../../assets/user-profile1.jpg";
import userProfile2 from "../../../assets/user-profile2.jpg";
import userProfile3 from "../../../assets/user-profile3.jpg";
import userProfile4 from "../../../assets/user-profile4.jpg";

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
                    <img src={imgBase1} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiOutlineHeart className="icon" />
                    <img src={imgBase2} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiOutlineHeart className="icon" />
                    <img src={imgBase3} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiOutlineHeart className="icon" />
                    <img src={imgBase4} alt="Image Name" />
                    <h3>Annual Vince</h3>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                        See All
                            <BsArrowRightShort className="icon" />
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={userProfile1} alt="User Image" />
                            <img src={userProfile2} alt="User Image" />
                            <img src={userProfile3} alt="User Image" />
                            <img src={userProfile4} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                14,556 Plant sold
                                <br />
                                <small>
                                    21 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">
                        See All
                            <BsArrowRightShort className="icon" />
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={userProfile1} alt="User Image" />
                            <img src={userProfile2} alt="User Image" />
                            <img src={userProfile3} alt="User Image" />
                            <img src={userProfile4} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                28,556 Plant sold
                                <br />
                                <small>
                                    26 Sellers <span className="date">31 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing;