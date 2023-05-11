import React,{useEffect,useState} from "react";
import { FilteredList } from "./FilteredList";
export function FilterBrands(){
    let url = '#';
    const itemProduct = [
        { category: 'LAPTOPS', img: require('../assets/img/Apple_Mac.png'), name: 'Apple Mac Book Pro', price: '950.00',brand:'Apple'  },
        { category: 'TABLETS', img: require('../assets/img/IPad_Pro.png'), name: 'iPad Pro 11', price: '950.00',brand:'Apple' },
        { category: 'COMPUTERS', img: require('../assets/img/Samsung_Qled.png'), name: 'Samsung Qled 4K', price: '950.00',brand:'Samsung' },
        { category: 'PHONES', img: require('../assets/img/Samsung_galaxy_s10.png'), name: 'Samsung Galaxy s10', price: '950.00',brand:'Samsung' },
        { category: 'TABLETS', img: require('../assets/img/IpadPro11.png'), name: 'iPad Pro 11', price: '950.00',brand:'Apple' },
        { category: 'COMPUTERS', img: require('../assets/img/loudspeaker.png'), name: 'Samsung Qled 4K', price: '950.00',brand:'Samsung' },
        { category: 'TABLETS', img: require('../assets/img/Microsoft_surface.png'), name: 'Microsoft Surface Studio', price: '950.00',brand:'Apple' },
        { category: 'WATCHES', img: require('../assets/img/Samsung_watch.png'), name: 'Samsung Watch', price: '950.00',brand:'Samsung' },
        { category: 'COMPUTERS', img: require('../assets/img/ProDisplayXDR.png'), name: 'Pro Display XDR', price: '950.00',brand:'Apple' },
        { category: 'BLACK FRIDAY', img: require('../assets/img/Gamepad_Xbox_one.png'), name: 'Gamepad Xbox One X', price: '950.00',brand:'Apple' },
        { category: 'WATCHES', img: require('../assets/img/Smart_watch.png'), name: 'Smart Watch', price: '950.00',brand:'Apple' },
        { category: 'GADGET', img: require('../assets/img/GoogleNest.png'), name: 'Google Nest', price: '950.00',brand:'Apple' },
        { category: 'WATCHES', img: require('../assets/img/laptopSmart.png'), name: 'Smart Watch', price: '950.00',brand:'Apple' },
        { category: 'WATCHES', img: require('../assets/img/SmartWatchPink.png'), name: 'Apple Watch', price: '950.00',brand:'Apple' },
        { category: 'GADGET', img: require('../assets/img/ApplePhone.png'), name: 'Apple iPod', price: '950.00',brand:'Apple' }

    ];
    const itemsBrand = [
        { name: 'Apple', id: 'flexCheckCheckedApple' },
        { name: 'Alcatel', id: 'flexCheckCheckedAlcatel' },
        { name: 'BQ', id: 'flexCheckCheckedBQ' },
        { name: 'Honor', id: 'flexCheckCheckedHonor' },
        { name: 'Meizu', id: 'flexCheckCheckedMeizu' },
        { name: 'OnePlus', id: 'flexCheckCheckedOnePlus' },
        { name: 'Samsung', id: 'flexCheckCheckedSamsung' },
        { name: 'ZTE', id: 'flexCheckCheckedZTE' },


    ];
    const [filteredList, setFilteredList] = useState(itemProduct);
    const [selectedBrand, setSelectedBrand] = useState([]);

    // const filterByBrand = (filteredData) =>{
    //         if(!selectedBrand){
    //             return filteredData
    //         }

    //         const filteredProduct = filteredData.filter((product) => product.category === selectedBrand);
    //         return filteredProduct;
    // }

    // useEffect(() => {
    //     var filteredData = filterByBrand(itemProduct);
    //     setFilteredList(filteredData);
    // },[selectedBrand]);

    // const handleBrandChange = (event) => {
    //     setSelectedBrand(event.target.value);
    // };

    //C2:
    const handleBrandChange = (name) =>{

        //xử lý input
        let newSelected = [];
        if(selectedBrand.some((i) => i === name)){
            newSelected = selectedBrand.filter((i) => i !== name);
        }
        else newSelected = [...selectedBrand, name];
        setSelectedBrand(newSelected)

        //xử lý dữ liệu
        if(newSelected.length){
            //lọc xem các sản phẩm trong itemProduct có category trùng khớp với category ở trong newSelected
            setFilteredList(itemProduct.filter((product) => newSelected.includes(product.brand)))
        }
        else setFilteredList(itemProduct)
    }

    return(
    <>
        <div className="product-main-content row">

            <>
                <FilteredList filteredList={filteredList}/>
            </>

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
                                        <div className="form-check col-xl-6">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                onChange={() => handleBrandChange(item.name)}
                                                value={selectedBrand.includes(item.name)}
                                                id={item.id}
                                            />

                                            <label className={`form-check-label ${item.className}`} htmlFor={item.id} >
                                                {item.name}
                                            </label>

                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}



