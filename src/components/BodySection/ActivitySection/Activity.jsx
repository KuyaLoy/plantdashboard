import React from "react";
import './activity.scss';

import { BsArrowRightShort } from "react-icons/bs";

import userProfile1 from "../../../assets/user-profile1.jpg";
import userProfile2 from "../../../assets/user-profile2.jpg";
import userProfile3 from "../../../assets/user-profile3.jpg";
import userProfile4 from "../../../assets/user-profile4.jpg";
import userProfile5 from "../../../assets/user.jpg";

const Activity = () => {
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Recent Activity</h1>

                <button className="btn flex">
                    See All
                    <BsArrowRightShort className="icon" />
                </button>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={userProfile1} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Robin Tapiru</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        3 sec ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={userProfile2} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Jake Bagsit</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={userProfile3} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Claude</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        25 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={userProfile4} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Lemz Pogi</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        1 hour ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={userProfile5} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Samsung Iphone</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        4 hours ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity;