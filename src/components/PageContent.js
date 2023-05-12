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

export default function PageContent(props) {
    let url = '#';


    // filteredList tương đương với viết props.filteredList
    const {filteredList, setFilteredList, selectedBrand, setSelectedBrand, selectedMemory, setSelectedMemory, selectedTechnique,setSelectedTechnique} = props;

    

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
                        <OptionMainContent/>
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
                    />
                </div>
            </main>
        </div>
    )

}
