import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Link, Route, useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";

// export function FilteredList(props){

//     const url = '#';
//     return(
//         <div className=" row col-xl-9 col-sm-9 col-12  product-items">
//                 {props.filteredList.map((item, index) => {
//                     return (
//                         <React.Fragment key={index}>
//                             <div className="col-xl-4 col-sm-4 col-12 wrap-product-item " >
//                                 <div className="product-items-content" >
//                                     <a href={url} className="product-item-img">
//                                         {/* <div className="product-item-img">  */}
//                                         <img className="product-main-img" src={item.img} alt="" />
//                                         {/* </div> */}
//                                     </a>
//                                     <div className="detail-product-all">
//                                         <a href={url} className="detail-product">
//                                             <p className="name-product font-size-10 ">{item.category}</p>
//                                             <b className="category-product font-size-14  ">{item.name}</b>
//                                             <p className="price-product font-size-12  ">${item.price}</p>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </React.Fragment>
//                     )
//                 })}
//                 <div className="row wrap-show-product">
//                     <button className="btn-show-product ">Show More</button>
//                 </div>
//             </div>
//     )
// }


// export function FilteredList(props){

//     const url = '#';


//     return(
//         <div className=" row col-xl-9 col-sm-9 col-12  product-items">
//                 {props.filteredList.map((item, index) => {
//                     return (
//                         <React.Fragment key={index}>
//                             <div className="col-xl-4 col-sm-4 col-12 wrap-product-item " >
//                                 <div className="product-items-content" >
//                                     <a href={url} className="product-item-img">
//                                         {/* <div className="product-item-img">  */}
//                                         <img className="product-main-img" src={item.img} alt="" />
//                                         {/* </div> */}
//                                     </a>
//                                     <div className="detail-product-all">
//                                         <a href={url} className="detail-product">
//                                             <p className="name-product font-size-10 ">{item.category}</p>
//                                             <b className="category-product font-size-14  ">{item.name}</b>
//                                             <p className="price-product font-size-12  ">${item.price}</p>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </React.Fragment>
//                     )
//                 })}
//                 {/* <div className="row wrap-show-product">
//                     <button className="btn-show-product ">Show More</button>
//                 </div> */}
//             </div>
//     )
// }


export function FilteredList(props) {
    const url = '#';
    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    // calculate indices of items to display on the current page
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    // create a copy of the filtered list with only the items to display on the current page
    const displayedItems = [...props.filteredList].splice(firstIndex, itemsPerPage);


    // //show detail
    // const [detailProduct, setDetailProduct] = useState([])
    // const navigate = useNavigate();

    // const handleClick = (item) => ()=>{
    //     setDetailProduct([{name: item.name, img: item.img,price: item.price, category:item.category, id: item.id}])
    //     navigate('/detail')

    // }
    // console.log(detailProduct)
    // const {detailProduct} = props

    return (
        <div className="row col-xl-9 col-sm-9 col-12 product-items">
            {displayedItems.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className="col-xl-4 col-sm-4 col-12 wrap-product-item">
                            <div className="product-items-content">
                                <p className="product-item-img">
                                    <img className="product-main-img" src={item.img} alt="" />
                                </p>
                                <div className="detail-product-all">
                                    <div className="detail-product">
                                        <p className="name-product font-size-10 ">{item.category}</p>
                                        <Link to={`/products/${item.id}`} className="category-product font-size-14">{item.name}</Link>
                                        <p className="price-product font-size-12  ">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <button onClick={handleClick(item)} className="text-[14px] border-[2px]" type="button" >show</button> */}
                        </div>
                    </React.Fragment>
                )
            })}

            {props.filteredList.length > itemsPerPage && (
                <div className="row wrap-show-product">
                    <ReactPaginate
                        pageCount={Math.ceil(props.filteredList.length / itemsPerPage)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLabel="..."
                        breakLinkClassName="page-link"
                    />
                </div>
            )}
        </div>
    )
}


