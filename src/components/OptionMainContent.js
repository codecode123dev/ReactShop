import React, {useState} from "react";


const OPTION_SORT = {
    PRICE: 'price',
    NAME: 'name',
    POPULARITY: 'popularity'
}
export function OptionMainContent(props){
    const url = '#';

    // const [selectedSort, setSelectedSort] = useState()

    // const handlePrice = () => {
    //     setSelectedSort(OPTION_SORT.PRICE)
    // }

    // const handleSortPrice = () ={

    // }


    return(
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
                        <a href={url} >Price</a>
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
    )
}