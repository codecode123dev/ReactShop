import React from "react";

export function ContentCategory(item){
    return(
        <>
        <div className="form-check col-xl-6">
            <input className="form-check-input" type="checkbox" value="" id={item.id} />
            <label className={`form-check-label ${item.className}`} for={item.id} >
                {item.name}
            </label>
        </div>
        </>
    )
}