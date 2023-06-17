import React from "react";
import {Icons } from '../assets/icons'
import { Link, useLocation } from 'react-router-dom'
import '../assets/css/Breadcrumb.css'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

const routes = [
    { path: '/users/:userId', breadcrumb: 'Example 1' },
    { path: '/data', breadcrumb: 'Example 2' }
  ];
export function Breadcrumb() {
    const url = '#';
    const breadcrumbs = useBreadcrumbs(routes);
    const location = useLocation()

    console.log(breadcrumbs)

    return(
        // <div className="breadcrumb">
        //     <nav>
        //         {breadcrumbs.map(({ match, breadcrumb }) => (
        //             <Link 
        //             key={match.url} 
        //             to={match.url}
        //             className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
        //             >
        //             {breadcrumb} / 
        //             </Link>
        //         ))}
        //     </nav>
        //     <nav>
        //         <Link to="/"
        //             className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
        //         >
        //             Home
        //         </Link>
        //         <span className="breadcrumb-arrow">&gt;</span>
        //         <Link to="/products"
        //             className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}
        //         >
        //             Products
        //         </Link>
        //         <span className="breadcrumb-arrow">&gt;</span>
        //         <Link to="/products/1"
        //             className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
        //         >
        //             Product 1
        //         </Link>
        //     </nav>

        //     <div className="icons-breadcrumb">
        //         <div className="icons-breadcrumb-compare">
        //             <a href={url} className="icons-breadcrumb-compare">
        //                 <img className="img-compare" src={`${Icons.compare}`} alt="" />
        //                 <p href={url} className="content-breadcrumb-compare">Compare</p>
        //             </a>
        //         </div>
        //         <div className="icons-breadcrumb-price">
        //             <a href={url} className="icons-breadcrumb-price">
        //                 <img className="img-price-drop" src={`${Icons.price_drop}`} alt="" />
        //                 <p href={url} className="content-breadcrumb-price-drop">Price Drop</p>
        //             </a>
        //         </div>
        //     </div>
        // </div>

        <div className="breadcrumbs">
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <div  className="bc" key={match.url}>
                <Link to={match.url || ""}>{breadcrumb}</Link>
                {index < breadcrumbs.length - 1 && " > "}
                </div>
            ))}
        </div>
    )
}