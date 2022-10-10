import React from "react";
import './sidebar.scss';

import logo from '../../assets/logo.png';
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'
import { MdOutlineExplore } from 'react-icons/md'
import { BsTrophy } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdPermContactCalendar } from "react-icons/md";

import { BsCreditCard2Front } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="ImageName" />
                <h2>Planti.</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">QUICK MENU</h3>
                <ul className="menuList grid">
                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <MdDeliveryDining className="icon" />
                            <span className="smallText">
                                My Orders
                            </span>
                        </a>
                    </li>

                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <MdOutlineExplore className="icon" />
                            <span className="smallText">
                                Explore
                            </span>
                        </a>
                    </li>

                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <BsTrophy className="icon" />
                            <span className="smallText">
                                Products
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">SETTINGS</h3>
                <ul className="menuList grid">
                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <AiOutlinePieChart className="icon" />
                            <span className="smallText">
                                Charts
                            </span>
                        </a>
                    </li>

                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <BiTrendingUp className="icon" />
                            <span className="smallText">
                                Trends
                            </span>
                        </a>
                    </li>

                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <MdPermContactCalendar className="icon" />
                            <span className="smallText">
                                Contact
                            </span>
                        </a>
                    </li>

                    <li className="menuLink flex">
                        <a href="#" className="menuLink flex">
                            <BsCreditCard2Front className="icon" />
                            <span className="smallText">
                                Billing
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;