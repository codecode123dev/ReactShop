import React from "react";
import {Icons } from '../assets/icons'

export function Breadcrumb() {
    const url = '#';

    return(
        <div className="breadcrumb">
            <div className="detail-breadcrumb">
                <a className="main-breadcrumb" href={url}>Main</a>
                <img className="icons-dot" src={`${Icons.dot}`} alt="" />
                <a className="tablets-breadcrumb" href={url}>Tablets</a>
            </div>
            <div className="icons-breadcrumb">
                <div className="icons-breadcrumb-compare">
                    <a href={url} className="icons-breadcrumb-compare">
                        <img className="img-compare" src={`${Icons.compare}`} alt="" />
                        <p href={url} className="content-breadcrumb-compare">Compare</p>
                    </a>
                </div>
                <div className="icons-breadcrumb-price">
                    <a href={url} className="icons-breadcrumb-price">
                        <img className="img-price-drop" src={`${Icons.price_drop}`} alt="" />
                        <p href={url} className="content-breadcrumb-price-drop">Price Drop</p>
                    </a>
                </div>
            </div>
        </div>
    )
}