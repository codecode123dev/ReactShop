import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";
import queryString from "query-string";
import { OptionMainContent } from "../components/OptionMainContent";
import { BrowserRouter as Router, Route, Link, NavLink, useRoutes, useNavigate, Routes } from "react-router-dom";
import Account from "../components/Account";

export const itemProduct = [
    { category: 'LAPTOPS', img: require('../assets/img/Apple_Mac.png'), name: 'Apple Mac Book Pro', price: '950.00', brand: 'Apple', memory: '16 Gb', technique: 'iPad Pro', feature: 'Calorie monitoring', date: "01-12-2013" },
    { category: 'TABLETS', img: require('../assets/img/IPad_Pro.png'), name: 'iPad Pro 11', price: '90.00', brand: 'Apple', memory: '256 Gb', technique: 'iPad Pro', feature: 'Sleep Monitoring', date: "11-12-2013" },
    { category: 'COMPUTERS', img: require('../assets/img/Samsung_Qled.png'), name: 'Samsung Qled 4K', price: '50.00', brand: 'Samsung', memory: '8Gb', technique: 'iPad mini', feature: 'Physical activity', date: "09-12-2013" },
    { category: 'PHONES', img: require('../assets/img/Samsung_galaxy_s10.png'), name: 'Samsung Galaxy s10', price: '150.00', brand: 'Samsung', memory: '64 Gb', technique: 'Galaxy Tab S', feature: 'Pulse Measurement', date: "08-12-2013" },
    { category: 'TABLETS', img: require('../assets/img/IpadPro11.png'), name: 'iPad Pro 11', price: '60.00', brand: 'Apple', memory: '32 Gb', technique: 'Galaxy Tab A', feature: 'Stopwatch', date: "14-12-2013" },
    { category: 'COMPUTERS', img: require('../assets/img/loudspeaker.png'), name: 'Samsung Qled 4K', price: '250.00', brand: 'Samsung', memory: '8Gb', technique: 'Muze', feature: 'Timer', date: "01-04-2013" },
    { category: 'TABLETS', img: require('../assets/img/Microsoft_surface.png'), name: 'Microsoft Surface Studio', price: '850.00', brand: 'Apple', memory: '128 Gb', technique: 'Media Pad', feature: 'Physical activity', date: "18-07-2013" },
    { category: 'WATCHES', img: require('../assets/img/Samsung_watch.png'), name: 'Samsung Watch', price: '350.00', brand: 'Samsung', memory: '8Gb', technique: 'iPad mini', feature: 'Pulse Measurement', date: "11-10-2013" },
    { category: 'COMPUTERS', img: require('../assets/img/ProDisplayXDR.png'), name: 'Pro Display XDR', price: '910.00', brand: 'Apple', memory: '64 Gb', technique: 'iPad Pro', feature: 'Sleep Monitoring', date: "18-12-2013" },
    { category: 'BLACK FRIDAY', img: require('../assets/img/Gamepad_Xbox_one.png'), name: 'Gamepad Xbox One X', price: '750.00', brand: 'Apple', memory: '32 Gb', technique: 'Muze', feature: 'Physical activity', date: "20-11-2013" },
    { category: 'WATCHES', img: require('../assets/img/Smart_watch.png'), name: 'Smart Watch', price: '450.00', brand: 'Apple', memory: '32 Gb', technique: 'Media Pad', feature: 'Calorie monitoring', date: "26-12-2013" },
    { category: 'GADGET', img: require('../assets/img/GoogleNest.png'), name: 'Google Nest', price: '30.00', brand: 'Apple', memory: '16 Gb', technique: 'iPad Pro', feature: 'Sleep Monitoring', date: "27-12-2013" },
    { category: 'WATCHES', img: require('../assets/img/laptopSmart.png'), name: 'Smart Watch', price: '10.00', brand: 'Apple', memory: '32 Gb', technique: 'Media Pad', feature: 'Timer', date: "29-12-2013" },
    { category: 'WATCHES', img: require('../assets/img/SmartWatchPink.png'), name: 'Apple Watch', price: '30.00', brand: 'Apple', memory: '128 Gb', technique: 'Galaxy Tab S', feature: 'Calorie monitoring', date: "16-12-2013" },
    { category: 'GADGET', img: require('../assets/img/ApplePhone.png'), name: 'Apple iPod', price: '70.00', brand: 'Apple', memory: '128 Gb', technique: 'Galaxy Tab A', feature: 'Physical activity', date: "14-08-2013" }


];

export const OPTION_SORT = {
    PRICE: 'price',
    NAME: 'name',
    POPULARITY: 'popularity',
    NEW: 'new'
}

export const OPTION_SORT_ORDER = {
    ASCENDING: 'ascending',
    DESCENDING: 'descending'
}


export default function HomePage() {
    const [filteredList, setFilteredList] = useState(itemProduct);
    const [selectedBrand, setSelectedBrand] = useState([]);
    // const useStateMemory =  useState([]);
    // const selectedMemory = useStateMemory[0]
    // const setSelectedMemory = useStateMemory[0]
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [selectedTechnique, setSelectedTechnique] = useState([])
    const [selectedFeature, setSelectedFeature] = useState([])

    // const [selectedOption, setSelectedOption] = useState('')
    // const [selectedTechnique,setSelectedTechnique] = useState([])

    // const [sortState, setSortState] = useState(itemProduct);


    const [search, setSearch] = useState("");

    //sort by desc
    const [selectedSort, setSelectedSort] = useState()

    const navigate = useNavigate()

    const sortPrice = (e) => {

        // console.log(e.target.value)
        const options = {
            "ascending": [...filteredList].sort((a, b) => (a.price < b.price ? -1 : 1)),
            "descending": [...filteredList].sort((a, b) => (a.price < b.price ? 1 : -1))
        }
        sortPrice(options[e.target.value]);
    }

    //pagination
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true)
    //         setPosts(itemProduct)
    //         setLoading(false)
    //     }

    //     fetchPosts()
    // },[])


    // const indexOfLastPost = 



    // const handlePrice = () => {
    //     setSelectedSort(OPTION_SORT.PRICE)
    //     // console.log(setSelectedSort)S
    // }

    // const handlePrice = () => {
    //     return(
    //         alert("helo")
    //     )

    // }

    // Test

    // const handleFeatureChange = (name) => {
    //     let newSelected = [];
    //     if (selectedFeature.some((i) => i === name)) {
    //         newSelected = selectedFeature.filter((i) => i !== name)
    //     }
    //     else newSelected = [...selectedFeature, name];
    //     setSelectedFeature(newSelected)

    //     changeRoute("feature", newSelected)
    // }

    // end test




    const changeRoute = (nameCategory, newSelected) => {
        const url = new URL(window.location);
        url.searchParams.set(nameCategory, newSelected.toString());
        window.history.pushState({}, "", url);
    }

    const handleSearch = (event) => {
        const text = event.target.value
        setSearch(text)
        changeRoute("search", text)

    }

    const handleChangeData = (brands, memories, techniques, features, searchText) => {

        setFilteredList(
            itemProduct.filter(item => {
                return (
                    (searchText ? item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 : true) &&
                    (memories.length ? memories.includes(item.memory) : true) &&
                    (brands.length ? brands.includes(item.brand) : true) &&
                    (techniques.length ? techniques.includes(item.technique) : true) &&
                    (features.length ? features.includes(item.feature) : true)
                )
            })
        )
    }


    //mỗi lần [selectedBrand, selectedMemory, search] thay đổi thì gọi  hàm  handleChangeData(selectedBrand, selectedMemory, search);

    useEffect(() => {
        // console.log(selectedBrand);
        handleChangeData(selectedBrand, selectedMemory, selectedTechnique, selectedFeature, search);
    }, [selectedBrand, selectedMemory, selectedTechnique, selectedFeature, search])

    // const searchFilter = () => {
    //     return(
    //         searchText.toLowerCase()
    //     )
    // }



    // xử lý khi gửi link cho người khác mà không bị mất dữ liệu
    useEffect(() => {
        const queryStringResult = queryString.parse(window.location.search)
        //dùng ? khi không chắc chắn , ví dụ brand chưa chưa chắc chắn có phải string hay không mà có thể là mảng rỗng , array rổng
        const brands = queryStringResult.brand?.split(',') || [];
        const memories = queryStringResult.memory?.split(',') || []
        const techniques = queryStringResult.technique?.split(',') || []
        const features = queryStringResult.feature?.split(',') || []
        const searchText = queryStringResult.search || ""
        if (brands.length) {
            setSelectedBrand(brands)
        }
        if (memories.length) {
            setSelectedMemory(memories)
        }
        if (techniques.length) {
            setSelectedTechnique(techniques)
        }
        if (features.length) {
            setSelectedFeature(features)
        }
        if (searchText) {
            setSearch(searchText)
        }
    }, [])

    //Sort Price

    const handleSortPriceAsc = () => {
        // let newSelected = filteredList.slice().sort(function (a, b) { return a.price - b.price })
        let newSelected = [...filteredList].sort(function (a, b) { return a.price - b.price })

        setFilteredList(newSelected)
    }
    const handleSortPriceDesc = () => {
        // let newSelected = filteredList.slice().sort(function(a,b) {return b.price - a.price})
        let newSelected = [...filteredList].sort(function (a, b) { return b.price - a.price })

        setFilteredList(newSelected)
    }

    //Sort Name

    const handleSortNameAsc = () => {
        // let newSelected = filteredList.sort(function(a,b) { return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1})
        //C1 let newSelected = filteredList.slice().sort(function(a,b) { return a.name.localeCompare(b.name)})
        let newSelected = [...filteredList].sort(function (a, b) { return a.name.localeCompare(b.name) })

        setFilteredList(newSelected)
    }

    const handleSortNameDesc = () => {
        // C1 let newSelected = filteredList.slice().sort(function(a,b) {return b.name.localeCompare(a.name) })
        let newSelected = [...filteredList].sort(function (a, b) { return b.name.localeCompare(a.name) })

        setFilteredList(newSelected)
    }
    //sort New
    const handleSortNewAsc = () => {
        //C1 let newSelected = filteredList.slice().sort((a, b) => new Date(...a.date.split('-').reverse()) - new Date(...b.date.split('-').reverse()));
        let newSelected = [...filteredList].sort((a, b) => new Date(...a.date.split('-').reverse()) - new Date(...b.date.split('-').reverse()));

        setFilteredList(newSelected)
    }

    const handleSortNewDesc = () => {
        //C1 let newSelected = filteredList.slice().sort((a, b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()));
        let newSelected = [...filteredList].sort((a, b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse()));

        setFilteredList(newSelected)
    }


    // const handleChangeSort = (event) =>{
    //     const data = event.target.value
    //     // console.log(data)
    //     handleSort(selectedSort, data)
    //     // console.log('helo')
    // }

    // const handleOrderSort = () =>{
    //     let newSelected = filteredList.sort((a, b) => {return b.name.localeCompare(a.name)})
    //     setFilteredList(newSelected)
    // }
    // console.log(selectedSort);

    //Sort

    const handleSort = (value, type) => {
        if (value === selectedSort) {
            setSelectedSort()
            setFilteredList(itemProduct)
            // navigate('account')
        }
        else {
            setSelectedSort(value)
            switch (value) {
                case OPTION_SORT.NEW:
                    // handleSortNewAsc()
                    // sortPrice()
                    handleSortNewDesc()
                    break;
                case OPTION_SORT.NAME:
                    // sortPrice()
                    handleSortNameDesc()
                    // handleSortNameAsc()
                    // handleSortNameDesc()
                    break;
                case OPTION_SORT.POPULARITY:

                    break;
                case OPTION_SORT.PRICE:
                    // sortPrice()
                    handleSortPriceDesc()
                    // handleSortPriceAsc()
                    // handleSortPriceDesc()
                    break;
                default:

                    break;
            }
        }
    }

    return (
        <>

            <Header search={search} onChange={handleSearch} />
            <Routes>
                <Route path='/' element=
                    {<PageContent
                        filteredList={filteredList}
                        setFilteredList={setFilteredList}
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                        selectedMemory={selectedMemory}
                        setSelectedMemory={setSelectedMemory}
                        selectedTechnique={selectedTechnique}
                        setSelectedTechnique={setSelectedTechnique}
                        selectedFeature={selectedFeature}
                        setSelectedFeature={setSelectedFeature}

                        onSort={handleSort}
                        selectedSort={selectedSort}


                        sortPrice={sortPrice}
                    // setSortState={setSortState}
                    />}></Route>
                <Route path='/account/*' element={< Account />}></Route>
            </Routes>
            <Footer />
        </>
    )
}