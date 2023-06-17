import React, { useState } from "react";
import { FilteredList } from "./FilteredList";
import MultiRangeSlider from "./MultiRangeSlider";
// import { BrowserRouter } from 'react-router-dom';
// import queryString from "query-string";
// import { itemProduct } from "../pages/HomePage";



export function FilterBrandAndMemory(props) {
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

    const itemsMemory = [
        { name: '8Gb', id: 'flexCheckChecked8' },
        { name: '16 Gb', id: 'flexCheckChecked16' },
        { name: '32 Gb', id: 'flexCheckChecked32' },
        { name: '64 Gb', id: 'flexCheckChecked64' },
        { name: '128 Gb', id: 'flexCheckChecked128' },
        { name: '256 Gb', id: 'flexCheckChecked256' }
    ];

    const checkboxTechnique = [
        { name: 'iPad Pro', number: 10, id: 'flexCheckDefaultIpad' },
        { name: 'Media Pad', number: 2, id: 'flexCheckDefaultMedia' },
        { name: 'iPad mini', number: 4, id: 'flexCheckDefaultIpadMini' },
        { name: 'Galaxy Tab S', number: 14, id: 'flexCheckDefaultGalaxyS' },
        { name: 'Galaxy Tab A', number: 12, id: 'flexCheckDefaultGalaxyA' },
        { name: 'Muze', number: 7, id: 'flexCheckDefaultMuze' },
        { name: 'iPad Pro', number: 10, id: '' },
        { name: 'iPad Pro', number: 10, id: '' },
        { name: 'iPad Pro', number: 10, id: '' },
        { name: 'iPad Pro', number: 10, id: '' }
    ];

    const checkboxFeatures = [
        { name: 'Calorie monitoring', id: 'flexCheckCalorie' },
        { name: 'Sleep Monitoring', id: 'flexCheckSleep' },
        { name: 'Physical activity', id: 'flexCheckPhysical' },
        { name: 'Pulse Measurement', id: 'flexCheckPulse' },
        { name: 'Stopwatch', id: 'flexCheckStopwatch' },
        { name: 'Timer', id: 'flexCheckTimer' },
        { name: 'Sleep Monitoring', id: '' },
        { name: 'Sleep Monitoring', id: '' },
        { name: 'Sleep Monitoring', id: '' }
    ];

    const itemColorsRowOne = [
        { name: 'Purple', className: ' style-color-purple' },
        { name: 'Black', className: ' style-color-black' },
        { name: 'Red', className: ' style-color-red' },
        { name: 'Orange', className: ' style-color-orange' },
        { name: 'Blue', className: ' style-color-blue-blood' },
        { name: 'White', className: ' style-color-white' },
        { name: 'Brown', className: ' style-color-brown' },
        { name: 'Green', className: ' style-color-green' },
        { name: 'Yellow', className: ' style-color-yellow' },
        { name: 'Gray', className: 'style-color-gray' },
        { name: 'Pink', className: 'style-color-pink' },
        { name: 'Blue', className: 'style-color-blue-light' }
    ];



    // const state = { page_id: 1, user_id: 5 };
    // const url = "hello-world.html";

    // history.pushState(state, "", url);

    const { filteredList, setFilteredList, selectedBrand, setSelectedBrand, selectedMemory, setSelectedMemory, selectedTechnique, setSelectedTechnique, selectedFeature, setSelectedFeature } = props;


    const changeRoute = (nameCategory, newSelected) => {
        const url = new URL(window.location);
        // const urlName = new URL(window.location);
        window.history.pushState({}, "", url);

        if(newSelected.length) url.searchParams.set(nameCategory, newSelected.toString());
        else  url.searchParams.delete(nameCategory);//xóa route khi newSelected ko có element nào trong mảng

        window.history.pushState({}, "", url);

    }

    const handleBrandChange = (name) => {
        //xử lý input
        let newSelected = [];
        if (selectedBrand.some((i) => i === name)) {
            newSelected = selectedBrand.filter((i) => i !== name);
        }
        else newSelected = [...selectedBrand, name];
        setSelectedBrand(newSelected)
        
        //get url push to route
        changeRoute("brand", newSelected)
    }

    const handleMemoryChange = (name) => {
        let newSelected = [];
        if (selectedMemory.some((i) => i === name)) {
            newSelected = selectedMemory.filter((i) => i !== name)
        }
        else newSelected = [...selectedMemory, name]
        setSelectedMemory(newSelected)

        //get url push to route
        changeRoute("memory", newSelected)

    }

    const handleTechniqueChange = (name) => {
        let newSelected = [];
        if (selectedTechnique.some((i) => i === name)) {
            newSelected = selectedTechnique.filter((i) => i !== name);
        }
        else newSelected = [...selectedTechnique, name];
        setSelectedTechnique(newSelected)

        changeRoute("technique", newSelected)
    }

    const handleFeatureChange = (name) => {
        let newSelected = [];
        if (selectedFeature.some((i) => i === name)) {
            newSelected = selectedFeature.filter((i) => i !== name)
        }
        else newSelected = [...selectedFeature, name];
        setSelectedFeature(newSelected)

        changeRoute("feature", newSelected)
    }


    //get url push to console
    // console.log(selectedBrand);
    // console.log(queryString.parse(window.location.search), {arrayFormat: 'comma'});

    return (
        <>
            <div className="product-main-content row">
                <>
                    {/* chuyền từ FilteredList ra đây */}
                    <FilteredList filteredList={filteredList} />
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
                                            <div key={index} className="form-check col-xl-6">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    onChange={() => handleBrandChange(item.name)}
                                                    checked={selectedBrand.includes(item.name)}
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
                    <div className="option-product-detail-memory col-xl-12">
                        <div className="head-option-product-memory">
                            <div>Memory</div>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="detail-option-memory ">
                            <div className="checkbox-left-memory row  ">
                                {itemsMemory.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="form-check col-xl-6">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    onChange={() => handleMemoryChange(item.name)}
                                                    checked={selectedMemory.includes(item.name)}
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

                    <div className="option-product-detail-technique col-xl-12">
                        <div className="head-option-product-technique">
                            <div>Technique Series</div>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="checkbox-all-technique font-size-5rem">
                            <div className="checkbox-technique">
                                {checkboxTechnique.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="form-check check-box-technique" >
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    checked={selectedTechnique.includes(item.name)}
                                                    id={item.id}
                                                    onChange={() => handleTechniqueChange(item.name)} />
                                                <label className="form-check-label text-check-label" htmlFor={item.id}>
                                                    {item.name}
                                                </label>
                                                <label className="content-item-technique content-iPad font-size-12">{item.number}</label>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="option-product-detail-features col-xl-12">
                        <div className="head-option-product-features">
                            <div>Features</div>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="checkbox-all-features font-size-5rem">
                            <div className="checkbox-features">
                                {checkboxFeatures.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="form-check check-box-technique">
                                                <input className="form-check-input" 
                                                type="checkbox" 
                                                checked={selectedFeature.includes(item.name)} 
                                                id={item.id} 
                                                onChange={() => handleFeatureChange(item.name)} />
                                                <label className="form-check-label text-check-label" htmlFor={item.id}>
                                                    {item.name}
                                                </label>
                                                <label className="content-item-technique content-iPad font-size-12">{item.number}</label>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="option-product-detail-color col-xl-12">
                        <div className="head-option-product-color">
                            <div>Color</div>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="color-detail-all">
                            <div className="row-color-one row">
                                {itemColorsRowOne.map((item, index) => {
                                    return (
                                        <>
                                        <div key={index} className="color-items col-xl-4">
                                            <span className={`style-color-one ${item.className}`}></span>
                                            <p>{item.name}</p>
                                        </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="option-product-detail-price col-xl-12">
                        <div className="head-option-product-price">
                            <div>Price</div>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                        <div className="multiple-range-slider">
                            <MultiRangeSlider
                                min={0}
                                max={3000}
                                onChange={({ min, max }) => (`min = ${min}, max = ${max}`)}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}



