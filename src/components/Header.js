import React, { useState } from "react";
import Image from "../assets/index";
import { Icons } from "../assets/icons";
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/css/Header.css';



function Test() {
    const items = [
        { id: 1, name: 'Today’s Deals', dropdownContent: ['Action', 'Another action', 'Something else here'] },
        { id: 2, name: 'Best’s Sellers', dropdownContent: ['Action', 'Another action', 'Something else here']  }
    ];

    return (
        <div className="dropdown ">
            {items.map((item, index) => {
                return (
                    <Dropdown  key={index}>
                        <Dropdown.Toggle   className="content-dropdown content-item-first" data-toggle="dropdown"  aria-haspopup="true">
                            <p>{item.name}</p>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu key={index} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {item.dropdownContent.map((content, index) => {
                            return (
                                <Dropdown.Item key={index} className="dropdown-item">{content}</Dropdown.Item>
                                );
                            })}
                        </Dropdown.Menu>

                    </Dropdown>
                );
            })}
        </div>
    );
}


export function Header() {
    let url = '#';

    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="nav-brand">
                        <i class="fa fa-bars header-bars-icons" aria-hidden="true"></i>
                        <a href={url}>
                            <img class="img-constructor" src={Icons.constructor} alt="constructor" />
                        </a>
                    </div>
                    <div className="wrap-nav-content" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                                <Test/>
                            <div>
                                <a className="content-dropdown-third" href={url}>Customer Service</a>
                            </div>
                            <div>
                                <a className="content-dropdown-four " href={url}>New Releases</a>
                            </div>
                        </div>
                    </div>


                    <div className="icons-header-show">
                        <div className="search">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input className="search-heading " placeholder="Search Goods ..."></input>
                        </div>

                        <div className="right-icons ">
                            <div className="account">
                                <a href={url} className="account-item">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <a className="account-content" href={url}>Account</a>
                                </a>
                            </div>
                            <div className="cart-icons">
                                <a href={url} className="cart-item">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <a className="cart-content" href={url}>Bag</a>
                                </a>
                            </div>
                        </div>

                    </div>

                </nav>



            </header>
        </>
    )
}