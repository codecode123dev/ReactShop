import React, { useState } from "react";
import Image from "../assets/index";
import { Icons } from "../assets/icons";
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/css/Header.css';
import { FilteredList } from "./FilteredList";



function Test() {
    const url="#";
    const items = [
        { id: 1, name: 'Today’s Deals', dropdownContent: ['Action', 'Another action', 'Something else here'] },
        { id: 2, name: 'Best’s Sellers', dropdownContent: ['Action', 'Another action', 'Something else here']  }
    ];

    return (
        <div className="dropdown ">
            {items.map((item, index) => {
                return (
                    <div  key={index} className="dropdown content-item-first">
                        <div   class="content-dropdown " data-toggle="dropdown"  aria-haspopup="true">
                            <p>{item.name}</p>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>

                        <div key={index} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {item.dropdownContent.map((content, index) => {
                            return (
                                <a key={index} href={url} className="dropdown-item">{content}</a>
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
    const itemProduct = [
        { category: 'LAPTOPS', img: require('../assets/img/Apple_Mac.png'), name: 'Apple Mac Book Pro', price: '950.00',brand:'Apple', memory:'16 Gb'  },
        { category: 'TABLETS', img: require('../assets/img/IPad_Pro.png'), name: 'iPad Pro 11', price: '950.00',brand:'Apple', memory:'256 Gb'  },
        { category: 'COMPUTERS', img: require('../assets/img/Samsung_Qled.png'), name: 'Samsung Qled 4K', price: '950.00',brand:'Samsung', memory:'8Gb' },
        { category: 'PHONES', img: require('../assets/img/Samsung_galaxy_s10.png'), name: 'Samsung Galaxy s10', price: '950.00',brand:'Samsung', memory:'64 Gb' },
        { category: 'TABLETS', img: require('../assets/img/IpadPro11.png'), name: 'iPad Pro 11', price: '950.00',brand:'Apple', memory:'32 Gb' },
        { category: 'COMPUTERS', img: require('../assets/img/loudspeaker.png'), name: 'Samsung Qled 4K', price: '950.00',brand:'Samsung', memory:'8Gb' },
        { category: 'TABLETS', img: require('../assets/img/Microsoft_surface.png'), name: 'Microsoft Surface Studio', price: '950.00',brand:'Apple', memory:'128 Gb' },
        { category: 'WATCHES', img: require('../assets/img/Samsung_watch.png'), name: 'Samsung Watch', price: '950.00',brand:'Samsung', memory:'8Gb' },
        { category: 'COMPUTERS', img: require('../assets/img/ProDisplayXDR.png'), name: 'Pro Display XDR', price: '950.00',brand:'Apple', memory:'64 Gb' },
        { category: 'BLACK FRIDAY', img: require('../assets/img/Gamepad_Xbox_one.png'), name: 'Gamepad Xbox One X', price: '950.00',brand:'Apple', memory:'32 Gb' },
        { category: 'WATCHES', img: require('../assets/img/Smart_watch.png'), name: 'Smart Watch', price: '950.00',brand:'Apple' , memory:'32 Gb'},
        { category: 'GADGET', img: require('../assets/img/GoogleNest.png'), name: 'Google Nest', price: '950.00',brand:'Apple' , memory:'16 Gb'},
        { category: 'WATCHES', img: require('../assets/img/laptopSmart.png'), name: 'Smart Watch', price: '950.00',brand:'Apple' , memory:'32 Gb'},
        { category: 'WATCHES', img: require('../assets/img/SmartWatchPink.png'), name: 'Apple Watch', price: '950.00',brand:'Apple', memory:'128 Gb' },
        { category: 'GADGET', img: require('../assets/img/ApplePhone.png'), name: 'Apple iPod', price: '950.00',brand:'Apple', memory:'128 Gb' }
    ];

    const [filterList, setFilterList] = useState(itemProduct);


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
                            <input className="search-heading " placeholder="Search Goods ..." value={props.search} onChange={props.onChange}></input>
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