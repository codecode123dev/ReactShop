import React from "react";
import { Icons } from "../assets/icons";
import '../assets/css/PageContent.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Image } from "react-bootstrap";
import MultiRangeSlider from "./MultiRangeSlider";
import { ContentCategory } from "./ContentCategory";
import { ContentCategoryFandT } from "./ContentCategoryFandT";
import { ContentIcons } from "./ContentIcons";
import { ContentAllIcons } from "./ContentAllIcons";
import { ContentProducts } from "./ContentProducts";


function ASide() {
    let url = '#';
    const icons = [
        { name: 'Speakers', img: `${Icons.speakers}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-speakers' },
        { name: 'Equipment', img: `${Icons.equipment}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-equipment' },
        { name: 'Controls', img: `${Icons.controls}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-controls' },
        { name: 'Accessories', img: `${Icons.accessories}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-accessories-1' },
        { name: 'Audio', img: `${Icons.audio}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-audio' },
        { name: 'Appliances', img: `${Icons.appliances}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-appliances' },
        { name: 'Television Set', img: `${Icons.television_set}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-television' },
        { name: 'Digital Watch', img: `${Icons.digital_watch}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-digital-watch' },
        { name: 'Video Games', img: `${Icons.video_games}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-video-game' },
        { name: 'Tablets', img: `${Icons.tablets}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-tablets' },
        { name: 'Accessories', img: `${Icons.accessories2}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-accessories-2' },
        { name: 'Computers', img: `${Icons.computer}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-computer' },
        { name: 'Laptops', img: `${Icons.laptops}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-laptops' },
        { name: 'Smartphones', img: `${Icons.smartPhone}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-smartphones' }
    ];

    const itemProduct = [
        { category: 'LAPTOPS', img: require('../assets/img/Apple_Mac.png'), name: 'Apple Mac Book Pro', price: '950.00' },
        { category: 'TABLETS', img: require('../assets/img/IPad_Pro.png'), name: 'iPad Pro 11', price: '950.00' },
        { category: 'COMPUTERS', img: require('../assets/img/Samsung_Qled.png'), name: 'Samsung Qled 4K', price: '950.00' },
        { category: 'PHONES', img: require('../assets/img/Samsung_galaxy_s10.png'), name: 'Samsung Galaxy s10', price: '950.00' },
        { category: 'TABLETS', img: require('../assets/img/IpadPro11.png'), name: 'iPad Pro 11', price: '950.00' },
        { category: 'COMPUTERS', img: require('../assets/img/loudspeaker.png'), name: 'Samsung Qled 4K', price: '950.00' },
        { category: 'TABLETS', img: require('../assets/img/Microsoft_surface.png'), name: 'Microsoft Surface Studio', price: '950.00' },
        { category: 'WATCHES', img: require('../assets/img/Samsung_watch.png'), name: 'Samsung Watch', price: '950.00' },
        { category: 'COMPUTERS', img: require('../assets/img/ProDisplayXDR.png'), name: 'Pro Display XDR', price: '950.00' },
        { category: 'BLACK FRIDAY', img: require('../assets/img/Gamepad_Xbox_one.png'), name: 'Gamepad Xbox One X', price: '950.00' },
        { category: 'WATCHES', img: require('../assets/img/Smart_watch.png'), name: 'Smart Watch', price: '950.00' },
        { category: 'GADGET', img: require('../assets/img/GoogleNest.png'), name: 'Google Nest', price: '950.00' },
        { category: 'WATCHES', img: require('../assets/img/laptopSmart.png'), name: 'Smart Watch', price: '950.00' },
        { category: 'WATCHES', img: require('../assets/img/SmartWatchPink.png'), name: 'Apple Watch', price: '950.00' },
        { category: 'GADGET', img: require('../assets/img/ApplePhone.png'), name: 'Apple iPod', price: '950.00' }

    ];

    const itemsBrand = [
        { name: 'Apple', id: 'flexCheckCheckedApple' },
        { name: 'Alcatel', id: 'flexCheckCheckedAlcatel' },
        { name: 'BQ', id: 'flexCheckCheckedBQ' },
        { name: 'Honor', id: 'flexCheckCheckedHonor' },
        { name: 'Meizu', id: 'flexCheckCheckedMeizu' },
        { name: 'OnePlus', id: 'flexCheckCheckedOnePlus' },
        { name: 'Samsung', id: 'flexCheckCheckedSamsung' },
        { name: 'ZTE', id: 'flexCheckCheckedZTE' }

    ];



    const itemsMemory = [
        { name: '8Gb',  id: 'flexCheckChecked8' },
        { name: '16 Gb', id: 'flexCheckChecked16' },
        { name: '32 Gb', id: 'flexCheckChecked32' },
        { name: '64 Gb', id: 'flexCheckChecked64' },
        { name: '128 Gb', id: 'flexCheckChecked128' },
        { name: '256 Gb', id: 'flexCheckChecked256' }
    ];


    const itemColorsRowOne = [
        { name: 'Purple', className: ' style-color-purple' },
        { name: 'Black', className: ' style-color-black' },
        { name: 'Red', className: ' style-color-red' },
        { name: 'Orange', className: ' style-color-orange' },
        { name: 'Blue', className: ' style-color-blue-blood' },
        { name: 'White', className: ' style-color-white' },
        { name: 'Brown', className: ' style-color-brown' },
        { name: 'Green', className: ' style-color-green' },
        { name: 'Yellow', className: ' style-color-yellow' },
        { name: 'Gray', className: 'style-color-gray' },
        { name: 'Pink', className: 'style-color-pink' },
        { name: 'Blue', className: 'style-color-blue-light' }

    ];

    const itemColorsRowTwo = [
        { name: 'Blue', className: ' style-color-blue-blood' },
        { name: 'White', className: ' style-color-white' },
        { name: 'Brown', className: ' style-color-brown' },
        { name: 'Green', className: ' style-color-green' },
    ];

    const itemColorsRowThree = [
        { name: 'Yellow', className: ' style-color-yellow' },
        { name: 'Gray', className: 'style-color-gray' },
        { name: 'Pink', className: 'style-color-pink' },
        { name: 'Blue', className: 'style-color-blue-light' },
    ];

    const checkboxTechnique = [
        { name: 'iPad Pro', number: 10, id: 'flexCheckDefaultIpad' },
        { name: 'Media Pad', number: 2, id: 'flexCheckDefaultMedia' },
        { name: 'iPad mini', number: 4, id: 'flexCheckDefaultIpadMini' },
        { name: 'Galaxy Tab S', number: 14, id: 'flexCheckDefaultGalaxyS' },
        { name: 'Galaxy Tab A', number: 12, id: 'flexCheckDefaultGalaxyA' },
        { name: 'Muze', number: 7, id: 'flexCheckDefaultMuze' },
        { name: 'iPad Pro', number: 10, id: '' },
        { name: 'iPad Pro', number: 10, id: '' },
        { name: 'iPad Pro', number: 10, id: '' },
        { name: 'iPad Pro', number: 10, id: '' }

    ];

    const checkboxFeatures = [
        { name: 'Calorie monitoring', id: 'flexCheckCalorie' },
        { name: 'Sleep Monitoring', id: 'flexCheckSleep' },
        { name: 'Physical activity', id: 'flexCheckPhysical' },
        { name: 'Pulse Measurement', id: 'flexCheckPulse' },
        { name: 'Stopwatch', id: 'flexCheckStopwatch' },
        { name: 'Timer', id: 'flexCheckTimer' },
        { name: 'Sleep Monitoring', id: '' },
        { name: 'Sleep Monitoring', id: '' },
        { name: 'Sleep Monitoring', id: '' },

    ]


    return (
        <div className="page-content row">
            <aside className="aside col-xl-3">
                <div className="aside-icons">
                    {icons.map((item, index) => {
                        return (
                            <>
                                <ContentAllIcons name={item.name} img={item.img}  dropdownContent={item.dropdownContent} className1={item.className1}/>
                            </>
                        );
                    })}
                </div>
                <div className="product-img">
                    <a href={url} className="product-img-watch">
                        <p className="title-product-img">The New Smart Watches</p>
                        <img className="img-the-new-watch" src={Icons.the_new_watch} alt="" />
                    </a>
                    <button className="btn-watch-product-img">View More</button>
                </div>
                <div className="product-img">
                    <a href={url}  className="product-img-tablet">
                        <img className="img-tablet-samsung" src={Icons.new_tablets} alt="" />
                        <p className="title-product-img title-product-img-tablet">New Tablets Samsung</p>
                    </a>
                </div>
            </aside>


            <main className="main col-xl-9">
                <div className="main-content">
                    <div className="head-main-content">
                        <div className="breadcrumb">
                            <div className="detail-breadcrumb">
                                <a className="main-breadcrumb" href={url}>Main</a>
                                <img className="icons-dot" src={`${Icons.dot}`} alt="" />
                                <a className="tablets-breadcrumb" href={url}>Tablets</a>
                            </div>
                            <div className="icons-breadcrumb">
                                <div className="icons-breadcrumb-compare">
                                    <a href={url} className="icons-breadcrumb-compare">
                                        <img className="img-compare" src={`${Icons.compare}`} alt="" />
                                        <p href={url} className="content-breadcrumb-compare">Compare</p>
                                    </a>
                                </div>
                                <div className="icons-breadcrumb-price">
                                    <a href={url} className="icons-breadcrumb-price">
                                        <img className="img-price-drop" src={`${Icons.price_drop}`} alt="" />
                                        <p href={url} className="content-breadcrumb-price-drop">Price Drop</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="option-main-content font-size-2rem">
                            <div className="title-main-content">Apple Pro Display XDR</div>
                            <div className="option font-size-2rem">
                                <div className="option-child">
                                    <div className="option-child-detail">
                                        <a href={url}>Sort By:</a>
                                    </div>
                                    <div className="option-child-detail popularity-item">
                                        <a href={url}>Popularity</a>
                                    </div>
                                    <div className="option-child-detail option-child-new">
                                        <a href={url} id="new">New</a>
                                        <i className="fa fa-chevron-down icons-after-new" aria-hidden="true"></i>
                                    </div>
                                    <div className="option-child-detail option-child-price">
                                        <a href={url}>Price</a>
                                    </div>
                                    <div className="option-child-detail option-child-rating">
                                        <a href={url}>Rating</a>
                                    </div>
                                </div>
                                <div className="icons-option">
                                    <div className="option-child-detail">
                                        <i className="fa fa-th" aria-hidden="true"></i>
                                    </div>
                                    <div className="option-child-detail ">
                                        <i className="fa fa-list" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="filters-items">
                                    <div className="filter-content">
                                        <p className="filters">Filters</p>
                                        <i className="fa fa-wifi icons-after-filter" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-main-content row">
                        <div className=" row col-xl-9 col-sm-9 col-12  product-items">
                            {itemProduct.map((item, index) => {
                                return (
                                    <>
                                        <ContentProducts name={item.name} img={item.img} category={item.category} price={item.price}/>
                                    </>
                                    
                                )
                            })}
                                <div className="row wrap-show-product">
                                    <button className="btn-show-product ">Show More</button>
                                </div>
                        </div>

                        <div className="option-product col-xl-3 col-sm-3 row">
                            <div className="option-product-detail-brand col-xl-12">
                                <div className="head-option-product-brand">
                                    <div>Brand</div>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>

                                <div className="detail-option-brand">
                                    <div className="checkbox-left-brand row ">
                                        {itemsBrand.map((item, index) => {
                                            return (
                                                <>
                                                    <ContentCategory name={item.name} id={item.id} for={item.id} />
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                            {/* <!-- Memory --> */}
                            <div className="option-product-detail-memory col-xl-12">
                                <div className="head-option-product-memory">
                                    <div>Memory</div>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div className="detail-option-memory ">
                                    <div className="checkbox-left-memory row  ">
                                        {itemsMemory.map((item, index) => {
                                            return (
                                                <>
                                                    <ContentCategory name={item.name} id={item.id} for={item.id} />
                                                </>

                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end memory --> */}
                            {/* <!-- Price --> */}
                            <div className="option-product-detail-price col-xl-12">
                                <div className="head-option-product-price">
                                    <div>Price</div>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div className="multiple-range-slider">
                                    <MultiRangeSlider
                                        min={0}
                                        max={3000}
                                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                                    />
                                </div>
                            </div>
                            {/* <!-- End Price --> */}
                            {/* <!-- Color --> */}
                            <div className="option-product-detail-color col-xl-12">
                                <div className="head-option-product-color">
                                    <div>Color</div>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div className="color-detail-all">
                                    <div className="row-color-one row">
                                        {itemColorsRowOne.map((item, index) => {
                                            return (

                                                <div className="color-items col-xl-4">
                                                    <span className={`style-color-one ${item.className}`}></span>
                                                    <p>{item.name}</p>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Color --> */}

                            {/* <!-- Technique Series --> */}
                            <div className="option-product-detail-technique col-xl-12">
                                <div className="head-option-product-technique">
                                    <div>Technique Series</div>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div className="checkbox-all-technique font-size-5rem">
                                    <div className="checkbox-technique">

                                        {checkboxTechnique.map((item, index) => {
                                            return (
                                                <>
                                                    <ContentCategoryFandT name={item.name} id={item.id} for={item.id} number={item.number}/>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/* /* End Technique Series  */}

                            {/* <!-- Features --> */}
                            <div className="option-product-detail-features col-xl-12">
                                <div className="head-option-product-features">
                                    <div>Features</div>
                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div className="checkbox-all-features font-size-5rem">
                                    <div className="checkbox-features">
                                        {checkboxFeatures.map((item, index) => {
                                            return (
                                                <>
                                                    <ContentCategoryFandT name={item.name} id={item.id} for={item.id} />
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end features --> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

}
export function PageContent() {
    return (
        <>

            <ASide />

        </>
    )
}
