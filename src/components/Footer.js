import React from "react";

import { Icons } from "../assets/icons";



export default function Footer() {
    let url = '#';
    const contentFooterFirst = [
        {name: 'Corporate sales'},
        {name: 'Feedback'},
        {name: 'Jobs'},
        {name: 'News'},
        {name: 'Sales Rules'},
        {name: 'For partners'}
    ]
    const contentFooterSecond = [
        {name: 'Bonus program'},
        {name: 'Gift Cards'},
        {name: 'Bill Payment Verification'},
        {name: 'Loans'},
        {name: 'Delivery'},
        {name: 'Service centers'}
    ]
    const contentFooterThird = [
        {name: 'How to place an order'},
        {name: 'Ways of payment'},
        {name: 'Exchange and return of goods'},
        {name: 'Warranty service'},
        {name: 'Order status'},
        {name: 'Knowledge base'}
    ]

    return (
        <div className="footer">
            <div className=" all-information-detail row justify-content-between">
                <div className="footer-constructor row col-xl-2 ">
                    <div className="img-footer  col-xl-12 col-5">
                        <img className="img-constructor-footer" src={Icons.constructor} alt="" />
                    </div>
                    <div className="address-information font-size-14 col-xl-12 col-6 row offset-1 offset-xl-0">
                        <a className="address-items-first col-12" href={url}>12 Water St. Vacouver, BC V6B 132 United States
                        </a>
                    </div>
                </div>
                <div className="footer-mobile font-size-14 row  col-xl-4 ">
                    <div className="information-detail-first  col-5 col-xl-6 row gap-xl-2 ">
                        {contentFooterFirst.map((item,index) => {
                            return(
                                <React.Fragment key={index}>
                                    <a className="col-xl-12" href={url}>{item.name}</a>
                                </React.Fragment>
                            )
                        })}
                    </div>

                    <div className="information-detail-second col-6 offset-1 offset-md-0 col-xl-6 row gap-xl-2">
                        {contentFooterSecond.map((item,index) => {
                            return(
                                <React.Fragment key={index}>
                                    <a className="col-xl-12" href={url}>{item.name}</a>
                                </React.Fragment>
                            )
                        })}
                    </div>

                </div>

                <div className="information-detail-third font-size-14  col-xl-2 row gap-xl-2-half ">
                    {contentFooterThird.map((item,index) => {
                        return(
                            <React.Fragment key={index}>
                                <a className="col-xl-12" href={url}>{item.name}</a>
                            </React.Fragment>
                        )
                    })} 
                   

                </div>

                <div className="information-detail-fourth font-size-14 col-xl-2-half  ">
                    <p href={url}>2023 Company. All Rights Reserved</p>
                    <div className="information-detail-fourth-item row">
                        <p className="col-4 col-xl-12">Terms & Conditions</p>
                        <p className="col-3 offset-1 col-xl-12 offset-xl-0">Privacy Policy</p>

                    </div>
                </div>
            </div>

        </div>
    )
}