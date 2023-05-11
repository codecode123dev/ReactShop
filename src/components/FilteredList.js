import React,{useState,useEffect} from "react";


export function FilteredList(props){
    const url = '#';
    return(
        <div className=" row col-xl-9 col-sm-9 col-12  product-items">
                {props.filteredList.map((item, index) => {
                    return (
                        <>
                            <div className="col-xl-4 col-sm-4 col-12 wrap-product-item " >
                                <div className="product-items-content" >
                                    <a href={url} className="product-item-img">
                                        {/* <div className="product-item-img">  */}
                                        <img className="product-main-img" src={item.img} alt="" />
                                        {/* </div> */}
                                    </a>
                                    <div className="detail-product-all">
                                        <a href={url} className="detail-product">
                                            <p className="name-product font-size-10 ">{item.category}</p>
                                            <b className="category-product font-size-14  ">{item.name}</b>
                                            <p className="price-product font-size-12  ">${item.price}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                <div className="row wrap-show-product">
                    <button className="btn-show-product ">Show More</button>
                </div>
            </div>
    )
}