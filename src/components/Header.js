import React, { useState } from "react";
import Image from "../assets/index";
import { Icons } from "../assets/icons";
export function Header() {


    let url = '#';
    const href = [
        { url: '#', title: 'Action' },
        { url: '#', title: 'Another action' },
        { url: '#', title: 'Something else here' },
    ];

    const detailsItem = href.map((item,index) => {
        {}

    });
    




    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="nav-brand">
                        <i class="fa fa-bars header-bars-icons" aria-hidden="true"></i>
                        <a href={url}>
                            <img class="img-constructor" src={Image.apple_mac} alt="constructor" />
                        </a>
                    </div>
                    <div className="wrap-nav-content" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div className="dropdown content-item-first">
                                <div className="content-dropdown " data-toggle="dropdown">
                                    <p>Today’s Deals</p>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">


                                    <a className="dropdown-item" href={url}>Action</a>
                                    <a className="dropdown-item" href={url}>Another action</a>
                                    <a className="dropdown-item" href={url}>Something else here</a>
                                </div>
                            </div>
                            <div className="dropdown content-item-second">
                                <div className="content-dropdown" data-toggle="dropdown" aria-haspopup="true">
                                    <p>Best's Sellers</p>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href={url}>Action</a>
                                    <a className="dropdown-item" href={url}>Another action</a>
                                    <a className="dropdown-item" href={url}>Something else here</a>
                                </div>
                            </div>

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