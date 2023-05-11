import React,{useEffect, useState} from "react";
import Header from "../components/Header";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";

export const itemProduct = [
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


export default function HomePage(){
    const [filteredList, setFilteredList] = useState(itemProduct);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);

    const[search, setSearch] = useState("")
    const handleSearch = (event) =>{
        const text = event.target.value
        setSearch(text)
    }

    const handleChangeData = (brands, memories, searchText) =>{
        console.log(itemProduct.filter(item =>{
            return(
                (searchText && item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) &&
                (memories.length && memories.includes(item.memory)) &&
                (brands.length && brands.includes(item.brand))
            )
        }));
        setFilteredList(
            itemProduct.filter(item =>{
                return(
                    (searchText ? item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 : true) &&
                    (memories.length ? memories.includes(item.memory) : true) &&
                    (brands.length ? brands.includes(item.brand) : true)
                )
            })
        )
    }

    useEffect(() =>{
        handleChangeData(selectedBrand, selectedMemory, search);
    }, [selectedBrand, selectedMemory, search])

    return(
        <>
            <Header search={search} onChange={handleSearch}/>
            <PageContent
                filteredList={filteredList}
                setFilteredList={setFilteredList}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                selectedMemory={selectedMemory}
                setSelectedMemory={setSelectedMemory}
            />
            <Footer/>
        </>


    )
}