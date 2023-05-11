import React,{useState} from "react";
import { FilteredList } from "./FilteredList";


export function Search(){
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
    const [filteredList,setFilteredList] =  useState(itemProduct)

    const filterBySearch = (event) => {

        const query = event.target.value;

        var updatedList = [...itemProduct];

        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(updatedList);
    }

    return(

        <>
            <div className="App">
                <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" onChange={filterBySearch} />
                </div>
                <div id="item-list">
                    <FilteredList filteredList={filteredList}/>
                </div>
            </div>
        </>
    )
}