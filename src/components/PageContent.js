import React, { useState,useEffect } from "react";
import { Icons } from "../assets/icons";
import '../assets/css/PageContent.css';
import { ContentAllIcons } from "./ContentAllIcons";
// import { ContentProducts } from "./ContentProducts";
import { Breadcrumb } from "./Breadcrumb";
import { OptionMainContent } from "./OptionMainContent";
// import { FilterCategoryProducts } from "./FilterCategoryProducts";
// import { FilterBrands } from "./FilterBrands";
// import { TestFilterBrandAndMemory } from "./TestFilterBrandAndMemory";
// import { Test } from "./Test";
import { FilterBrandAndMemory } from "./FilterBrandAndMemory";
import { OPTION_SORT } from "../pages/HomePage";
import { OPTION_SORT_ORDER } from "../pages/HomePage";

export default function PageContent(props) {
    let url = '#';

    const listSort = [
        {title: "Popularity", value: OPTION_SORT.POPULARITY},
        {title: "New", value: OPTION_SORT.NEW},
        {title: "Price", value: OPTION_SORT.PRICE},
        {title: "Name", value: OPTION_SORT.NAME},
    ]

    const listSortOrder = [
        {title: "Ascending", value : OPTION_SORT_ORDER.ASCENDING},
        {title: "Descending", value : OPTION_SORT_ORDER.DESCENDING }
    ]
    

    // filteredList tương đương với viết props.filteredList
    const {
        filteredList, setFilteredList, selectedBrand, setSelectedBrand, selectedMemory, setSelectedMemory,
        selectedTechnique, setSelectedTechnique, selectedFeature, setSelectedFeature ,
        selectedSort, onSort, handleChangeSort, sortPrice
    } = props;

    return (
        <div className="page-content row">
            <aside className="aside col-xl-3">
                <>
                    <ContentAllIcons />
                </>
                <div className="product-img">
                    <a href={url} className="product-img-watch">
                        <p className="title-product-img">The New Smart Watches</p>
                        <img className="img-the-new-watch" src={Icons.the_new_watch} alt="" />
                    </a>
                    <button className="btn-watch-product-img">View More</button>
                </div>
                <div className="product-img">
                    <a href={url} className="product-img-tablet">
                        <img className="img-tablet-samsung" src={Icons.new_tablets} alt="" />
                        <p className="title-product-img title-product-img-tablet">New Tablets Samsung</p>
                    </a>
                </div>
            </aside>
            <main className="main col-xl-9">
                <div className="main-content">
                    <div className="head-main-content">
                        <Breadcrumb/>
                        {/* <OptionMainContent  /> */}
                        <div className="option-main-content font-size-2rem">
                            <div className="title-main-content">Apple Pro Display XDR</div>
                            <div className="option font-size-2rem">
                                <div className="option-child">
                                    <div className="option-child-detail">
                                        <a href={url}>Sort By:</a>
                                    </div>
                                    {listSort.map((item,index) => {
                                        return(
                                            <div key={index} className="option-child-detail">
                                                <span
                                                    className={`sort-item ${item.value === selectedSort ? 'selected-sort-item' : ''}`}
                                                    onClick={() => onSort(item.value)}
                                                >
                                                    {item.title}
                                                </span>
                                            </div>
                                        )
                                    })}

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
                            {/*
                            <div className="sort-by">
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example" value=''
                                // onChange={sortPrice}
                                // onChange={(e) => setSortState(e.target.value)}
                                >
                                    <option select value={``}  >Open this select menu</option>
                                    {/* {listSortOrder.map((item,index) => {
                                        return(
                                            // <option value={item.value} >{item.title} </option>
                                        )
                                    })} */}
                                    {/*}
                                    <option value='Ascending'> Ascending </option>
                                    <option value='Descending'>Descending</option>
                                </select>
                            </div>

                            */}
                        </div>
                    </div>
                    {/* <div className="product-main-content row">
                        <div className=" row col-xl-9 col-sm-9 col-12  product-items">
                            {itemProduct.map((item, index) => {
                                return (
                                    <>
                                        <ContentProducts name={item.name} img={item.img} category={item.category} price={item.price} />
                                    </>
                                )
                            })}
                            <div className="row wrap-show-product">
                                <button className="btn-show-product ">Show More</button>
                            </div>
                        </div>
                        <div className="option-product col-xl-3 col-sm-3 row">
                            <FilterCategoryProducts/>
                        </div>
                    </div> */}
                    <FilterBrandAndMemory
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
                    />
                </div>
            </main>
        </div>
    )

}
