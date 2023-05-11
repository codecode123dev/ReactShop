import React from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import { ContentCategoryColor } from "./ContentCategoryColor";
import { ContentCategoryFandT } from "./ContentCategoryFandT";
import { ContentCategoryBrandAndMemory } from "./ContentCategoryBrandAndMemory";


export function FilterCategoryProducts(){
    const itemsBrand = [
        { name: 'Apple', id: 'flexCheckCheckedApple' },
        { name: 'Alcatel', id: 'flexCheckCheckedAlcatel' },
        { name: 'BQ', id: 'flexCheckCheckedBQ' },
        { name: 'Honor', id: 'flexCheckCheckedHonor' },
        { name: 'Meizu', id: 'flexCheckCheckedMeizu' },
        { name: 'OnePlus', id: 'flexCheckCheckedOnePlus' },
        { name: 'Samsung', id: 'flexCheckCheckedSamsung' },
        { name: 'ZTE', id: 'flexCheckCheckedZTE' }

    ];



    const itemsMemory = [
        { name: '8Gb', id: 'flexCheckChecked8' },
        { name: '16 Gb', id: 'flexCheckChecked16' },
        { name: '32 Gb', id: 'flexCheckChecked32' },
        { name: '64 Gb', id: 'flexCheckChecked64' },
        { name: '128 Gb', id: 'flexCheckChecked128' },
        { name: '256 Gb', id: 'flexCheckChecked256' }
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
    return(
        <>
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
                                    <ContentCategoryBrandAndMemory name={item.name} id={item.id} htmlFor={item.id} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <!-- Memory --> */}
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
                                    <ContentCategoryBrandAndMemory name={item.name} id={item.id} htmlFor={item.id} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <!-- end memory --> */}
            {/* <!-- Price --> */}
            <div className="option-product-detail-price col-xl-12">
                <div className="head-option-product-price">
                    <div>Price</div>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div className="multiple-range-slider">
                    <MultiRangeSlider
                        min={0}
                        max={3000}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                    />
                </div>
            </div>
            {/*  End Price  */}
            {/*  Color  */}
            <div className="option-product-detail-color col-xl-12">
                <div className="head-option-product-color">
                    <div>Color</div>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div className="color-detail-all">
                    <div className="row-color-one row">
                        {itemColorsRowOne.map((item, index) => {
                            return (
                                <ContentCategoryColor name={item.name} className={item.className}/>
                                // <div className="color-items col-xl-4">
                                //     <span className={`style-color-one ${item.className}`}></span>
                                //     <p>{item.name}</p>
                                // </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*  End Color  */}

            {/*  Technique Series  */}
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
                                    <ContentCategoryFandT name={item.name} id={item.id} htmlFor={item.id} number={item.number} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*  End Technique Series  */}

            {/*  Features  */}
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
                                    <ContentCategoryFandT name={item.name} id={item.id} htmlFor={item.id} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*  end features  */}
            </>
    )
}