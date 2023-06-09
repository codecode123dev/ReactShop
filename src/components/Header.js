import React, { useState } from "react";
// import Image from "../assets/index";
import { Icons } from "../assets/icons";
// import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/css/Header.css';
import { Link } from "react-router-dom";
import { AuthButton } from "./Auth/pages";
// import { FilteredList } from "./FilteredList";
import Account from "./Account";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';



function ItemsContentHeader() {
    const url="#";
    const items = [
        { id: 1, name: 'Today’s Deals', dropdownContent: ['Test'] },
        { id: 2, name: 'Best’s Sellers', dropdownContent: ['Action', 'Another action', 'Something else here']  }
    ];

    return (
        <div className="dropdown ">
            {items.map((item, index) => {
                return (
                    <div  key={index} className="dropdown content-item-first">
                        <div   className="content-dropdown " data-toggle="dropdown"  aria-haspopup="true">
                            <p>{item.name}</p>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>

                        <div key={index} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {item.dropdownContent.map((content, index) => {
                            return (
                                <Link key={index} className="dropdown-item">{content}</Link>
                                );
                            })}
                        </div>

                    </div>
                );
            })}
        </div>
    );
}


export default function Header(props) {
    let url = '#';

    const navigate = useNavigate();

    const handleChangeRouter = (e) =>{
        e.preventDefault();
        navigate('/account')
    }

    const goToHome = () =>{
        navigate('/')
    }
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="nav-brand">
                        <i className="fa fa-bars header-bars-icons" aria-hidden="true"></i>
                        <Link to='/' >
                            <img className="img-constructor" src={Icons.constructor} alt="constructor" />
                        </Link>
                    </div>
                    <div className="wrap-nav-content" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                                <ItemsContentHeader/>
                            <div>
                                <Link 
                                to='/protected'
                                className="content-dropdown-third">
                                    Customer Service
                                </Link>
                            </div>
                            <div>
                                <a className="content-dropdown-four " href={url}>New Releases</a>
                            </div>
                        </div>
                    </div>
                    <div className="icons-header-show">
                        <div className="search">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input className="search-heading " placeholder="Search Goods ..." value={props.search} onChange={props.onChange}></input>
                        </div>
                        <div className="right-icons ">
                            <AuthButton/>

                            {/* <div className="account">
                                <a href={url} className="account-item">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <Link to='/account' className="account-content" >Account</Link>
                                </a>
                            </div> */}
                            {/* <div className="cart-icons">
                                <a href={url} className="cart-item">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <a className="cart-content" href={url}>Bag</a>
                                </a>
                            </div> */}
                            <div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}