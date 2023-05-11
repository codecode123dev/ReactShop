import React,{useEffect, useState} from "react";
import Header from "../components/Header";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";
import queryString from "query-string";


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
    // const useStateMemory =  useState([]);
    // const selectedMemory = useStateMemory[0]
    // const setSelectedMemory = useStateMemory[0]
    const [selectedMemory, setSelectedMemory] = useState([]);

    const[search, setSearch] = useState("");

    const changeRoute = (nameCategory,newSelected) =>{
        const url = new URL(window.location);
        url.searchParams.set(nameCategory, newSelected.toString());
        window.history.pushState({}, "", url);
    }

    const handleSearch = (event) =>{
        const text = event.target.value
        setSearch(text)
        changeRoute("search",text)

    }

    const handleChangeData = (brands, memories, searchText) =>{

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


    //mỗi lần [selectedBrand, selectedMemory, search] thay đổi thì gọi  hàm  handleChangeData(selectedBrand, selectedMemory, search);

    useEffect(() =>{
        console.log(selectedBrand);
        handleChangeData(selectedBrand, selectedMemory, search);
    }, [selectedBrand, selectedMemory, search])

    // const searchFilter = () => {
    //     return(
    //         searchText.toLowerCase()
    //     )
    // }

    useEffect(() => {
        const queryStringResult = queryString.parse(window.location.search)
        const brands = queryStringResult.brand?.split(',') || [];
        //dùng ? khi không chắc chắn , ví dụ brand chưa chưa chắc chắn có phải string hay không mà có thể là mảng rỗng , array rổng
        const memories = queryStringResult.memory?.split(',') || []
        const searchText = queryStringResult.search || ""
        if(brands.length){
            setSelectedBrand(brands)
        }
        if(memories.length){
            setSelectedMemory(memories)
        }
        if(searchText){
            setSearch(searchText)
        }
    },[])



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