// import React,{useState} from "react";
// import { FilteredList } from "./FilteredList";
// export function TestFilterBrandAndMemory(){
//     let url = '#';
//     const itemProduct = [
//         { category: 'LAPTOPS', img: require('../assets/img/Apple_Mac.png'), name: 'Apple Mac Book Pro', price: '950.00',brand:'Apple', memory:'16 Gb'  },
//         { category: 'TABLETS', img: require('../assets/img/IPad_Pro.png'), name: 'iPad Pro 11', price: '950.00',brand:'Apple', memory:'256 Gb'  },
//         { category: 'COMPUTERS', img: require('../assets/img/Samsung_Qled.png'), name: 'Samsung Qled 4K', price: '950.00',brand:'Samsung', memory:'8Gb' },
//         { category: 'PHONES', img: require('../assets/img/Samsung_galaxy_s10.png'), name: 'Samsung Galaxy s10', price: '950.00',brand:'Samsung', memory:'64 Gb' },
//         { category: 'TABLETS', img: require('../assets/img/IpadPro11.png'), name: 'iPad Pro 11', price: '950.00',brand:'Apple', memory:'32 Gb' },
//         { category: 'COMPUTERS', img: require('../assets/img/loudspeaker.png'), name: 'Samsung Qled 4K', price: '950.00',brand:'Samsung', memory:'8Gb' },
//         { category: 'TABLETS', img: require('../assets/img/Microsoft_surface.png'), name: 'Microsoft Surface Studio', price: '950.00',brand:'Apple', memory:'128 Gb' },
//         { category: 'WATCHES', img: require('../assets/img/Samsung_watch.png'), name: 'Samsung Watch', price: '950.00',brand:'Samsung', memory:'8Gb' },
//         { category: 'COMPUTERS', img: require('../assets/img/ProDisplayXDR.png'), name: 'Pro Display XDR', price: '950.00',brand:'Apple', memory:'64 Gb' },
//         { category: 'BLACK FRIDAY', img: require('../assets/img/Gamepad_Xbox_one.png'), name: 'Gamepad Xbox One X', price: '950.00',brand:'Apple', memory:'32 Gb' },
//         { category: 'WATCHES', img: require('../assets/img/Smart_watch.png'), name: 'Smart Watch', price: '950.00',brand:'Apple' , memory:'32 Gb'},
//         { category: 'GADGET', img: require('../assets/img/GoogleNest.png'), name: 'Google Nest', price: '950.00',brand:'Apple' , memory:'16 Gb'},
//         { category: 'WATCHES', img: require('../assets/img/laptopSmart.png'), name: 'Smart Watch', price: '950.00',brand:'Apple' , memory:'32 Gb'},
//         { category: 'WATCHES', img: require('../assets/img/SmartWatchPink.png'), name: 'Apple Watch', price: '950.00',brand:'Apple', memory:'128 Gb' },
//         { category: 'GADGET', img: require('../assets/img/ApplePhone.png'), name: 'Apple iPod', price: '950.00',brand:'Apple', memory:'128 Gb' }
//     ];

//     const itemsBrand = [
//         { name: 'Apple', id: 'flexCheckCheckedApple' },
//         { name: 'Alcatel', id: 'flexCheckCheckedAlcatel' },
//         { name: 'BQ', id: 'flexCheckCheckedBQ' },
//         { name: 'Honor', id: 'flexCheckCheckedHonor' },
//         { name: 'Meizu', id: 'flexCheckCheckedMeizu' },
//         { name: 'OnePlus', id: 'flexCheckCheckedOnePlus' },
//         { name: 'Samsung', id: 'flexCheckCheckedSamsung' },
//         { name: 'ZTE', id: 'flexCheckCheckedZTE' },
//     ];

//     const itemsMemory = [
//         { name: '8Gb', id: 'flexCheckChecked8' },
//         { name: '16 Gb', id: 'flexCheckChecked16' },
//         { name: '32 Gb', id: 'flexCheckChecked32' },
//         { name: '64 Gb', id: 'flexCheckChecked64' },
//         { name: '128 Gb', id: 'flexCheckChecked128' },
//         { name: '256 Gb', id: 'flexCheckChecked256' }
//     ];

//     const [filteredList, setFilteredList] = useState(itemProduct);
//     const [selectedBrand, setSelectedBrand] = useState([]);
//     const [selectedMemory, setSelectedMemory] = useState([]);

//     const handleBrandChange = (name) =>{
//         //xử lý input
//         let newSelected = [];
//         if(selectedBrand.some((i) => i === name)){
//             newSelected = selectedBrand.filter((i) => i !== name);
//         }
//         else newSelected = [...selectedBrand, name];
//         setSelectedBrand(newSelected)
//         //xử lý dữ liệu
//         if(newSelected.length){
//             //lọc xem các sản phẩm trong itemProduct có category trùng khớp với category ở trong newSelected
//             setFilteredList(itemProduct.filter((product) => newSelected.includes(product.brand)))
//         }
//         else setFilteredList(itemProduct)
//     }

//     const handleMemoryChange = (name) =>{
//         let newSelected = [];
//         if (selectedMemory.some((i) => i === name)){
//             newSelected = selectedMemory.filter((i) => i !== name)
//         }
//         else newSelected =[...selectedMemory ,name]
//         setSelectedMemory(newSelected)
//         if(newSelected.length){
//             setFilteredList(itemProduct.filter((product) => newSelected.includes(product.memory) ));
//         }
//         else setFilteredList(itemProduct)
//     }
    
//     // const handleChange =(name) => {
//     //     let newSelected = [...selectedBrand, ...selectedMemory]

//     // }


//     return(
//         <>
//         <div className="product-main-content row">
//             <>
//                 <FilteredList filteredList={filteredList}/>
//             </>
//             <div className="option-product col-xl-3 col-sm-3 row">
//                 <div className="option-product-detail-brand col-xl-12">
//                     <div className="head-option-product-brand">
//                         <div>Brand</div>
//                         <i className="fa fa-chevron-down" aria-hidden="true"></i>
//                     </div>
//                     <div className="detail-option-brand">
//                         <div className="checkbox-left-brand row ">
//                             {itemsBrand.map((item, index) => {
//                                 return (
//                                     <>
//                                         <div className="form-check col-xl-6">
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 onChange={() => handleBrandChange(item.name)}
//                                                 checked={selectedBrand.includes(item.name)}
//                                                 id={item.id}
//                                             />
//                                             <label className={`form-check-label ${item.className}`} htmlFor={item.id} >
//                                                 {item.name}
//                                             </label>
//                                         </div>
//                                     </>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="option-product-detail-memory col-xl-12">
//                     <div className="head-option-product-memory">
//                         <div>Memory</div>
//                         <i className="fa fa-chevron-down" aria-hidden="true"></i>
//                     </div>
//                     <div className="detail-option-memory ">
//                         <div className="checkbox-left-memory row  ">
//                             {itemsMemory.map((item, index) => {
//                                 return (
//                                     <>
//                                         <div className="form-check col-xl-6">
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 onChange={() => handleMemoryChange(item.name)}
//                                                 checked={selectedMemory.includes(item.name)}
//                                                 id={item.id}
//                                             />
//                                             <label className={`form-check-label ${item.className}`} htmlFor={item.id} >
//                                                 {item.name}
//                                             </label>
//                                         </div>
//                                     </>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//     )
// }



