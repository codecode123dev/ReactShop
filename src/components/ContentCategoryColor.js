import React from "react";

export function ContentCategoryColor(item){

    return(
        <div className="color-items col-xl-4">
            <span className={`style-color-one ${item.className}`}></span>
            <p>{item.name}</p>
        </div>
    )
}